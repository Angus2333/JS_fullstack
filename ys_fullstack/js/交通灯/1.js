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