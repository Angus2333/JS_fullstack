# 原型链    
1. 什么是原型链？
 在原型上再加一个原型，再加一个原型.....把原型练成链
 访问顺序也是按照这个链的顺序，跟作用域链一样

# 原型链的增删改查
查：由进及远的找
删：通过原型自己删除
改：通过原型自己去改，但是引用类型可以
增：通过原型自己增加，但是引用类型可以

3. Object.create(test) 会新建一个对象 新建的对象用的是test的原型
网易面试题
所有的对象最终都会继承Object.prototype
var obj1 = Object.create(null)
console.log(obj1.__proto__);//undefined
obj.__proto__={name:"xn"}  //这样也不管用

