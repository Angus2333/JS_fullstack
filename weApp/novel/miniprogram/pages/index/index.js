// pages/index/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: './user-unlogin.png',
        userInfo: '',
        hasUserInfo: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    onGetUserInfo(e) {
        // console.log(e);
        if (e.detail.userInfo) {
            app.globalData.userInfo = e.detail.userInfo
            this.setData({
                userInfo: e.detail.userInfo,
                avatarUrl: e.detail.userInfo.avatarUrl,
                hasUserInfo: true
            })
        }
    }
})