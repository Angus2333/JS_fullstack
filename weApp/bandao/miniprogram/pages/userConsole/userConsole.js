// pages/userConsole/userConsole.js
Page({

    data: {
        openid: ''
    },

    onLoad: function(options) {

    },
    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                console.log(res);
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    }
})