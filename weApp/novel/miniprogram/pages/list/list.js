// pages/list/list.js
const db = wx.cloud.database()
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookItem: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getBook()

    },
    getBook() {
        db.collection('book').where({
            _openid: app.globalData.openid
        }).get().then(res => {
            console.log(res);
            this.setData({
                bookItem: res.data
            })
        })
    },
    navTo(e){
        // let url=e. 
        console.log(e);
        
    }

})