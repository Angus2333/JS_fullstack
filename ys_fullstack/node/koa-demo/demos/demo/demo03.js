const Koa = require('koa')
const app = new Koa()
    // ctx:上下文 ctx就是代表koa
const main = (ctx) => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>helloworld</data>'
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>helloworld</p>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data:helloworld}'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'aaa'
    }
}
app.use(main)
app.listen(3001, () => {
    console.log('项目启动成功');
})