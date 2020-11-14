const fs = require('fs')
    //进程
const { exec } = require('child_process')
const http = require('http')
const { url } = require('inspector')
const server = http.createServer((req, res) => {
    // res.end('hello world')
    if (req.url === '/') {
        const files = []
        fs.readdirSync('./')
            .forEach(url => {
                files.push(`<a href="/${url}">${url}</a>`)
            })
        res.end(files.join('</br>'))
    } else {
        const exist = fs.existsSync('.' + req.url)
        if (!exist) {
            res.statusCode = 404;
            res.end('404')
            return
        }
        fs.readFile('.' + req.url, (err, file) => {
            if (!err) {
                const path = require('path')
                const extname = path.extname('.' + req.url)
                const map = {
                    '.js': 'application/javascript;charset=utf-8',
                    '.md': 'text/plain'
                }
                res.setHeader('Content-Type', `${map[extname]}`)
                res.end(file)
            }
        })

    }
})
server.listen(8080, () => {
    const url = `http://127.0.0.1:8080`
    console.log('服务器请求成功');
    if (process.platform === 'win32') {
        exec(`open${url}`)
    } else {
        exec(`start${url}`)
    }
    // console.log(fs.readdirSync('./'));
})