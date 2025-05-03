import WebSocket, { WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from '@repo/backend-common/config'
import { prisma } from '@repo/db/client';

const wss = new WebSocketServer({
    port : 8080 
})

wss.on('listening',() => {
    console.log(`WebSocket Server is running on port ${wss.options.port }`)
})

interface User {
    ws: WebSocket,
    rooms: number[],
    userId: string 
}

const users: User[] = [];

function checkUserExists (token: string) : (string | null) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded || !(decoded as JwtPayload).id) {
            return null;
        }
        return (decoded as JwtPayload).id
    } catch (e) {
        console.log('Error verifying token', e)
        return null
    }
}

wss.on('connection', (ws, request) => {
    console.log('Client connected')
    const url = request.url
    if (!url) {
        console.log('No URL provided')
        return
    }

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') as string
    const userId = checkUserExists(token)
    if (!userId) {
        console.log('User does not exist')
        ws.close(4000, 'User does not exist')
        return
    }

    users.push({
        userId: userId,
        rooms: [],
        ws: ws
    })

    ws.on('message', async (msg) => {
        const parsedData = JSON.parse(msg.toString());
        const { type, roomName } = parsedData
        const roomExists = await prisma.room.findUnique({
            where:{
                slug: roomName
            }
        })
        if (!roomExists) {
            ws.send(JSON.stringify({
                message: `Room ${roomName} does not exist`,
            }))
        } else {
            const roomId = roomExists.id
            const userDet = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })
            if  (type === 'join') {
                const user = users.find((user) => user.userId === userId)
                if (user) {
                    user.rooms.push(roomId)
                    ws.send(JSON.stringify({
                        message: `User ${userDet?.name} joined room ${roomExists.slug}`,
                    }))
                } else {
                    ws.send(JSON.stringify({
                        message: `User ${userDet?.name} not found in room ${roomExists.slug}`
                    }))
                }
            }
            if (type === 'leave') {
                const user = users.find((user) => user.userId === userId)
                if (user && user.rooms.includes(roomId)) {
                    user.rooms = user.rooms.filter((room) => room !== roomId)
                    ws.send(JSON.stringify({
                        message: `User ${userDet?.name} left room ${roomExists.slug}`
                    }))
                } else {
                    ws.send(JSON.stringify({
                        message: `User ${userDet?.name} not found in room ${roomExists.slug}`
                    }))
                }
            }
            if (type === 'chat') {
                const roomId = roomExists.id
                const message = parsedData.message
                
                await prisma.chat.create({
                    data: {
                        roomId: roomId,
                        userId: userId,
                        message: message
                    }
                }).catch((e) => {
                    console.log('Error creating chat message', e)
                })
    
                users.forEach((user) => {
                    if (user.rooms.includes(roomId)) {
                        user.ws.send(JSON.stringify({
                            type: 'chat',
                            roomId: roomId,
                            message: `User ${userDet?.name} sent message to room ${roomExists.slug}`,
                            data: {
                                message: message,
                            }
                        }))
                    }
                })
            }
        }

    })
})