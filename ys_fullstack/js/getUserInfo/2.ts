//接口 interface
interface IUser{ //他不是一个对象，他是一个定义的范围
    name:string;
    age:number;
}
const getUserInfo=(user:IUser):string=>`
${user.name} 性别${user.sex}就职于${user.company}
`