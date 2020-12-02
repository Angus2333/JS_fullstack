const AipImageClassifyClient=require('baidu-aip-sdk').ocr;
const fs=require('fs')
const APP_ID="23082943"
const API_KEY="yB5zvAQfzzuPUdpz4iH3sA4k"
const SECRET_KEY="CSuzXCjhv9uvsTPl7Xo30QPisLuMDU4c"
const image=fs.readFileSync("./number.jpg") 
       .toString("base64")                       //sync I/O Async 同步
// console.log(image);

const options={}
options["multi_detect"]="true"
const client=
      new AipImageClassifyClient(APP_ID,API_KEY,SECRET_KEY)
client.licensePlate(image,options)
      .then(result=>{
        console.log(result);
      }).catch(err=>{
        console.log(err);
      })