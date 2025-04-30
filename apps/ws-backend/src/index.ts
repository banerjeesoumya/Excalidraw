import { WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from '@repo/backend-common/config'

const wss = new WebSocketServer({
    port : 8080 
})

wss.on('listening',() => {
    console.log(`WebSocket Server is running on port ${wss.options.port }`)
})

wss.on('connection', (ws, request) => {
    console.log('Client connected')
    const url = request.url
    if (!url) {
        console.log('No URL provided')
        return
    }

    const querParams = new URLSearchParams(url.split('?')[1]);
    const token = querParams.get('token') as string
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded || !(decoded as JwtPayload).id) {
        ws.close();
        return;
    }
    ws.on('message', (msg) => {
        console.log(msg)
        ws.send('pong')
    })
})