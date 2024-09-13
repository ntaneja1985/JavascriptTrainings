//ES6
//Rest & Spread Operator

//Rest Operator
//Rest combines the number into an array
function addNumbers(a,b,c,...other){
    console.log(other)
    return a + b + c;
}

const result = addNumbers(2,4,5,8,9,11,15,17)
console.log(result)

//In ES5 we used arguments
//args[0], args[1] etc


//Spread Operator
//Spread is the opposite of Rest..it breaks down the elements into individual elements
var names = ["Nishant","Nalin","Neha","Vivek"]

function getNames(name1,name2,name3,name4){
console.log(name1,name2,name3,name4)
}
//...names = ["Nishant","Nalin","Neha","Vivek"]
getNames(...names);
//same as
getNames(names[0],names[1],names[2],names[3])

//How Spread and Rest work with Objects
var student = {
    name: "Ajay",
    age: "28",
    hobbies:["Cricket","Movies"]
}

//Destructuring
// const {age,name} = student;
// console.log(age,name)

const {age,...rest} = student;
console.log(rest)

const {...rest2} = student;
console.log(rest2)

//Spread

//Here newStudent object will contain a copy of properties of the student object
var newStudent = {
    ...student
}
console.log(newStudent)

//Now we want to change properties of newStudent, use spread operator, add comma and just specify the property name and its value 
var newStudent2 = {
    ...student,
    age:29
}
console.log(newStudent2)