// 云函数入口文件 这个是必须要的
const cloud = require('wx-server-sdk')
    //如果有两个环境，指明用什么环境
const env = 'angus-ph38k'
    //初始化
cloud.init()
const db = cloud.database({ env }) //指明云函数生效的环境
    // 云函数入口函数 event是前端传过来的参数 context是小程序上下文
exports.main = async(event, context) => {
    const userInfo = event.userInfo //event除了前端传递的参数，还会自动携带用户的信息
    return await db.collection('group').add({ //链接某一个数据库
            data: {
                name: event.groupName,
                createBy: userInfo.openId,
                createTime: new Date(),
                deleted: false,
                updateTime: new Date()
            }
        })
        .then(res => {
            return db.collection('user-group').add({
                data: {
                    groupId: res._id,
                    userId: userInfo.openId,
                    invalid: false
                }
            })
        })
}