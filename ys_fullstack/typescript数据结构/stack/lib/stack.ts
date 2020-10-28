export default class Stack{
  //声明属性 private私有
  //item 按照一定的方法去操作
  private items:any[]; //存储结构
  constructor(){
    this.items=[]
  }
  //入栈
  push(item:any){
    this.items.push(item)
  }
  //出栈
  pop(){
   return this.items.pop()
  }
  //返回栈顶
  peek(){
    return this.items[this.items.length-1]
  }
  isEmpty(){
    return this.items.length==0
  }
  clear(){
   this.items=[]
  }
  size():number{
    return this.items.length
  }
  toString(){
    return this.items.toString()
  }
}