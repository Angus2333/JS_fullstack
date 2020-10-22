//index.js
const db = wx.cloud.database() //引入数据库 database
const app = getApp()
const _ = db.command //crud 方便后面使用
const photos = db.collection('photos')
const productsCollection = db.collection('products')
Page({
    data: {
        products: [],
        photos: [],
        avatarUrl: './user-unlogin.png',
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: ''
    },

    onLoad: function() {
        productsCollection
            .get()
            .then(res => {
                // console.log(res);
                this.setData({
                    products: res.data
                })
            })
        photos
            .get()
            .then(res => {
                console.log(res);
                this.setData({
                    photos: res.data
                })
            })
    },

    onGetUserInfo: function(e) {
        if (!this.data.logged && e.detail.userInfo) {
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                userInfo: e.detail.userInfo
            })
        }
    },

    onGetOpenid: function() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
                console.log('[云函数] [login] user openid: ', res.result.openid)
                app.globalData.openid = res.result.openid
                wx.navigateTo({
                    url: '../userConsole/userConsole',
                })
            },
            fail: err => {
                console.error('[云函数] [login] 调用失败', err)
                wx.navigateTo({
                    url: '../deployFunctions/deployFunctions',
                })
            }
        })
    },
    upload() {
        // console.log('11');
        //weixin给与小程序能力 html
        // 在相机里面选择
        wx.chooseImage({
            count: 9, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: res => {
                // successlog
                // console.log(res);
                const tempFilePaths = res.tempFilePaths
                console.log(res);
                for (var i = 0; i < tempFilePaths.length; i++) {
                    let randString = +new Date() + '' + Math.floor(Math.random() * 100000) + '.png' //+new类型转换
                    wx.cloud.uploadFile({
                        cloudPath: randString,
                        filePath: tempFilePaths[i],
                        success: res => {
                            if (res.statusCode == 200) {
                                photos.add({
                                        data: {
                                            image: res.fileID
                                        }
                                    })
                                    .then(res => {
                                        wx.showToast({
                                            title: '上传成功',
                                            icon: 'success'
                                        })
                                    })
                            }
                        }
                    })
                }

            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })

    },
    // 上传图片
    doUpload: function() {
        // 选择图片
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res) {

                wx.showLoading({
                    title: '上传中',
                })

                const filePath = res.tempFilePaths[0]

                // 上传图片
                const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
                wx.cloud.uploadFile({
                    cloudPath,
                    filePath,
                    success: res => {
                        console.log('[上传文件] 成功：', res)

                        app.globalData.fileID = res.fileID
                        app.globalData.cloudPath = cloudPath
                        app.globalData.imagePath = filePath

                        wx.navigateTo({
                            url: '../storageConsole/storageConsole'
                        })
                    },
                    fail: e => {
                        console.error('[上传文件] 失败：', e)
                        wx.showToast({
                            icon: 'none',
                            title: '上传失败',
                        })
                    },
                    complete: () => {
                        wx.hideLoading()
                    }
                })

            },
            fail: e => {
                console.error(e)
            }
        })
    },

})