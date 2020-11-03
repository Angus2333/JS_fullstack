# 学习系统
客户？我
需求：存储同学的信息，OA
- 学籍
1. 同学信息登录及完善系统
  原型设计表单 小piu
2. 照片上传功能
  云开发文件上传
- 项目的形式
  1. 小程序 用户端
  vant + 云开发 
  微信/QQ小程序
  2. PC端的后台系统
    vue + elementUI
    分班级  分页 列表 详情 
- 功能要求
  1. 角色区分 Admin/Teacher/stuAdmin/Student|tryStudent 
    角色判断 role -1>1>2>3>4>5 数字越大，权限越大
    user_id uid(学号 1000)  pro_num(项目数量) has_resume(简历) 实习单位 实习薪资 转正薪资
    bid  bname
  2. 试听功能|邀请功能
     运营 分享  生成图功能   百度一下

  3. 学习跟进系统 
    - 收集github账号
    - github的提交
    - 爬虫 得到提交数据 
  https://github.com/${shunwuyu}
  position-relative ->图片
    - 主动提交
      1. 每个人都有一张图，新的覆盖旧的
          gitPic_id url uid
      2. ts 标红
      3. 列表 班级
    - 文章 
      articles 
      _id uid  title desc ts 是否上过首页 点赞数
      love_num 怎么计算
      user  love_num  0
    - 项目