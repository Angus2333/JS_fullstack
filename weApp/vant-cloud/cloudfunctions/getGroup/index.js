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
    let groupList = await db.collection('user-group').where({ //groupList是{data:[]}
        userId: openId
    }).get()
    let returnResult = []
    for (let item of groupList.data) {
        const oneGroup = await db.collection('group').where({
                _id: item.groupId,
                deleted: false
            }).get()
            // console.log(oneGroup);
        if (oneGroup.data.length > 0) {
            const userInfo = await db.collection('user').where({
                openId: oneGroup.data[0].createBy
            }).get()
            oneGroup.data[0].createBy = userInfo.data[0]
            oneGroup.data[0].relateUserGroupId = item._id
            returnResult.push(oneGroup.data[0])
        }
    }
    return returnResult.sort((a, b) => {
        a.createTime < b.createTime ? 1 : -1
    })
    return returnResult
}