function a() {
  return new Promise ((resolve, reject) => {
    setTimeout( () => {
      console.log('aaa');
      resolve('ok')
      // reject()
    })
  })
}
function b() {
  setTimeout( () => {
    console.log('bbb');
  })
}
function c() {
  setTimeout( () => {
    console.log('ccc');
  })
}
// b().then(b)
a().then(res=>{
  console.log(res);
}) 