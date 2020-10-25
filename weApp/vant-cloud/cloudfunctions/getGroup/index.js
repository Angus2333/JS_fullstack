// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = wx.cloud.database({ env })
const env = 'angus-ph38k'
    //初始化
cloud.init()
const db = cloud.database({ env }) //指明云函数生效的环境

// 云函数入口函数
exports.main = async(event, context) => {
    const openId = cloud.getWXContext().openId
        // console.log(openId);
    db.collection('user-group').where({
        publishInfo: {
            groupId: 'openId'
        }
    }).get({
        success: function(res) {
            // 输出 [{ "title": "The Catcher in the Rye", ... }]
            db.collection('group').where({
                publishInfo: {
                    _id: 'res.'
                }
            }).get({
                success: function(res) {
                    // 输出 [{ "title": "The Catcher in the Rye", ... }]
                    // console.log(res)
                }
            })
            console.log(res);
        }
    })
}