 //加载https模块,只要有获取网站链接的操作，都需要引入
 const https = require('https')
     //加载cheerio
 const cheerio = require('cheerio')
 const fs = require('fs')
 https.get('https://movie.douban.com/top250', (res) => {
     let html = ''
         //res.on类似于addeventlistener用于监听数据
     res.on('data', (chunk) => {
             html += chunk
         })
         //监听res数据加载完成，就执行我需要的效果
     res.on('end', () => {
         //  console.log(html);
         //  把HTML当做实参赋值给$,$是cheerio固定的，不可更改
         const $ = cheerio.load(html)
             //用一个数组保存我们爬取的数据
         let allFilms = []
         let imgUrls = []
         $('li .item').each(function() {
                 //this就是当前循环的变量
                 const title = $('.title', this).text()
                 allFilms.push({ title })
             })
             //json.parse就是把字符串转回json对象吧
         fs.writeFile('./files.json', JSON.stringify(allFilms), (err) => {
                 if (err) throw err;
                 console.log('文件已被保存');
             })
             //图片
         $('li .item .pic ').each(function() {
                 //this就是当前循环的变量
                 const imgUrl = $('img', this).attr('src')
                 imgUrls.push({ imgUrl })
             })
             //json.parse就是把字符串转回json对象吧
         fs.writeFile('./img.json', JSON.stringify(imgUrls), (err) => {
             if (err) throw err;
             console.log('文件已被保存');
         })
     })
 })