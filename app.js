'use strict'
// var a = 2,
//   b = 3,
//   c = 4;
// a = b = c;
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(1<2<3);
// console.log(3<2<1);

// function greet(name){
//     // if name is undefined, then default value is set
//     // if name is not specified it is undefined || 'string'
//     // || operator forces the coercion to return the first non - undefined value
//     // || runs before = operator so it returns the first non-undefined value
//     // if wae pass value of name as 'Tony' then it returns 'Tony'
//     // looks better than writing if-else statements
//     name = name || 'Your name here';
//     console.log('Hello '+name);
// }

// greet('Tony')
// greet();
// console.log(libraryName)


// var person = new Object();

// person["firstName"] = 'Nishant';
// person["lastName"] = 'Taneja';

// var firstNameProperty="firstName";
// console.log(person[firstNameProperty])
// // . operator has the second highest precedence after ()
// console.log(person.lastName)

// person.address = new Object();
// // as per operator associativity the . operator runs from left to right
// // here . operator figures out that address is a property of person and street is a property of address
// person.address.street = '1225 Sec 18C';
// person.address.city = 'Chandigarh'

// console.log(person.address)
// console.log(person["address"]["city"])

//shorthand to create an object literal
// var person = { 
//     firstName:"Nishant", 
//     lastName:"Taneja",
//     address: {
//         street:"1225 Sector 18C",
//         city:"Chandigarh"
//     }
// };
// console.log(person.address.city)

// function greet(person){
//     console.log('Hi ' + person.firstName)
// }

// greet(person)
// greet({firstName:'Mary', lastName:'Doe'})

// person.address2 = "zirakpur"

// console.log(person.address2)

//Faking Namespaces

// var english = {}
// var spanish = {}

// english.greet = 'Hello'
// spanish.greet = 'Hola!'
// console.log(english)

// //gives error
// // . operator is left associative, english.greeting returns undefined so undefined.greet gives error
// // english.greeting.greet = 'Hello'

// //To fix it
// english.greeting = {}
// english.greeting.greet = 'Hello'

// var objectLiteral = {
//     firstName:"John",
//     isProgrammer:true
// }

// console.log(objectLiteral)

// //JSON is a subset of object literal syntax with property names wrapped in ""
// //JSON has stricter rules

// console.log(JSON.stringify(objectLiteral))


// var newName = JSON.parse('{"firstName":"Nalin","lastName":"Taneja"}');
// console.log(newName)

// function greet(){
//     console.log('Hi')
// }

// //Add property to a function...so weird
// greet.language = 'english'

// console.log(greet)
// console.log(greet.language)
// //Here function name is greet and its code is console.log(hi)
// //If we invoke it like this, it just causes the code property of the function to be executed
// greet()

// //Think of a function more than just a container of code

// //In Javascript functions are objects


//Function statement as it doesnot return a value, till the function is executed
//Just gets stored in memory
//Here the function greet is hoisted, so it can be called before its even defined.
// greet()

// function greet(){
//     console.log('Hi')
// }

//Here if we call the function expression before it is assigned, then it will give error
// initially anonymousgreet variable is undefined and we are invoking it like a function
// function statements can be invoked anywhere coz they are in memory but function expressions cannot be run till they are assigned, so function expressions are not hoisted
//anonymousGreet()

//Remember functions are first class objects
// Anonymous function is a function that doesnot have a name and it is referenced with the variable name
//Here function is an expression coz it returns a value
//Anonymous functions are function expression whereas named functions are function statements
// var anonymousGreet = function () {
//     console.log('Hi from anonymous')
// }

// //Invoke the function like this
// anonymousGreet()


// function log(a){
//     console.log(a)
//     a()
// }

// log(anonymousGreet)

// //first class functions where we can pass them around to other functions as parameters
// log(function(){
//     console.log('helloji')
// })



// //By value coz 3 is a primitive type
// var a = 3;
// var b;
// //It checks that a is a primitive type so it copies over the value to a new memory location
// b = a;
// a = 4;

// //Here a =4 and b = 3 since b has a copy of primitive value of a
// console.log("a= ",a)
// console.log("b= ",b)

// //by reference (all objects including functions)
// var c = {greeting:'hi'};
// var d;
// d = c;

// //mutate the value of c which means change value of c
// c.greeting = 'Hola!'

// //Here c and d show the same output as they point to same memory location
// console.log("c= ",c)
// console.log("d= ",d)

// //by reference (event as parameters)
// function changeGreeting(obj){
//     obj.greeting = 'Welcome'
// }

// changeGreeting(d);
// //Here c and d show the same output as they point to same memory location
// console.log("c= ",c)
// console.log("d= ",d)

// //equals operator sets us new memory space (new address)
// c = {greeting:'howdy'}

// //Here c is the new greeting but d remains the same
// //now c and d dont point to the same location in memory
// console.log("c= ",c)
// console.log("d= ",d)

//All primitive types are passed by value and all objects are by reference

// //Global object or window object
// console.log(this)

// //function statement
// function a() {
//     //Still points at the Global Object
//     console.log(this)
//     this.newVar = 'hello'
// }

// //function expression
// var b = function(){
//     console.log(this)
// }

// a();
// console.log(this.newVar)
// b();

// var c = {
//     name:'The c object',
//     log: function(){
//         //Hack to make it work inside its own functions
//         var self = this;


//         //Javascript Engine recognizes that this is a method belonging to an object
//         //Here this keyword point to the c object
//         console.log(this)
//         this.name = 'updated c object'
//         console.log(this.name)
//         var setname = function(newName){
//             //we expect that this keyword should still point to the object c. However thats not the case
//            // Here this points to the global/window object
//            //Lot of people think this behaviour is wrong 
//            console.log(this)
//            this.name = newName;

//            //this still points to the object
//            self.name = newName;
            
//         }
//         setname('updated again! the c object')
//         console.log(this)
//     }
// }

// c.log();

// var arr = ["hello",1, false,{name:'test', address:'1225 sec 18c'},
//     function(name){
//         var greeting = 'hello';
//         console.log(greeting+' '+name)
//     }
//     ];
// console.log(arr)
// arr[4](arr[3].name)

// function greet(firstName,lastName,language='en',...params){

//     language = language || 'en';
//     if(arguments.length ===0){
//         console.log('Missing Parameters')
//         console.log('-------------')
//         return;
//     }
//     console.log(firstName)
//     console.log(lastName)
//     console.log(language)
// //Arguments is a special keyword in javascript. It contains a list of all the parameters we have passed
//   //Arguments will be deprecated. Replaced with spread operator. Here all parameters get wrapped into an array 
// console.log('arg 0: ',arguments[0])
//     console.log('--------------')
// }

// greet();
// greet('John')
// greet('John','Doe')
// greet('John','Doe','en')

// function greet(firstName,lastName,language){
//     language = language || 'en'
//     if(language ==='en'){
//         console.log('Hello ' +firstName + lastName)
//     }
//     if(language ==='es'){
//         console.log('Hola ' +firstName + lastName)
//     }
// }

// function greetEnglish(firstName,lastName){
//     greet(firstName,lastName,'en')
// }

// function greetSpanish(firstName,lastName)
// {
//     greet(firstName,lastName,'es')
// }

// greetEnglish('John','Doe')
// greetSpanish('John','Doe')

// function getPerson() {
//     //Syntax parser will insert semicolon after return, we should not put object literal syntax on the next line so it prints undefined.
//     return 
//     {
//         firstName:'Tony'
//     }
// }

// console.log(getPerson())

// var 
// //can put comments here
// firstName, 
// //more space
// lastName, 
// //use whitespace liberally
// language;
// var person = {
//     //more whitespace
//     firstName: 'John',
//     //more whitespace
//     lastName: 'Doe'
// }

// console.log(person)

//Function statement
// function greet(name) {
//     console.log(name)
// }
// greet('John');

// //Function expression
// var greetFunc = function(name){
//     console.log('Hello '+name);
// }
//immediately invoked function expression..run the function immediately after creating it
// var greeting = function(name){
//     return 'Hello '+name;
// }('James'); //invokes the function immediately
// console.log(greeting)

// greetFunc('Peter');

//  var firstName = 'William';

// //IIFE
// //Here Javascript engine assumes that anything inside () is an expression
// //executing code on the fly
// (function(name){
//     var greeting = 'Hello'
//     console.log(greeting +" " + name) 
// }(firstName))

// console.log(greeting)


// function greet(whattosay){
//     return function(name){
//         console.log(whattosay+" "+name)
//     }
// }
// //greet('hi')('Tony')
// var sayHi = greet('hi');
// //How does the sayHi remember the parameter name: whattosay
// sayHi('Tony')

// function buildFunctions(){
//     var arr = [];
//     for(var i = 0;i<3;i++){
//         arr.push(
//             function(){
//                 console.log(i)
//             }
//         )
//     }
//     return arr;
// }

// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();



// function buildFunctions2(){
//     var arr = [];
//     for(var i = 0;i<3;i++){
//         arr.push(
//             (function(j){
//                return function(){
//                 console.log(j)
//                }
//             }(i))
//         )
//     }
//     return arr;
// }

// var fs2 = buildFunctions2();
// fs2[0]();
// fs2[1]();
// fs2[2]();


// //Here language is in a closure which acts as a factory function
// function makeGreeting(language){
//     return function(firstName,lastName){
//         if(language === 'en'){
//             console.log('Hello '+firstName+" "+lastName);
//         }
//         else if(language === 'es'){
//             console.log('Hola '+firstName+" "+lastName)
//         }
//     }
// }

// var greetEnglish  = makeGreeting('en');
// var greetSpanish = makeGreeting('es');
// greetEnglish('John','Doe');
// greetSpanish('John','Doe');

// function sayHiLater(){
//     var greeting = "Hi"

//     setTimeout(function(){
//         console.log(greeting)
//     },3000)
// }

// sayHiLater()

// //jquery uses function expressions and first class functions!
// $("button").click(function(){

// });

// function tellMeWhenitsDone(callback){
//     var a = 2000;
//     var b= 4000;

//     callback();
// }

// tellMeWhenitsDone(function(){
//     console.log("I am done")
// })

// tellMeWhenitsDone(function(){
//     console.log("All done...")
// })


// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName: function(){
//         var fullName = this.firstName + " " + this.lastName;
//         return fullName;
//     }
// }

// var logName = function(lang1,lang2){
//     console.log("Logged:"+" "+this.getFullName())
//     console.log('Arguments:'+lang1+" "+lang2)
//     console.log('--------------')
// }

// //it just binds the context of "this" object to the function. Also bind doesnot execute the function
// var logPersonName = logName.bind(person);

// logPersonName('en');

// //it not only binds the context of "this" object but it also passes arguments to the function and also executes it
// logName.call(person,'en','es')

// //same as the call function but it requires an array to be passed. useful in mathematical calculations
// logName.apply(person,['en','es'])


// //function borrowing

// var person2 = {
//     firstName:'Jane',
//     lastName:'Doe'
// }
// //used apply to borrow getFullName function into person2
// //getFullName function also uses this keyword to access its properties
// //we manipulate the context of "this" to pass context of person2
// //we can grab methods from other objects and use them
// var result = person.getFullName.apply(person2);
// console.log(result);


// //function currying
// //with bind we create a new copy of the function

// function multiply(a,b){
//     return a * b;
// }

// //this obviously doesnot execute the function but what does it do?
// // this ensure that whenever we create a copy of this function, the first parameter will always be permanently set to 2
// var multiplyBy2 = multiply.bind(this,2);
// //this will pass in the second parameter since first parameter is already passed
// console.log(multiplyBy2(3))

// var arr1 = [1,2,3];
// console.log(arr1)

// var arr2 = [];
// for(var i=0;i<arr1.length;i++){
//     arr2.push(arr1[i] *2)
// }

// console.log(arr2)

// function mapForEach(arr,fn){
//     var newArr=[];
//     for(var i=0;i<arr.length;i++){
//         newArr.push(fn(arr[i]))
//     }
//     return newArr;
// }
// console.log('---------------')
// //Example of functional programming
// console.log(mapForEach(arr1,function(number){
//     return number * 2
// }))

// console.log(mapForEach(arr1,function(number){
//     return number > 2
// }))

// console.log(mapForEach(arr1,x=>x * 3))

// var checkPastLimit = function(limiter, item){
//     return item > limiter;
// }
// //Note that checkPastLimit function accepts 2 arguments, if we want to fix
// //the first argument we wish to pass, we use bind keyword
// //this way every first argument is set to 1
// console.log(mapForEach(arr1,checkPastLimit.bind(this,1)))


// //We need to create a function where we dont need to
// //pass bind and just pass the limiter

// var checkPastLimitSimplified = function(limiter){
//     return function(limiter,item){
//         return item > limiter;
//     }.bind(this,limiter);
// }

// console.log(mapForEach(arr1,checkPastLimitSimplified(2)))


// //download and install underscore.js
// //use the functions that they provide
// //in ES6, map, filter and reduce are native to javascript
// var arr1 = [1,2,3]
// var arr6 = _.map(arr1, function(item){
//     return item * 3
// });
// console.log(arr6)

// var arr7 = _.filter([2,3,4,5,6,7],function(item){
//     return item % 2 === 0
// })

// console.log(arr7)

// var person = {
//     firstName: 'Default',
//     lastName:'Default',
//     getFullName: function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// var john = {
//     firstName: "John",
//     lastName: "Doe"
// }

// //dont do this EVER! For demo purposes only
// john.__proto__ = person;
// //console.log(john.__proto__)
// //gets this method from its prototype or superclass
// //this keyword in getFullName refers to john not person here
// //console.log(john.getFullName())

// var jane = {
//     firstName:'Jane'
// }

// jane.__proto__= john;

//console.log(jane.getFullName())


// //Grab every property and method on this object and its prototype
// for(var prop in john){
//     //filter the properties by just looking at the john object and not in its prototype chain
//     if(john.hasOwnProperty(prop)){
//     console.log(prop + ': '+john[prop])
//     }
// }

// var victor = {
//     address:'111 Main St',
//     getFormalFullName: function(){
//         return this.lastName + ', '+this.firstName;
//     }
// }

// var jim = {
//     getFirstName: function(){
//         return firstName;
//     }
// }

// //combines the properties and methods of victor and jim 
// // and gives it to john object
// // Physically different from prototype chain and combined
// //properties from other objects into john object
// //Copies over properties and methods from victor and jim object into john object
// _.extend(john,victor,jim)

// console.log(john)


// var a = {};
// var b = function(){

// };
// var c = [];

//Different ways to construct objects
//Features in javascript language to construct objects
//Setup its properties and methods and its prototype

//Function that is used to construct an object is called a function constructor
// function Person(firstName,lastName){
//     console.log(this)
//     this.firstName = firstName ,
//     this.lastName = lastName
//     console.log('This function is invoked')
//     //return {greeting:'i got in the way'}
// }


// //Introduced to make javascript look like java
// //new keyword is actually an operator
// //when we specify new keyword an empty object is created
// // then Person() function is called 
// // new operator changes what the "this" keyword points to
// // "this" keyword points to the new empty object created earlier
// //firstName and lastName are added to that empty object

// Person.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// }

// var john = new Person('John','Doe');
// console.log(john.getFullName());

// var jane = new Person('Jane','Doe');
// console.log(jane.getFullName());

// //add to the prototype later
// Person.prototype.getFormalFullName = function(){
//     return this.firstName + "," + this.lastName
// }

// console.log(john.getFormalFullName())

// String.prototype.isLengthGreaterThan = function(limit){
//     return this.length > limit;
// }

// console.log("John".isLengthGreaterThan(3))

// Number.prototype.isPositive = function(){
//     return this > 0
// }

// const abc = new Number(3);
// console.log(abc.isPositive())

// //array is an object
// var arrNames = ['John','Jane','Jim'];
// for(var prop in arrNames){
//    console.log(prop+": "+ arrNames[prop]) 
// }

// Array.prototype.myCustomFeature = "cool";
// console.log(arrNames.myCustomFeature)

// //For arrays dont use for...in, use regular for loop


//Objects dont create new execution context
// var person = {
//     firstName: 'Default',
//     lastName: 'Default',
//     greet: function(){
//         return "Hi " + this.firstName;
//     }
// }

//creates a new empty object with its prototype set in to whatever we passed inside create
// var john = Object.create(person);

// console.log(john)
// //add new methods and properties to the new object
// //good thing is we can change the prototype along the way
// john.firstName = 'John';
// john.lastName = 'Doe';
// console.log(john.greet())

// //Example code of a polyfill
// if(!Object.create){
//     Object.create = function(o){
//         if(arguments.length > 1){
//             throw new Error('Object.create implementation only accepts the first parameter')
//         }
//         function F(){
//             F.prototype = o;
//             return new F();
//         }
//     }
// }


// class Person {
//     constructor(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }
//     greet(){
//     return "Hi"+ firstName
//     }
// }

// var john = new Person("John","Doe")
// console.log(john)

// var a =3;
// console.log(typeof a); //number

// var d = [];
// console.log(typeof d) //object
// console.log(d.toString())
// console.log(d.__proto__)
// //Best way to get any type of object
// //this returns object string
// console.log(Object.prototype.toString.call("dsfs"))
// //this returns object array
// console.log(Object.prototype.toString.call(d))

// function Person(name){
//     this.name = name;
// }
// var e = new Person('Jane');
// console.log(e instanceof Person);

// console.log(typeof undefined);

// //why does it output object? This is a known bug in Javascript
// console.log(typeof null)
// //this shows type of [object Null]
// console.log(Object.prototype.toString.call(null))

// var z = function(){};
// //Returns a function
// console.log(typeof z)



// var person;
// persom = {};
// console.log(persom)
// //undefined
// console.log(window.person)


//Checkout the prototype
//Has lot of methods on it
//method chaining
var a = $("ul.people li").addClass("newClass").removeClass("people");
console.log(a)