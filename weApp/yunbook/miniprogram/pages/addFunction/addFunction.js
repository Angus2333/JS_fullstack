// pages/addFunction/addFunction.js

const code = `// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}`

Page({
  data:{
    testValue:""
 },
 test2method:function (e) {
   //接收c2传进来的值，再设置给testValue
   //c内部就会自动修改值
   this.setData({ testValue: e.detail.passValue })
   console.log(e);
   
 },

  onLoad: function (options) {

  },

  copyCode: function() {
    wx.setClipboardData({
      data: code,
      success: function () {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  testFunction() {
    wx.cloud.callFunction({
      name: 'sum',
      data: {
        a: 1,
        b: 2
      },
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        this.setData({
          result: JSON.stringify(res.result)
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [sum] 调用失败：', err)
      }
    })
  },

})

