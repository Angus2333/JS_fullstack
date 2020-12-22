const addLog = {
  updated () {
    console.log('数据发送变化')
  }
}
const app = {
  created () {
    console.log('我是扩展的created')
  }
}
module.exports = { addLog, app }
