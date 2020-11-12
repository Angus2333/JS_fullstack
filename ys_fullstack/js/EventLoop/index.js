// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('aaaa');
//             resolve('ok')
//         }, 1000)
//     })

// }

// function b() {
//     console.log('bbb');
// }
// let aa = a()
// aa.then(b)
function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('你好');
            resolve()
        }, ms)
    })
}
//async声明该函数内部可能存在异步
async function asyncPrint(value, ms) {
    console.log(value);
    await timeout(ms) //阻塞后面的代码
}

asyncPrint('hello world', 1000)
console.log('ok');