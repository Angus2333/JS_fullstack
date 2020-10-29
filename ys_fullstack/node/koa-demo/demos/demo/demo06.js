const Koa = require('koa')
const router = require('koa-route') //定义接口
const app = new Koa()
    // const fs = require('fs')
    //开启服务
    //ctx上下文 里面有很多方法
const main = ctx => {
    ctx.response.body = 'hello world'
}
const about = ctx => {
        ctx.response.type = 'html'
        ctx.response.body = 'cscscscsc'
    }
    // app.use(main)
app.use(router.get('/about', about))
app.use(router.get('/', main))
app.listen(3000, () => {
    console.log('3000端口启动');
})