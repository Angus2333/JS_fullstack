// let array = [1, 2, 3, 1, '1', '1']

// function unique(arr) {
//   let res = []
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < res.length; j++) {
//       if (arr[i] === res[j]) {
//         break;
//       }
//     }
//     // 如果arr[i]是唯一的，那么执行循环
//     if (j === res.length) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// console.log(unique(array));
function unique(arr){
  var arrry=[]
  arr = arr.sort()
  var arrry= [arr[0]];//先把第一项放进来，再和后面的比较就行了。
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]) {
          arrry.push(arr[i]);
      }
  }
  return arrry;
}
var arr = [1,1,];
console.log(unique(arr))