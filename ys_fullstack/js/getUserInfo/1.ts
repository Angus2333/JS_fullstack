// es6箭头函数
const getUserInfos=(user:{name:string,sex:string,company:string}):string=>{
    return `${user.name} 性别${user.sex}就职于${user.company}`;
    // return true
}
console.log(getUserInfos({name:'刘志泵',sex:'男',company:'dhjj'}));
