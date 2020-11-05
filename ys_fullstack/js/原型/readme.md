# 原型
1. 定义：函数对象的一个属性，它定义了构造函数制作出来的对象的公共祖先。
通过该构造函数创建的对象，可以继承该原型上的属性和方法，原型（prototype）也是对象。
2. 利用原型的概念和特点，提取共有属性 

3. 原型的增删改查
  1. 原型上面的属性是不能被实例所更改、删除的。
  2. 删除原型上的属性 delete a.prototype.name
  3. constructor 指向的是Car() 目的是让Car构造出来的对象，找到它自己的来历时能找到（找到"工厂"）

# 构造函数
new 构造函数三部曲
function Person(){
 (1) var this={}
 (2) var this={
   __proto__:Person.prototype
 }
 (3) return this
}

__proto__ 指向谁，就上谁那里找属性 