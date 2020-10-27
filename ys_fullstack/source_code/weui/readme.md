# weui 源码分析，并用stylus 实现
- src dist 
   src 源码目录
   dist 编码过后
   weui.style入口文件

- css框架是70%的常见业务
1. reset 样式重置 比如说margin:0,padding:0 等
2. weui stylus变量是替换关系
```stylus
  $weuiFontEN=-apple-system-font,"Helvetica Neue" //英文字体
  $weuiFontSans="PingFang SC","Hiragino SansGB" "Microsoft YaHei" //中文字体
  $weuiFontDefault=$weuiFontEN,$weuiFontSans
```
3. stylus mixin 代码的封装以及复用
区别于函数
参数赋初值的写法
```css
	setTabColor($c=rgba(0,0,0,0))
	-webkit-tap-highlight-color $c
```