var express = require('express');
var router = express.Router();
const svgCaptcha=require('svg-captcha')
const sms_util=require('./../util/sms_util')
const conn=require('../db/db')
const md5=require('blueimp-md5')
let users={} //用户信息的保存
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
 一次性图形验证码
*/
router.get('/api/captcha', (req, res) => {
  // 1. 生成随机验证码
  let captcha = svgCaptcha.create({
      color: true,
      noise: 3,
      ignoreChars: '0o1i',
      size: 4
  });
  // console.log(captcha.text);

  // 2. 保存
  users.captcha = captcha.text.toLowerCase();
  console.log(users.captcha);

  // 3. 返回客户端
  res.type('svg');
  res.send(captcha.data);
});

/*
发送验证码短信
*/
router.get('/api/send_code', (req, res) => {
  // 1. 获取手机号码
  let phone = req.query.phone;

  // 2. 随机产生验证码
  let code = sms_util.randomCode(6);
  // console.log(code);

  /* sms_util.sendCode(phone, code, function (success) {
      if (success) {
           users[phone] = code;
           res.json({success_code: 200, message: '验证码获取成功!'});
       } else {
           res.json({err_code: 0, message: '验证码获取失败!'});
       }
   });*/

  // 成功
  setTimeout(() => {
      users[phone] = code;
      res.json({success_code: 200, message: code});
  }, 2000);

  // 失败
  /*setTimeout(()=>{
      res.json({err_code: 0, message: '验证码获取失败!'});
  }, 2000);*/
  // res.json({err_code: 0, message: '验证码获取失败!'});

});


/*
手机验证码登录
*/
router.post('/api/login_code', (req, res) => {
  // 1. 获取数据
  const phone = req.body.phone;
  const code = req.body.code;

  // 2. 验证验证码是否正确
  if (users[phone] !== code) {
      res.json({err_code: 0, message: '验证码不正确!'});
  }

  // 3. 查询数据
  delete  users[phone];

  let sqlStr = "SELECT * FROM pdd_user_info WHERE user_phone = '" + phone + "' LIMIT 1";

  conn.query(sqlStr, (error, results, fields) => {
      if (error) {
          res.json({err_code: 0, message: '请求数据失败'});
      } else {
          results = JSON.parse(JSON.stringify(results));
        //   console.log(results);
          if (results[0]) {  // 用户已经存在
            //   console.log(results[0]);
              let results2=results[0]
              users.id = results2.id;
              // console.log(req.session);
              // 返回数据给客户端
              res.json({
                  success_code: 200,
                  message: {id: results[0].id, user_name: results[0].user_name, user_phone: results[0].user_phone}
              });
          } else { // 新用户
              const addSql = "INSERT INTO pdd_user_info(user_name, user_phone) VALUES (?, ?)";
              const addSqlParams = [phone, phone];
              conn.query(addSql, addSqlParams, (error, results, fields) => {
                  results = JSON.parse(JSON.stringify(results));
                  console.log(results);
                  if (!error) {
                      users.id = results.insertId;
                      let sqlStr = "SELECT * FROM pdd_user_info WHERE id = '" + results.insertId + "' LIMIT 1";
                      conn.query(sqlStr, (error, results, fields) => {
                          if (error) {
                              res.json({err_code: 0, message: '请求数据失败'});
                          } else {
                              results = JSON.parse(JSON.stringify(results));
                              // 返回数据给客户端
                              res.json({
                                  success_code: 200,
                                  message: {
                                      id: results[0].id,
                                      user_name: results[0].user_name,
                                      user_phone: results[0].user_phone
                                  }
                              });
                          }
                      });
                  }
              });
          }
      }
  });

});

/**
* 用户名和密码登录
*/
router.post('/api/login_pwd', (req, res) => {
  // 1. 获取数据
  const user_name = req.body.name;
  const user_pwd = md5(req.body.pwd);
  const captcha = req.body.captcha.toLowerCase();
  // console.log(captcha, req.session.captcha);

  // 2. 验证图形验证码是否正确
  if (captcha !== users.captcha) {
      res.json({err_code: 0, message: '图形验证码不正确!'});
      return;
  }
  delete users.captcha;


  // 3. 查询数据
  let sqlStr = "SELECT * FROM pdd_user_info WHERE user_name = '" + user_name + "' LIMIT 1";
  conn.query(sqlStr, (error, results, fields) => {
      if (error) {
          res.json({err_code: 0, message: '用户名不正确!'});
      } else {
          results = JSON.parse(JSON.stringify(results));
          if (results[0]) {  // 用户已经存在
              // 验证密码是否正确
              if (results[0].user_pwd !== user_pwd) {
                  res.json({err_code: 0, message: '密码不正确!'});
              } else {
                  users.id = results[0].id;
                  // 返回数据给客户端
                  res.json({
                      success_code: 200,
                      message: {
                          id: results[0].id,
                          user_name: results[0].user_name,
                          user_phone: results[0].user_phone
                      },
                      info: '登录成功!'
                  });
              }
          } else { // 新用户
              const addSql = "INSERT INTO pdd_user_info(user_name, user_pwd) VALUES (?, ?)";
              const addSqlParams = [user_name, user_pwd];
              conn.query(addSql, addSqlParams, (error, results, fields) => {
                  results = JSON.parse(JSON.stringify(results));
                  // console.log(results);
                  if (!error) {
                      users.id = results.insertId;
                      // console.log(req.session);
                      let sqlStr = "SELECT * FROM pdd_user_info WHERE id = '" + results.insertId + "' LIMIT 1";
                      conn.query(sqlStr, (error, results, fields) => {
                          if (error) {
                              res.json({err_code: 0, message: '请求数据失败'});
                          } else {
                              results = JSON.parse(JSON.stringify(results));
                              // 返回数据给客户端
                              res.json({
                                  success_code: 200,
                                  message: {
                                      id: results[0].id,
                                      user_name: results[0].user_name,
                                      user_phone: results[0].user_phone
                                  }
                              });
                          }
                      });
                  }
              });
          }
      }
      // console.log(req.session);
  });
});

/*
*  根据session中的用户id获取用户信息
* */
router.get('/api/user_info', (req, res) => {
  // 1.0 获取参数
  let userId = users.id;
  console.log(userId);
  // 1.1 数据库查询的语句
  let sqlStr = "SELECT * FROM pdd_user_info WHERE id = '" + userId + "' LIMIT 1";
  conn.query(sqlStr, (error, results, fields) => {
      if (error) {
          res.json({err_code: 0, message: '请求数据失败'});
      } else {
          results = JSON.parse(JSON.stringify(results));
          // console.log(results);
          if (!results[0]) {
              delete users.id;
              res.json({error_code: 1, message: '请先登录'});
          } else {
              // 返回数据给客户端
              res.json({
                  success_code: 200,
                  message: results[0]
              });
          }
      }
  });
});

/**
 * 退出登录
 */
router.get('/api/logout', (req, res) => {
    // 1. 清除session中userId
    delete  users.id;
    // 2. 提示用户
    res.json({
        success_code: 200,
        message: "退出登录成功"
    });
});
module.exports = router;
