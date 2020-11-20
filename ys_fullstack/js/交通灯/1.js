const fs = require('fs')


//包装一层promise
new Promise((resolve, reject) => {
    console.log('2秒后开始打印');
    setTimeout(() => {

        resolve()
    }, 2000);
}).then(res => {
    fs.readFile('./index.html', 'utf-8', (err, file) => {
        console.log(file);
    })
})

function add(num1, num2) {
    let curry = 0,
        res = '';
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
        let a = num1.charAt(i) || 0
        let b = num2.charAt(j) || 0
        let sum = Number(a) + Number(b) + carry;
        sum >= 10 ? carry = 1 : carry = 0;
        res = (sum % 10) + res;
    }
    if (carry == 1) {
        res = 1 + res
    }
    return res
}