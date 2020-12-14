const { find } = require('../models/user')
const User_col=require('../models/user')
const Password_col=require('../models/password')

const login = async(ctx)=>{
  // console.log(ctx.request.body);
  let req=ctx.request.body
  //1.连接用户的数据库，去数据库里查找，是否存在该条数据
  //2.查找语句
  //3.获取用户的userId
  const user=await User_col.findOne({
    account:req.username
  })
  //找不到
  if(!user){
    ctx.status=200
    ctx.body={
      code:0,
      msg:'账号不存在'
    }
  }
  //能找到
  const userId=user.userId
  //查密码
  const pass=await Password_col.find({
    userId
  },{
    hash:1
  })
  //如果在密码表里面找到了账号相同的id，判断这里的密码和前端传过来的密码是否匹配
}
module.exports={
  login
}