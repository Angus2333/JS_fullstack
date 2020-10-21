const Koa = require('koa')
const app = new Koa()
    // ctx:上下文 ctx就是代表koa
const main = (ctx) => {
    ctx.response.body = 'hello world'
}
app.use(main)
app.listen(3001, () => {
    console.log('项目启动成功');
})