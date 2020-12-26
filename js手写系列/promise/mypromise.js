const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){ // fn 有两个参数 resolve函数 和  reject 函数
  const that = this
  that.state=PENDING
  this.value = null  //用于保存reject函数和resolve传的值
  this.rejectedCallbacks=[]  // 用于保存.then 中的回调，用数组是因为有多个.then
  this.resolvedCallbacks=[]
  try{
    fn(resolve,reject)
  }catch{
    reject()
  }

  function resolve(value){ //promise状态是不可逆的，不可能resolve和reject一起执行
    // console.log("ccc");
    if(that.state===PENDING){
      // console.log('ddd');
      that.state=RESOLVED  //一旦状态变成resolve，reject就永远不可能执行
      that.value = value   //把resolve的拿到的参数给MYPromise中的value保存
      that.resolvedCallbacks.map(cb=>{
        cb(that.value)  //这里就是为什么.then的回调函数为什么能拿到resolve的参数
      })
    }else{
      that.resolvedCallbacks.map(cb=>{
        cb(that.value)  //这里就是为什么.then的回调函数为什么能拿到resolve的参数
      })
    }
  }

  function reject(value){
    if(that.state===PENDING){
      that.state=REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb=>{
        cb(that.value)  
      })
    }
  }
  
  MyPromise.prototype.then=function(onFulfilled,onRejected){
    // console.log('111');
    const that = this
    onFulfilled= typeof onFulfilled==='function' ? onFulfilled:v=>v
    onRejected= typeof onRejected==='function' ? onRejected:r=>{throw r}
    if(that.state===PENDING){
      this.resolvedCallbacks.push(onFulfilled)
    }
    if(that.state===RESOLVED){
      onFulfilled(that.value)
    }
    if(that.state===REJECTED){
      onFulfilled(that.value)
    }
  }
}

function a(){
  return new MyPromise((resolve,j)=>{
    console.log('aaa');
    resolve('bbb')
  })
}
a().then(res=>{
  console.log(res);
  
})
// 面试：为什么promise里面的代码先执行,.then()里面的代码后执行？
