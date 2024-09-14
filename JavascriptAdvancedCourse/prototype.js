//Prototype Inheritance


//Different ways to create an object
//Prototypes are the mechanism by which JavaScript objects inherit features from one another
//Everything in Javascript is derived from an Object
// const obj = new Object({
//     name:"Nishant"
// })

// const objNew = new obj();

const obj2 = {
    name: "Nishant",
    getName: function(){
        return this.name
    },
    getRoll : function(){
        return this.roll;
    }
}

//console.log(obj2)


//set the prototype of obj3 to be obj2
const obj3 = {
    roll: 1,
    name: "Vivek",
    __proto__:obj2
}

// console.log(obj3)
// console.log(obj3.getName())
// console.log(obj3.getRoll())
// console.log(obj2.getRoll())

//setup the prototype chain
const obj4 = {
    class: 'Btech',
    __proto__:obj3
}
// console.log(obj4)
// console.log(obj4.getName())


//Array prototype has several functions like slice, shift,unshift, push, pop etc.
const array = ["Nishant"]
console.log(array)

const obj5 = new Object();
console.log(obj5)

//Add a function to the array prototype
//We can make custom functions and add them to the prototype
Array.prototype.show = function(){
    return this;
}
const cities = ["Delhi"];
console.log(cities.show())

Array.prototype.convertIntoObject = function(){
    let newObj = {};
    this.forEach((element)=>{
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertIntoObject())

//function constructor
function MyPrototype(name,roll){
    this.name = name;
    this.roll = roll;
}

//Set the prototype property of the function constructor
MyPrototype.prototype = obj2

const myproto = new MyPrototype("Vicky",1);
console.log(myproto.getName())
console.log(myproto.getRoll())