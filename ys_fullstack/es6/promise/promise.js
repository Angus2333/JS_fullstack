function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('开始相亲');
            resolve('成功')
        }, 1000)
    })

}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚');
            resolve('洞房')
        }, 500)
    })

}

function baby() {

    console.log('小酒神出生');

}
// xq()
//     .then((res) => { //.then() 要执行只认resolve
//         console.log(res);
//         marry().then((result) => {
//             console.log(result);
//             baby()
//         })
//     })
//链式写法
xq()
    .then((res) => {
        console.log(res);
        return marry() //别忘记加return
    })
    .then((result) => {
        console.log(result);
        baby()
    })