//Object.defineProperty()有三个参数，
//第一个是要监听的对象，第二个是要修改或定义的属性名称，
//第三个要定义或修改的属性的描述符

Object.defineProperty(window,variable,{
  //在读取属性时调用的函数。默认值为undefined。
  //没有getter(就是get后面的function) get就是undefined，getter取到的值会给get作为属性的返回值
  //get 是给variable这个属性提供getter方法()
  get:function(){return value},    
  //在给属性赋值时调用的函数。默认值为undefined。anotherVariable是指给属性赋值时的值
  //set 是给variable这个属性提供setter方法
  set:function(anotherVariable){  
    console.log(`anotherVariable:${anotherVariable};value:${value}`);
    if(anotherVariable !== value){  
      //这里使用了闭包，value在这里使用，一直保存在内存中,没有被销毁，然后每
      //次给属性赋值时会让传过来的值与value比较，用的是!==，如果是相等则表示第
      //一次赋值，不相等则表示第二次赋值并报错
      console.error(`${variable} is already assignmented.`);
    }else{
    return value;//第一次赋值则直接赋值
    }

  },
  writable :true ,//默认true,决定可不可以修改
  //enumerable为可枚举的，Object.prototype里的属性不可枚举
  //configurable 为可配置的 configurable表示能否通过delete删除属性从而重新定义属性，
  configurable:false, 
  enumerable:false,  //表示能否通过for-in(是否可枚举)循环返回属性。默认值为true.
})

