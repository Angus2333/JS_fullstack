function a() {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log('a');
            resovle('ok')
        }, 1000)

    })
}

function b() {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log('b');
            resovle('ok')
        }, 1500)

    })
}

function c() {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log('c');
            resovle('ok')
        }, 500)

    })
}

function d() {
    console.log('d');
}
// Promise.all([a(), b(), c()]).then(d)
Promise.race([a(), b(), c()]).then(d)