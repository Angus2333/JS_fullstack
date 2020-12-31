/* const ceo = {
  name: 'ceo',
  age: 20,
  carrer: 'coder'
} */

function User(name, age, carreer, work) {
  this.name = name;
  this.age = age;
  this.carreer = carreer
  this.work = work
}

// const user = new User('name', 'age', 'carreer');
// console.log(user);

function Code(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'coder'
  this.work = ['写代码','写系分','修Bug']
}

function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'product-manage'
  this.work = ['订会议室','写pro','催更']
}

// function Factory(name,age,career) {
//   switch (career) {
//     case 'code':
//       return new Code(name, age);
//       break
//     case 'product manage':
//       return new ProductManager(name, age);
//   }
// }

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'code':
      work = ['写代码','写系分','修Bug']
      break
    case 'product manage':
      work = ['订会议室', '写pro', '催更']
      break
  }
  return new(name,age,career,work)
}
