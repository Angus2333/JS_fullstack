const http = require('http')
const fs = require('fs')
const { Socket } = require('socket.io')
const { info } = require('console')
var server = http.createServer(function(req, res) {
    if (req.url !== '/favicon.ico') {
        res.writeHead(200, { "Content-type": "text/html" })
        const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
        myreadstream.pipe(res)
    }
})
const io = require('socket.io')(server);
io.on('connection', socket => {
    //客户端emit(发送)给服务端  服务端on(接受) 服务端emit 给另外一个客户端
    console.info('一个socket服务成功了')
    socket.on('link_to_server', (msg) => {
        console.info(`我收到一个问题${msg}`)
            //响应客户端
        io.emit('link_to_client', msg) //第一参数为发送和识别的指令，第二个参数为发送的内容
    })
});
server.listen(8888, () => {
    console.log('running');
});