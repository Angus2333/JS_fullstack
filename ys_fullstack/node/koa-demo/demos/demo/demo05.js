const Koa = require('koa')
const app = new Koa()
    // const fs = require('fs')
    //开启服务
    //ctx上下文 里面有很多方法
const main = ctx => {
    if (ctx.request.url !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">index page</a>'
    } else {
        ctx.response.body = 'hello world'
    }

}
app.use(main)
app.listen(3000, () => {
    console.log('3000端口启动');
})