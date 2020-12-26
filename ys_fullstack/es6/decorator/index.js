// function annotation(target) {
//     target.annotated = true
// }
// @annotation
class Myclass {
    @readonly
    method() {
      
    }
  }
  
  function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  }
  
  function unenumrable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
  }
