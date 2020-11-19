// pages/bookContent/bookContent.js
const db = wx.cloud.database()
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: '',
        name: '',
        imgUrl: '',
        catalog: '',
        content: '',
        contentH: '',
        next: '',
        pre: '',
        sectionName: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        let { url, name, imgUrl } = options
        this.setData({
            url,
            imgUrl,
            name
        })
        this.getContent(url)
    },
    getContent(url) {
        wx.showLoading({
            title: '正在加载'
        })
        wx.cloud.callFunction({
            name: 'getContent',
            data: {
                url: url
            }
        }).then(res => {
            console.log(res);
            wx.hideLoading();
            this.setData({
                catalog: res.result.catalog,
                content: res.result.content,
                contentH: res.result.contentH,
                next: res.result.next,
                pre: res.result.pre
            })
        })
        wx.pageScrollTo({
            scrollTop: 0
        })
    },
    prePage(e) {
        let url = e.currentTarget.dataset.url
        if (url) {
            if (url.endsWith('.html')) {
                this.joinBook(url)
                    // console.log(url);
                this.getContent(url)
            }
        } else {
            return
        }
    },

    nextPage(e) {
        // console.log(e); 
        let url = e.currentTarget.dataset.url
        if (url) {
            if (url.endsWith('.html')) {

                // console.log(url);
                this.getContent(url)
            }
        } else {
            return
        }

    },
    joinBook(url) {
        db.collection('book').where({
            _openid: app.globalData.openid,
            bookName: this.data.bookDetailData.name
        }).get().then(res => {
            const data = res.data || []
            if (data.length > 0) {
                if (data[0].bookUrl !== url) {
                    const id = data[0]._id || '';
                    db.collection('book').doc(id).update({
                        data: {
                            bookUrl: url
                        }
                    }).then(res => {
                        // console.log(res);
                    })
                }
            }
        })
    }

})