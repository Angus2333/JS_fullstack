Person.prototype.say = function() {
    console.log('hhh');
}

function Person(name, age) {
    this.name = name
    this.age = age
}
// let person = new Person('xiaomin', 18)
// console.log(person);
console.log(Person);

function myNew() {
    let obj = {}
        //取到外部参数传的构造器
    let Constructor = Array.prototype.shift.call(arguments)
        //实现继承
    obj.__proto__ = Constructor.prototype
    let result = Constructor.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
}
let person = myNew(Person, 'XXX')