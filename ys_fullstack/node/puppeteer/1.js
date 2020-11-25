const puppeteer = require('puppeteer')
const $ = require('cheerio')
const { resolve } = require('path')
async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://juejin.cn/books', {
            waitUntil: 'networkidle0'
        })
        // await page.screenshot({
        //     path: './juejin.png'
        // })

    // console.log(html);
    //在获取数据之前，执行几次下拉动作
    await page.evaluate(function() {
        function req() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.querySelector('.copy-right').scrollIntoView()
                    resolve()
                }, 2000);
            })
        }
        async function run() {
            for (let i = 0; i < 3; i++) {
                await req()
            }
        }
        //async 执行完返回就是promise，promise会等async run里面的函数都执行完，才会执行promise.then()
        //run()是一个promise 只有三次下拉下载结束 才会resolve
        return run()
    })
    const html = await page.content()
    const books = $('.info', html)
    let booksInfo = []
    books.each(function(item) {
            // let name = item.find('.title').text().trim()
            let name = $('.title', this).text().trim()
            let auth = $('.author-name', this).text().trim()
            booksInfo.push({
                name,
                auth
            })
        })
        // console.log(booksInfo);
    const fs = require('fs');
    fs.writeFile('./books.json', JSON.stringify(booksInfo, null, 2), (err) => {
        if (!err) console.log('写入成功');
    })
    await browser.close()
}
run()