// // function identify(context) {
// //     return context.name.toUpperCase()
// // }

// // function speak(context) {
// //     var greeting = "hello I am" + ' ' + identify(context)
// //     console.log(greeting);
// // }
// // var me = {
// //     name: 'woniu'
// // }
// // var you = {
// //     name: 'Angus'
// // }
// // speak(me)
// // var a = 2

// // function foo() {
// //     console.log(this.a);
// // }
// // (function bar() {
// //     foo() //严格模式下，foo调用，与位置无关
// // })()
// //隐式绑定
// function foo() {
//     console.log(this.a); //3
// }

// var obj2 = {
//     a: 3,
//     foo: foo //引用
// }
// var obj1 = {
//     a: 2,
//     obj2: obj2
// }
// obj1.obj2.foo()
//     // var a = 2

// // function foo() {
// //     console.log(this.a);
// // }

// // function bar() {
// //     foo()
// // }
// // bar()
// //隐式丢失
// // function foo() {
// //     console.log(this.a);
// // }
// // var obj = {
// //     a = 2,
// //     foo: foo
// // }
// // var bar = obj.foo
// // var a = 'hello'
// // bar() //hello
console.log(a);
var a = 2;