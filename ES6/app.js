// function a() {

//     function b(){
//         console.log(myVar)
//     }
//     b();
// }

// var myVar = 1;
// a();

const myVar = 1;
//myVar = 2; //Gives an error as we cannot change the binding
console.log(myVar)

const greet = {name:'Nishant'}
greet.name = 'Nalin'; //allowed as we are changing the property of object not the object itself

//greet = 5 gives an error as we cannot change binding


//const is also block scoped
{
    const greet = {name:'Victor', lastName:'Ramirez'}
    greet.name = 'James'
    console.log(greet)
}

console.log(greet)

//Function declaration
function greeter(name){
    return "Hello " + name;
}

//Function expression
var fn = function(name){
    return "Hello " + name;
}

const greeter1 = (name) =>{
    return "Hello " + name;
}

console.log(greeter('Nishant1'))
console.log(fn("Test"))
console.log(greeter1("Test1"))

function newGreet(greetFunc,name){
    return greetFunc(name);
}

console.log(newGreet((name)=> {
    return 'Hi ' + name
},"Test5"))


// function Timer(){
//     this.seconds = 0;
//     setInterval(()=>{
//         this.seconds++;
//         console.log(this.seconds)
//     },1000)
// }

//Lets assume in the above Timer function instead of arrow function, we used regular functions
// function Timer(){
//     this.seconds = 0;
//     //this here points to the timer object
//     console.log(this)
//     setInterval(function (){
//         //this points to the window object..remember we had to do const that = this; or const self = this;
//         console.log(this)
//         //this.seconds will give NaN since this.seconds doesnot exist
//         this.seconds++;
//         console.log(this.seconds)
//     },1000)
// }


//use Timer as a function constructor
//const timer = new Timer();

const greeter2 = {
    name: 'Victor',
    greet: ()=>{
    //Since this is an arrow function, concept of this keyword doesnot exist so this.name is empty
    //Known downside of using arrow functions

    //Here this is the window object
    //went up the scope chain and used the global this
    //if we make it a function expression rather than arrow function it will work
    console.log(this)
      return  'Hello ' + this.name
    }
}
greeter2.name = 'Test7'
console.log(greeter2.greet())

