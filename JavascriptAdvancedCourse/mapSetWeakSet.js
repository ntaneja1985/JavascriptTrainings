//Map, Set, WeakSet, WeakMap
'use strict'

//Set
//Collection of unique data-no duplicacy
// Object constructor
//Can also pass arrays

let myArray = [1,2,3,4]
//Looks like arraylist in c# but it has to be unique
let obj = new Set(myArray);
//console.log(obj.size)
obj.add(5);
//console.log(obj)
//if we try to add 5 again, it will not throw error but it wont add 5 to the set
obj.add(5)
//console.log(obj)
//Cannot store data as key value pair
obj.delete(5)
var obj1 = {name:"Nishant"};
//valid operation
obj.add(obj1)
//console.log(obj)

//Empty the set
//obj.clear()

//can iterate using 
//obj.forEach((element)=>{
//  console.log(element)})

//check if the set has the element 2
//Can only store single value like Number, string ,object, arrays
//console.log(obj.has(2))

//Map Object
//Data stored in key-value pairs
//key a1 value Nishant, key a2 value Nalin
let myMap = new Map([["a1","Nishant"],["a2","Nalin"]]);
console.log(myMap)
//Add a new entry
//If key already exists it would be overwritten or else a new key value pair would be added
myMap.set("a3","Vikas")
console.log(myMap)

myMap.delete("a1")
console.log(myMap)
console.log(myMap.get("a3"))

//foreach will print the key value pairs
myMap.forEach((key,value)=>{
    console.log(key,value)
})

//Get an iterable list of keys
console.log(myMap.keys())

//print key value pairs
for(let [key,value] of myMap){
    console.log(`${key} ${value}`)
}


//Weak Set
//We can store object only in the Set 
//and cannot iterate it, no for,forEach loops

let ws = new WeakSet();
console.log(ws)
//Will give Type Error, Invalid value
//ws.add(1)
//valid
var obj5 = {name:'Hyena'}

ws.add({name:"Tiger"})
ws.add({name:"Lion"})
ws.add(obj5)
console.log(ws)
//gives true
console.log(ws.has(obj5))

//WeakMap
//Only objects can be used as keys
//Cannot iterate it
let wm = new WeakMap()
var obj6 = {}
var obj7 = {}
wm.set(obj6,"Private")
wm.set(obj7,"Test")
console.log(wm)

// Difference between Set and WeakSet : 
// Set:
// Value Types:

// Set can store any JavaScript value, including primitive data types (numbers, strings, booleans, etc.) and objects (including functions and other sets).
// Reference Handling:

// Set holds strong references to the values stored in it. Even if the value is removed from the set, the reference to the object prevents it from being garbage collected.
// Iteration:

// Iterating over the elements of a Set is straightforward using methods like forEach, for...of, or the entries method.
// Size Property:

// Set has a size property that reflects the number of elements in the set.


// WeakSet:
// Value Types:

// WeakSet can only store objects and does not accept primitive data types.
// Reference Handling:

// WeakSet holds weak references to the objects it contains. This means that if there are no other references to an object stored in a WeakSet, it may be garbage collected.
// Iteration:

// WeakSet does not provide direct methods for iterating over its elements. It lacks methods like forEach, for...of, and entries.
// Size Property:

// WeakSet does not have a size property because of the weak reference nature; you cannot directly count the number of elements.




