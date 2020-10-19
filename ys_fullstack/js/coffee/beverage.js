var Beverage = function() {

}
Beverage.prototype.boilWater = function() {
        console.log('把水煮沸');
    }
    //冲泡 空的方法 由他的子类去决定
Beverage.prototype.brew = function() {

}
Beverage.prototype.pureInCup = function() {

}
Beverage.prototype.addCondiments = function() {

}
Beverage.prototype.init = function() {
    this.boilWater()
    this.brew()
    this.pureInCup()
    this.addCondiments()
}
var Coffee = function() {

    }
    //原型继承 沿着对象的原型链
Coffee.prototype = new Beverage()
Coffee.prototype.brew = function() {
        console.log('用沸水冲泡咖啡');
    }
    //子类覆盖父类   模板模式
Coffee.prototype.pureInCup = function() {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function() {
    console.log('加糖和咖啡');
}
var oneCoffee = new Coffee();
oneCoffee.init()