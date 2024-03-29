// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        carts: [],
        hasList: []
    },
    deletelist() {
        console.log(11);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        setTimeout(() => {
            //不能push到数组里，小程序不支持
            this.setData({
                carts: [
                    { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
                    { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
                ],
                hasList: true
            })
        }, 1000)
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})