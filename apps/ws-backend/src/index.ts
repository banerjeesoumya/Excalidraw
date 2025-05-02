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
    rooms: string[],
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
        const { type, roomId } = parsedData
        if  (type === 'join') {
            const user = users.find((user) => user.userId === userId)
            if (user) {
                user.rooms.push(roomId)
                ws.send(JSON.stringify({
                    message: `User ${userId} joined room ${roomId}`
                }))
            } else {
                ws.send(JSON.stringify({
                    message: `User ${userId} not found in room ${roomId}`
                }))
            }
        }
        if (type === 'leave') {
            const user = users.find((user) => user.userId === userId)
            if (user) {
                user.rooms = user.rooms.filter((room) => room !== roomId)
                ws.send(JSON.stringify({
                    message: `User ${userId} left room ${roomId}`
                }))
            } else {
                ws.send(JSON.stringify({
                    message: `User ${userId} not found in room ${roomId}`
                }))
            }
        }
        if (type === 'chat') {
            const roomId = parsedData.roomId
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
                        message: `User ${userId} sent message to room ${roomId}`,
                        data: {
                            message: message,
                        }
                    }))
                }
            })
        }

    })
})