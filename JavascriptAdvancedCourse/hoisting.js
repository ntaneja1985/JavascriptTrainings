//Hoisting

// Hoisting as a core concept relies on the way how Execution Context is created.
// In the first phase i.e. the Memory Allocation Phase all the variables and functions are allocated memory, even before any code is executed.
// All the variables are assigned undefined at this point in time in the local memory.

//Variable can be used before it can be declared
//Javascript is synchronous,blocking, single threaded language
console.log(a)//undefined

//console.log(newTest())//error again as newTest is not yet initialized

//console.log(test()) //error again as test is not yet initialized


//console.log(test)//gives error saying that test is not defined
//We can infer that a function statement is loaded into memory 
//but not a function expression



getName();//Nishant Taneja as entire function is in memory
var a =5;
function getName(){
    console.log("Nishant Taneja")
}
getName();
console.log(a);

const test = function getUser(){
    console.log("Nalin Taneja")
}

const newTest = () =>{
    console.log("Vivek")
}