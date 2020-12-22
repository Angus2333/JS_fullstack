class VueRouter{

}
VueRouter.install = function () {

}
export default VueRouter

Vue.use=function(plugin){
  const installedPlugins=(this._installedPlugs||(this._installedPlugins=[]))
  if(installedPlugins.indexOf(plugin)>-1){  // 每use一个组件都会被装到_installedPlugs
    return this 
  }
  const args=toArray(arguments,1)
  args.unshift(this) // this代表vue
  if(typeof plugin.install==='function'){
    plugin.install.apply(plugin,args)
  }else if(typeof plugin === 'function'){
    plugin.apply(null,plugin,args)
  }
  installedPlugins.push(plugin)
  return this
}
// 1.use只认install  对象（一定要具有install函数） 或者 函数 
//   如果是函数就把这个函数执行

// 面试题：为什么vue插件不会被重新加载？