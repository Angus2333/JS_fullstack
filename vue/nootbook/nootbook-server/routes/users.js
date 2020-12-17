const router = require('koa-router')()
const userService=require('../controllers/mySqlConfig')
const formatDate=require('../config/util')
router.prefix('/users') //prefix为前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
//登录
router.post('/userLogin',async(ctx,next)=>{
  let _username=ctx.request.body.username;
  let _userpwd=ctx.request.body.userpwd;
  //把参数拿到数据库里查询
  await userService.userLogin(_username,_userpwd)
  .then(res=>{
    // console.log(res);
    let r='';
    if(res.length){
      r='ok';
      let result={
        id:res[0].id,
        nickname:res[0].nickname,
        username:res[0].username
      }
      ctx.body={
        code:'80000',
        data:result,
        mess:'登录成功'
      }
    }else{
      r='error'
      ctx.body={
        code:'80004',
        data:r,
        mess:'账号或密码错误'
      }
    }
  })
  .catch(err=>{
    console.log(err);
    ctx.body={
      code:'80002',
      data:err
    }
  })
})
//注册
router.post('/userRegister',async(ctx,next)=>{
  let _username=ctx.request.body.username;
  let _userpwd=ctx.request.body.userpwd;
  let _nickname=ctx.request.body.nickname; 
  // console.log(_username,_userpwd,_nickname);
  if(!_username||!_nickname||!_userpwd){
    ctx.body={
      code:'80001',
      mess:'用户名或密码不能为空'
    }
  }
  await userService.findUser(_username).then(async(res)=>{
    // console.log(res);
    if(res.length){
      ctx.body={
        mess:'用户名已存在',
        code:'80003'
      }
    }else{
      await userService.insertUser([_username,_userpwd,_nickname]).then(res=>{
        // console.log(res);
        let r=''
        if(res.affectedRows!=0){
          r='ok'
          ctx.body={
            code:'80000',
            data:r,
            mess:'注册成功'
          }
        }else{
          r='error'
          ctx.body={
            code:'80004',
            data:r,
            mess:'注册成功'
          }
        }
      })
    }
  })
})
//查找文章对应列表
router.post('/findNoteListByType',async (ctx,next)=>{
  let note_type=ctx.request.body.note_type
  await userService.findNoteListByType(note_type).then(res=>{
    // console.log(res);
    let r=''
    if(res.length){
      r='ok'
      ctx.body={
        code:'80000',
        data:res,
        mess:'查找成功'
      }
    }else{
      r='error'
      ctx.body={
        code:'80004',
        mess:'查找失败'
      }
    }
  })
})
router.post('/findNoteDetailById',async(ctx,next)=>{
  let id=ctx.request.body.id
  await userService.findNoteDetailById(id).then(res=>{
    console.log(id);
    let r=''
    if(res.length){
      r='ok'
      ctx.body={
        code:'80000',
        data:res[0],
        mess:'查找成功'
      }
    }else{
      r='error'
      ctx.body={
        code:'80004',
        mess:'查找失败'
      }
    }
  })
})
router.post('/insertNote',async(ctx,next)=>{
  let note_content=ctx.request.body.note_content;
  let head_img=ctx.request.body.head_img;
  let title=ctx.request.body.title;
  let note_type=ctx.request.body.note_type;
  let useId=ctx.request.body.userId;
  let nickname=ctx.request.body.nickname;
  let c_time=formatDate(new Date().getTime(),'YY年MM月DD日')
  await userService.insertNote([useId,title,note_type,note_content,c_time,head_img,nickname]).then(res=>{
    console.log(res);
    let r=''
        if(res.affectedRows!=0){
          r='ok'
          ctx.body={
            code:'80000',
            data:r,
            mess:'注册成功'
          }
        }else{
          r='error'
          ctx.body={
            code:'80004',
            data:r,
            mess:'注册成功'
          }
        }
  })
})
module.exports = router
