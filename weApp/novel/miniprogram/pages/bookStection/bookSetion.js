// pages/bookStection/bookSetion.js
// cloud.init()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookDetailData: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        const { url } = options
        this.getSection(url)
    },
    getSection(url) {
        wx.showLoading({
            title: '正在加载', // 内容
        });
        wx.cloud.callFunction({
            name: 'bookSection',
            data: {
                url: url
            }
        }).then(res => {
            wx.hideLoading();
            console.log(res);
            const { result } = res
            this.setData({
                bookDetailData: result.bookDetailData
            })
        })
    }

})