// function test() {
//     for (var i = 0; i < 10; i++) { // 用了var 会变量提升
//         setTimeout((function() {
//             var temp = i;
//             return function() {
//                 console.log(temp);
//             }
//         })(i), 300)
//     }
// }
// test()

// for(var j = 0; j < 10; j++) {
//   myArr[j]()
// }

for (var i = 0; i < 10; i++) { // 用了var 会变量提升
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }(i));
}
