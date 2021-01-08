function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(9999)
    }, 2000)
  })
}
async function testAsync() {
  let data=await getJson()
  console.log(3);
  console.log(data);
}
testAsync()