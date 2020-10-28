import Stack from './lib/stack'
const stack=new Stack();
stack.push('第一')
stack.push('第二')
stack.pop()
// console.log(stack.peek());

const decimalToBinary=function(decNumber){
  var stack=new Stack()
  let number=decNumber;
  let rem;//余数
  let binaryString=""
  while(number>0){
    stack.push(number%2)
    number=Math.floor(number/2)
  }
  while(!stack.isEmpty()){
    binaryString+=stack.pop().toString()
  }
  return binaryString
}
console.time("数组栈");
console.log(decimalToBinary(4));
console.timeEnd("数组栈")
