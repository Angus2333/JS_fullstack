const koa =require('koa')
const app= new koa()

app.use(()=>{
  ctx.body='hello'
})

app.listen(3000)