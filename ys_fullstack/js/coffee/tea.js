// 1.把水煮开
// 2.用沸水浸泡茶叶
// 3.把茶水倒进杯子
// 4.加柠檬
var Tea = function(type) {
        this.type = type
    }
    //原型链
Tea.prototype.boilWater = function() {
    console.log('把水煮开');
}
Tea.prototype.brewTeaGriends = function() {
    console.log('把茶倒进杯子');
}
Tea.prototype.pureInCup = function() {
    console.log('用沸水冲泡茶');
}
Tea.prototype.addLemon = function() {
    console.log('加柠檬');
}
Tea.prototype.init = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addLemon();
}
var oneTea = new Tea('红茶');