//glob可以获取到某个目录下的所有文件
const glob = require('glob')

//阻塞式的I/O调用方式
// var result = null
// console.time();
// result = glob.sync(__dirname + `/**/*`)
// console.log(result);
// console.timeEnd();

//非阻塞式的I/O调用方式

var result = null
console.time('glob');
glob(__dirname + '/**/*', function(err, res) {
    result = res
    console.log(result);
})
console.timeEnd('glob');