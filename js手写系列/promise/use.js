function a() {
  return new Promise ((resolve, reject) => {
      console.log('aaa')
      resolve('bbb')
    })
  // })
}

// b().then(b)
a().then(res=>{
  console.log(res);
  return new Promise((resolve,rej)=>{
    resolve('ccc')
  })
}).then(res=>{
  console.log(res);
})