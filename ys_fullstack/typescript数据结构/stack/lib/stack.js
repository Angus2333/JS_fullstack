"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    //入栈
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    //出栈
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    //返回栈顶
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.toString = function () {
        return this.items.toString();
    };
    return Stack;
}());
exports["default"] = Stack;
