const users = [
    {
        id:1,
        name:"Nishant",
        isActive:true,
        age:29
    },
    {
        id:2,
        name:"Nalin",
        isActive:true,
        age:25
    },
    {
        id:3,
        name:"Neha",
        isActive:true,
        age:22
    },
    {
        id:4,
        name:"Vivek",
        isActive:true,
        age:23
    },
    {
        id:5,
        name:"Ajay",
        isActive:false,
        age:24
    },
    {
        id:6,
        name:"James",
        isActive:true,
        age:27
    }
]

//filter,map,forloop,foreach,sort
const nameUsers = users.map((user)=>{
    return user.name;
})
console.log(nameUsers);

const activeUsers = users.filter(x=>x.isActive).map((user)=>(user.name));
console.log(activeUsers);

const sortedUsers = users.sort((a,b)=>{
    return (b.age > a.age) ? 1: -1;
}).map((user)=>(`${user.name}-${user.id}`));
console.log(sortedUsers)

