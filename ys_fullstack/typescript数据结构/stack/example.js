"use strict";
exports.__esModule = true;
var stack_1 = require("./lib/stack");
var stack = new stack_1["default"]();
stack.push('第一');
stack.push('第二');
stack.pop();
// console.log(stack.peek());
var decimalToBinary = function (decNumber) {
    var stack = new stack_1["default"]();
    var number = decNumber;
    var rem; //余数
    var binaryString = "";
    while (number > 0) {
        stack.push(number % 2);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
console.time("数组栈");
console.log(decimalToBinary(4));
console.timeEnd("数组栈");
