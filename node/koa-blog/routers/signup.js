const router=require('koa-router')()
const userModel=require('../lib/mysql')
const controller=require('../controller/c-signup')
router.get('/signup',async (ctx,next)=>{
  await ctx.render('signup',{ //render 渲染方法，这里加载到 signup.ejs 文件 | 第二参数是传参到模版
    session:ctx.session
  })
})
router.post('/signup',controller.postSignup)
module.exports= router 