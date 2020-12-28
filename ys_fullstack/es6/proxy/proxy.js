let test = {
  name: "小红"
};
test = new Proxy(test, {
  get(target, key) {
    console.log('获取了getter属性');
    return target[key];
  },
  set(target, key, value) {
      console.log('修改了');
      target[key]=value
  }
});
console.log(test.name);
test.age='10'