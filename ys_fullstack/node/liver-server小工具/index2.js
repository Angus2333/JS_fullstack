const fs = require('fs')
const http = require('http')
const { exec } = require('child_process')
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
            res.statusCode = 404
            res.end('404')
        }
        fs.readFile('.' + req.url, (err, file) => {
            if (!err) {
                const path = require('path')
                const extname = path.extname('.' + req.url)
                const map = {
                    '.js': 'application/javascript;charset=utf-8',
                    '.md': 'text/plain;charset=utf-8'
                }
                res.setHeader('Content-Type', `${map[extname]}`)
                res.end(file);
            }
        })
    }
})

server.listen(8081, () => {
    const url = `http://127.0.0.1:8081`
    if (process.platform === 'win32') {
        exec(`start ${url}`)
    } else
        exec(`open ${url}`)
})