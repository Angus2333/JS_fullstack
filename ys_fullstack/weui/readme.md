# weui 来自于微信的界面灵魂
- 把css玩到极致是什么样的能力增长点
  前端界面工程师（UI） weui框架 
  1. 不在于属性和选择器
  2. 面向对象的思想 封装、继承、多态
  封装   冗余的思想
  .btn 基类
    .btn.loading
  .btn {
      line-height:44px
  }
  .loading{
      bgi:loading.gif
  }
- 目的
  两周内搞定界面开发
  借鉴weui
- 写文章
  WEUI源码分析 button来也
  MDN 官方解释 tap-height-color 手记
  Block
    .weui-btn   中划线代表区块
    .weui-loading
  Modifier
   .weui-btn_loading  下划线代表状态
   .weui-btn_primary
  Element
  .weui-cells__title   两个下划线代表里面的某个控件 Element
  Block+modifier+组装的层次=网页世界 乐高
- 作业，打卡
  1.阅读-webkit-tap-height-color MDN 官方文档，并写一个小节
  2.盒子模型