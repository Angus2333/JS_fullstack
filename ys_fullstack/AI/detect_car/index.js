const AipImageClassifyClient=require('baidu-aip-sdk').imageClassify;
const fs=require('fs')
const APP_ID="23082438"
const API_KEY="icT7365eAMckQZpiSCPp51dL"
const SECRET_KEY="FuKncfT51qyZF4a5xbpViDdv1GORqwe9"
const image=fs.readFileSync("./timg.jpg") 
       .toString("base64")                       //sync I/O Async 同步
// console.log(image);

const client=
      new AipImageClassifyClient(APP_ID,API_KEY,SECRET_KEY)
client
  //http 协议 AI sdk
  .carDetect(image)
  .then(result=>{
    console.log(result.result[0]);
  }).catch(err=>{
    console.log(err);
  })