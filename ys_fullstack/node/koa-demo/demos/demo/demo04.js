const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
    //开启服务
    //ctx上下文
const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
}
app.use(main)
app.listen(3000, () => {
    console.log('3000端口启动');
})