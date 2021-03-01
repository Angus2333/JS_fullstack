function deepClone(obj){
  if(typeof obj != 'object') return;
  let newObj = obj instanceof Array ? [] : {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = typeof obj[key] == 'object' ? deepClone(obj[key]):obj[key]
    }
  }
  return newObj
}
let a={
  b:{
    c:'wn'
  }
 }
let d=deepClone(a)
a.b.c='qqq'
console.log(d);