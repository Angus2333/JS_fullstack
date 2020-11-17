// pages/bookCity/bookCity.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotData: [],
        classifyData: [],
        baseUrl: 'https://wap.biqiuge8.com/'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getList()
    },
    getList() {
        wx.showLoading({
            title: '正在加载', // 内容
            success: (res) => {

            }
        });
        wx.cloud.callFunction({
            name: 'getList',
            data: {}
        }).then(res => {
            // console.log("%cnnn", "color:red");
            wx.hideLoading();
            const result = res.result
                // console.log(result);
                // console.log(res.classifyData);
            this.setData({
                    hotData: result.hotData,
                    classifyData: result.classifyData
                })
                // console.log(this.data.classifyData);
        })
    },
    toReading(e) {
        // console.log(e);
        let url = e.currentTarget.dataset.url
            // console.log(url);
        wx.navigateTo({
            url: `../bookStection/bookSetion?url=${url}`
        })
    }

})