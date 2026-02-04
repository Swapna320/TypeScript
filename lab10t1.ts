interface User{
    readonly id:number;
    name:string;
    age?:number;
};
const users:User[]=[
    {id:122,name:"Swapna",age:19},
    {id:212,name:"Spurthi"}
]
// console.log(users[0].id=455);
console.log(users);