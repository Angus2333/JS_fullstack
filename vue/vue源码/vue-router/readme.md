# 如何实现前端路由

1. url改变 却不引起页面的刷新
2. 如何检测url变化
  
url # 后面就是哈希值  改变了不会实现页面刷新

# hash实现
1.改变url操作：
① 浏览器的前进后端按钮
② a标签
③ window.location

# history
pushState 和 replaceState 这两个方法不会实现页面刷新,且可以更改url
浏览器的前进后退按钮一定会触发  a标签也会触发 window.location pushState 和 replaceState 都会触发以及页面初次渲染都会触发 popstate 
所以通过监听popstate 来检测页面的变化

# 基于vue实现vue router
