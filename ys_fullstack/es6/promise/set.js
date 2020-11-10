// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x); //a

// let [x, y = 'b'] = ['a', null]
// console.log(y); //null

// a = new Set(['a', 'b', 'c'])
// console.log(a);

// let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
// console.log(foo);
// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };
// let { p } = obj;
// console.log(p);
let { a, b } = { b: 1, a: 2 }
console.log(a);