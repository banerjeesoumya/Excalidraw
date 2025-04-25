import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
    port : 8080 
})

wss.on('listening',() => {
    console.log(`WebSocket Server is running on port ${wss.options.port}`)
})

wss.on('connection', (ws) => {
    console.log('Client connected')
    ws.on('message', (msg) => {
        console.log(msg)
        ws.send('pong')
    })
})