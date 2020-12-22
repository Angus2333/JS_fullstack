# 全栈目录结构
- 前台
  - 用户端 vue
  - 管理后台 react + antd
- API后端 服务器端

前端生命周期  mounted
axios 
API 向后端通信
从http://localhost:8080->:3000 跨域

- 后端接口先调通
  localhost:3000/users/:参数
  {
    name:'xxx',
    sex:'nan'
  } 
1. 要有一个URL响应
^/api/v1/users/:xxx  api/v1 是版本
加路由 /api/v1
app.use(启用路由)
2. 返回json
3. postman 模拟请求
4. 前端请求
5. 跨域不只是域名不一样，端口和协议不一样，都算跨域
   