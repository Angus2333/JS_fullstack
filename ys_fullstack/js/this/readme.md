# 默认绑定
this所处的词法作用域在！哪里！生效，this就指向！哪里！

在严格模式下，全局对象无法进行默认绑定，所以导致this只能绑定在undefined上

# 隐式绑定
当一个函数引用上下文对象时，隐式绑定的规则就会把函数调用中this绑定到这个上下文对象

隐式丢失