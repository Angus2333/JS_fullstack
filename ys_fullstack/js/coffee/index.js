//es5 类 大写的函数  类：属性+方法
//泡一杯咖啡的步骤
//1.把水煮开
//2.用沸水冲一杯咖啡
//3.把咖啡倒进杯子
//4.加糖和牛奶
//constructor  类 抽象的  对象实例化
//构造函数和普通函数的区别是  构造函数会被new      函数是一等对象  
//js的类是怎么构建起来的 = 火车头 构造函数函数（首字母大写）+车厢（原型链上的方法）
//类可以分成两部分  构造函数部分+原型链部分
var Coffee = function(type) {
        this.type = type
    }
    //原型链
Coffee.prototype.boilWater = function() {
    console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.pureInCup = function() {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.addSugarAndMilk = function() {
    console.log('加糖和牛奶');
}
Coffee.prototype.init = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addSugarAndMilk();
}
var oneCoffee = new Coffee('猫屎咖啡');
// Coffee.prototype.__proto__ = { name: '1' }
//注意！！！对象上才能调用方法，类上不能！我刚才就犯了这个错误
// oneCoffee.init() //一步到位
//js里面并没有类， new {}
//任何函数都有一个prototype属性
//js中只有对象 
// console.log(Coffee.prototype.constructor == Coffee); //true
// console.log(oneCoffee.type);
console.log(Coffee.prototype); //原型链   沿着原型链往上找，最后找到Object 就为空