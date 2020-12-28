let a={}
Object.defineProperty(a,'name',{
  get:function(){
    return 'aaa'
  }
})
// console.log(a.name);
for(let item in a){
  console.log(item);
} 