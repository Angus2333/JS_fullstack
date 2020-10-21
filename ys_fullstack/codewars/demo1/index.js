// function generateCapitalStringWithHashTag(str) {
//     // 1.是否为空 .length==0 null "" !
//     // 2.是否超过140 .length
//     // 3.# +#
//     // 4.每个单词都大写
//     // return str.length > 140 || str == '' ? false : '#' +
//     //    .split(' ')
//     //     .map(function(word) {
//     //         return word.charAt(0).toUpperCase() + word.slice(1)
//     //     }) //把字符串变成数组了
//     //     // es6数组的方法，遍历数组的每一项
//     //     //并用一个函数处理，返回新的数组
//     //     .join(' ')


// }
// // a = generateCapitalStringWithHashTag('hello world')
// // console.log(a);
function generateCapitalStringWithHashTag(str) {
    return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitalize).join('')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
a = generateCapitalStringWithHashTag('hello world')
console.log(a)