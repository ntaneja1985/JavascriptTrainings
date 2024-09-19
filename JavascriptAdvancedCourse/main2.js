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

const userExists = users.findIndex(x=>x.name === "Vivek") !== -1;
console.log(userExists)
const userExists2 = users.some(x=>x.name === "Neha");
console.log(userExists2)
const newUser = {id:7,name:"William",isActive:true,age:32};

//Create a new array without modifying the original array
const newArray = [...users,newUser];
console.log(newArray)
//users.push(newUser)
console.log(users.includes(newUser))
console.log(users)

let set = new Set(newArray);

const arr =[1,1,2,3,4,5,6,4,3,2,1];

//get an array of unique elements
const uniqueArray = (array) =>{
    // let set = new Set();
    // array.forEach(element => {
    //     set.add(element)
    // });
    console.log([...new Set(array)])
    return [...new Set(array)];
    // console.log([...set])
    // return [...set]
}

const uniqueArr2 = (array) =>{
    let uniqueArr = [];
    array.forEach((ele)=>{
        if(!uniqueArr.includes(ele)){
            uniqueArr.push(ele)
        }
    })
    return uniqueArr;
}

//Unique array using reduce method
const uniqueArr3 = (array) =>{
    return array.reduce((acc,ele)=>{
        return acc.includes(ele) ? acc : [...acc,ele]
    },[])
}

uniqueArray(arr);
console.log(uniqueArr2(arr));
console.log(uniqueArr3(arr));
//merge Arrays using spread operator and concat
const mergeArray = (arr1,arr2) =>{
    return [...arr1,...arr2]
    //return arr1.concat(arr2)
}
const arr1q = [1];
const arr2q = [2];
console.log(mergeArray(arr1q,arr2q))
console.log(arr1q)
console.log(arr2q)
