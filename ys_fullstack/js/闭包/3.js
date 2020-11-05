// var count = 0
// function add() {
//   count++
//   console.log(count);
// }
var num = 999

function add() {
    var num = 0

    function a() {
        console.log(++num);
    }
    return a
}
var b = add()
b()
b()