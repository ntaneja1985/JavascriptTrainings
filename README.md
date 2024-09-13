-------JAVASCRIPT TRAININGS---------------------------

SYNTAX PARSER: A program that reads our code and determines what it does and if its grammar is valid.
(Compiler and Interpreter)

LEXICAL ENVIRONMENTS: Where something sits physically in the code we write. Lexical means to do with words or grammar. A lexical environment exists in programming languages in which where you write something is important .For e.g

function hello() {
	var a ='hello word'
}

For e.g in the above example where variable "a" is written is important


EXECUTION CONTEXT: A wrapper to help manage the code that is running. There are lot of lexical environments. Which one is currently running is managed via the execution context. It can contain things beyond our code.


-------NAME/VALUE PAIRS AND OBJECTS-------------------------

Name/Value pair: A name that maps to a unique value. The name may be defined more than once, but can have only one value in any given context. 

For e.g:

Address = '15 Floral Park'

Object: collection of name/value pairs (in context of javascript only)

For e.g:
address: {
	street: 'main',
	number: '312',
	apt:{
	floor:3
	number:301
	}
}


---GLOBAL ENVIRONMENT AND THE GLOBAL OBJECT----------------------

All code in javascript runs inside(or wrapped) an execution context.
Base execution context is Global execution context.

Global execution context is accessible anywhere in the code.
It creates 2 things for us:
1. Global Object called 'this' or 'window'(empty window)

Global also means "Not inside a Function"
Any code not inside a function is in Global Context

//Attached to global object as it is not inside a function
var a ='Hello World'

function b(){

}

Execution context runs our code. 


What does the Javascript engine do to create the Execution Context?

In Javascript Execution Context is created in 2 phases:


1. CREATION PHASE

In that phase we have global object that is setup and "this" is created inside global object. 
There is an outer environment is created
In creation phase, parser runs through our code and sees what we have setup for transalation. It sees where we have created variables and where we have created functions.

In the creation phase, the memory space for variables and functions is created. This creation of memory space for variables and functions is called HOISTING.

But please note in case of variable, just the memory space is created, but in case of functions the whole function is moved into memory space.

In creation phase for all the variables, a placeholder called "undefined" is placed.

All variables in javascript are initially set to undefined. When variables are setup in memory space, their initial value is always set to undefined.
It is bad idea to rely on hoisting.

JAVASCRIPT AND UNDEFINED

"undefined" is a special value(keyword) that Javascript has inside it which says that this value hasnt been set.

NEVER DO:  a= undefined;
It is valid javascript but it means that we as programmers never set this value. This is wrong practice and is very painful while debugging.


2.EXECUTION PHASE
In execution phase Global Object, "this", outer environment is already set up
The assignments are set like var a = 'Hello World'.
Here all of our code is run line by line.


JAVASCRIPT IS SINGLE THREADED, SYNCHRONOUS EXECUTION IN ITS BEHAVIOUR

SINGLE THREADED: One command at a time

SYNCHRONOUS EXECUTION: One at a time and in order


----FUNCTION INVOCATION AND THE EXECUTION STACK-----------------------------

INVOCATION: In javascript it means running/calling a function by using parenthesis: ()

For e.g: function b() {
	
}

function a() {
	b()
}

a()

1. First Global Execution Context is created(this, global object, window object)
2. Creation Phase: setup memory space for the above functions
3. When a() is run, then a new execution context is created and placed on the execution stack. This execution context will have its own space for variables and functions. It will go through create phase and execute the function.

In the above case

b() -->new execution context-->gets executed and popped off the stack(first)

a() -->new execution context -->gets executed and popped off the stack(second)


----FUNCTIONS, CONTEXT AND VARIABLE ENVIRONMENTS------------------------

VARIABLE ENVIRONMENT: Where the variables live and how they relate to each other in memory

function b(){
	var myVar;
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();
console.log(myVar)

1. First Global Execution context is created and myVar is set in memory space.
Value of myVar = 1

2. a() is invoked then new execution context is created for a(). Now value of myVar is 2 inside a's execution context

3. b() is invoked then new execution context is created for b(). Now value of myVar is set to undefined inside b's execution context.


-----VERY VERY IMPORTANT AND CONFUSING-------------

4. After a() has finished, then the value of myVar is logged. In this case value of myVar is 1 because value of myVar inside the global execution context the value of myVar is 1.


-----THE SCOPE CHAIN-------------------

function b(){
    console.log(myVar)
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();

b() Execution Context(value of myVar is not defined in b's execution context. Its outer environment is however, global execution context)
Lexical context of function b is Global context not inside function a, so value of myVar is 1 (which comes from global execution context)

a() Execution Context(myVar = 2)

-->Global Execution Context (myVar = 1)


Every execution context has a reference to its outer environment

The whole chain of finding the variable i.e the outer environment references is called the scope chain.

Now lets change lexical(or physical) environment of the function

function a(){
    var myVar = 2;
    b();
    function b(){
        console.log(myVar)
    }
    
}

var myVar = 1;
a();

Now value of myVar that is printed is 2 because the outer environment or lexical environment is the scope of function a() not the Global Execution context as shown earlier.

Another way to look at it is b() is created when the execution context of a() is created, so outer environment of b() is a()
But if we move b() out of function a(), its outer environment is global execution context.

function a(){

    function b(){
        console.log(myVar)
    }

    b();
}

var myVar = 1;
a();

Here value of myVar is 1 (myVar was undefined inside b, then it looked inside a(), didnot find it there, then it looked at a()'s execution context which is global execution context and found myVar over there. So it printed the value of 1. )



---SCOPE,ES6,let--------------------

SCOPE: Where a variable is available in our code. And if it is truly the same variable or a new copy



ES6 has a new way of declaring variables: let
let allows block scoping

if(a > b){
	let c = true;
}

It gets allotted a memory space, but we cannot use it till the line that declares it has run.

Another aspect is that it is declared inside a block {}. It is only available inside the block.

So in a loop if we use let keyword, it is allotted new memory space each time the loop is run.


---Asynchronous Callbacks------------------

Asynchronous: more than one at a time.

Javascript engine doesnt exist just by itself. There are other pieces of code also run alongside it like rendering engine or HTTP Request and Javascript engine has hooks to talk to all these other components. 

Inside the Javascript Engine there is not just the call stack but the event queue also. Events go on to the event queue. 

Event Queue is looked at by Javascript when execution stack is empty.

Javascript looks at the event and then looks for the function that needs to run for that event like for the button click event, it needs to run the clickHandler() function. So it creates an execution context for that function.

Browser puts things into event queue, but the callstack is processed synchronously.

function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function')
}

function clickHandler(){
    console.log("click event")
}

//listen for click event
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution')


First 3 seconds function will run and print finished function
Then finished execution console log is printed
Finally click event is printed






------------TYPES AND OPERATORS IN JAVASCRIPT------------------------

Javascript follows dynamic typing. Javascript engine figures it out automatically. So a single variable can hold different types of values. 

In c# we can have: bool isNew = ‘hello’ //error

Javascript is dynamically typed: var isNew = true;//no error
isNew = ‘yup’; //no error
isNew = 4 //no error

Types that exist in javascript

6 primitive types:
Primitive type is the type of data that represents a single value. Basically any data that is not an object.

Undefined- lack of existence
NULL - lack of existence ( we can set a variable to this)
Boolean- true or false
Number- floating point number(has decimals attached to it)
No float, int, decimal
There is only one type: Number and it is a floating type number
String- a sequence of characters
Symbol-Used in ES6 //not supported by all browsers


----Javascript Operators--------------------------
Operator: A special function that is syntactically(written) differently. Generally operators take 2 parameters and return one result.

var a = 3 + 4; Here + is a function
var a = 4 > 3; Here a is true and is a function

Operator Precedence and associatvity

Operator precedence: Which operator function gets called first. Functiond are called in order of precedence.

Follow DMAS

Operator associativity: What order operator function gets called in: left to right or right to left.

var a = 2, b = 3, c = 4;
a = b = c
console.log(a)
console.log(b)
console.log(c)

Here a, b,c are equal to 4
There is assignment operator here. It has right to left associativity.
so b = c is called
then a = b is called
hence a,b,c are 4

Better use ()
we can do var a = (3+4)*5 = 35

----COERCION------
Converting a value from one type to another.
This happens because javascript is dynamically typed.
var a = 'hello' + 2;
or var a = 1 + '2';
it gives output of 12

--COMPARISON OPERATORS---
console.log(1<2<3);
this gives us true
but what if we have: console.log(3<2<1)

left to right associativity

so 3 < 2 is false

so it is false < 1
so it does coercion
false is 0
0 < 1 which is true
so the above statement returns true

check in browser console: Number(false) will give 0
Number(true) gives 1

Number(undefined) returns NaN(not a number)
Number(null) returns 0
Coercion leads to strange results
Comparison operator causes strange errors (==)
This is because Javascript is dynamically typed and it tries to coerce the values

Thats why we need strict equality (===). It checks for equality without type coercion.

Operators are just functions

There is also something called Object.is which is also used for equality comparisons.

--Existence and Booleans
Boolean(undefined) is false
Boolean(null) is false
Boolean("") is false
Boolean(0) is false

So we can use it like this

var a;

if(a){
    console.log("something is there")
}

Here a is undefined by default,so it coerces to false
This concept of coercion is used in many javascript libraries and frameworks.



function greet(name){
    // if name is undefined, then default value is set
    // if name is not specified it is undefined || 'string'
    // || operator forces the coercion to return the first non - undefined value
    // || runs before = operator so it returns the first non-undefined value
    // if we pass value of name as 'Tony' then it returns 'Tony'
    // looks better than writing if-else statements
    name = name || 'Your name here';
    console.log('Hello '+name);
}

greet('Tony')
greet();

Lets say we have 3 js files :
  <script src="./lib1.js"></script>
    <script src="./lib2.js"></script>
    <script src="./app.js"></script>

    All of these are included in index.html

    Please note that each of the file doesnot create a separate execution context. Rather the code from all these files is combined into a single javascript file that is run.

    So if we have the same variable name across all the files, then it is executed from top to bottom

    Lets say we have a variable defined in lib1.js as 
    var libraryName = 'lib1';

    and in lib2.js we change it to 
    var libraryName = 'lib2';

    and in app.js we console.log(libraryName)
    then lib2 is printed as output: it takes the latest value of libraryName.

    To prevent variable conflicts/collisions like this use this kind of code in lib2.js

    window.libraryName = window.libraryName || 'lib2'

    Now lib1 will be printed as output.

----OBJECTS AND FUNCTIONS-------------------------------

In javascript objects and functions are related.

--Objects and the dot
Objects are collection of name-value pairs
Object can have properties and methods
Object can have
- primitive "property"
- Object "property"
- Function "method"

Objects can have properties and method and they sit in memory

Object has references to different properties and methods

var person = new Object();

person["firstName"] = 'Nishant';
person["lastName"] = 'Taneja';

var firstNameProperty="firstName";
console.log(person[firstNameProperty])
// . operator has the second highest precedence after ()
console.log(person.lastName)

person.address = new Object();
// as per operator associativity the . operator runs from left to right
// here . operator figures out that address is a property of person and street is a property of address
person.address.street = '1225 Sec 18C';
person.address.city = 'Chandigarh'

console.log(person.address)
console.log(person["address"]["city"])

------------Object and Object Literals----------------

//shorthand to create an object literal
var person = { 
    firstName:"Nishant", 
    lastName:"Taneja",
    address: {
        street:"1225 Sector 18C",
        city:"Chandigarh"
    }
};
console.log(person.address.city)

function greet(person){
    console.log('Hi ' + person.firstName)
}

greet(person)
greet({firstName:'Mary', lastName:'Doe'})

person.address2 = "zirakpur"

console.log(person.address2)

-----Faking Namespaces--------------------------

Namespace: A container for variables and functions or a placeholder. Typically used to keep variables and functions with the same name separate.

We dont have namespaces in javascript, so we need to fake it using objects

Use objects as placeholders to keep variables and properties separate.
Most frameworks and libraries which have namespaces use this concept behind the scenes to make it work. They end up using objects

//Faking Namespaces

var english = {}
var spanish = {}

english.greet = 'Hello'
spanish.greet = 'Hola!'
console.log(english)

//gives error
// . operator is left associative, english.greeting returns undefined so undefined.greet gives error
english.greeting.greet = 'Hello'

//To fix it
english.greeting = {}
english.greeting.greet = 'Hello'



----JSON and Object Literals------------------

var objectLiteral = {
    firstName:"John",
    isProgrammer:true
}

console.log(objectLiteral)

//JSON is a subset of object literal syntax with property names wrapped in ""
//JSON has stricter rules

//Convert to JSON and convert from JSON

console.log(JSON.stringify(objectLiteral))


var newName = JSON.parse('{"firstName":"Nalin","lastName":"Taneja"}');
console.log(newName)


-----Functions are objects-----------------

First Class Functions: Everything you can do with other types you can do with functions. Assign them to variables, pass them around, create them on the fly.

Just like any object in javascript, functions reside in memory. We can attach properties and methods to a function(most weird part)

In javascript, function has some hidden special properties: Function may not have a name, it can be anonymous, it also has the code property, the code that we write is written inside a special code property.

The code property is invocable. 

Functions in javascript have the following properties.

Function ---->Primitive,Object,Function,Code,Name(optional, can be anonymous)

Think of function as an object whose code happens to be one of the properties of that object.

Functions in javascript can be moved around just like any other object or number or string.

function greet(){
    console.log('Hi')
}

//Add property to a function...so weird
greet.language = 'english'

console.log(greet)
console.log(greet.language)
//Here function name is greet and its code is console.log(hi)
//If we invoke it like this, it just causes the code property of the function to be executed
greet()

//Think of a function more than just a container of code

//In Javascript functions are objects


---Function Statements and Function Expressions-------------

Expression: A unit of code that results in a value. It doesnt have to save to a variable.

Any expression in a javascript creates a value

Statement does some work and expression returns a value, For e.g if, else statements check if some value is true or not.


//Here the function greet is hoisted, so it can be called before its even defined as it is already in memory
greet()


//Function statement as it doesnot return a value, till the function is executed
//Just gets stored in memory
function greet(){
    console.log('Hi')
}

//Here if we call the function expression before it is assigned, then it will give error
// initially anonymousgreet variable is undefined and we are invoking it like a function
// function statements can be invoked anywhere coz they are in memory but function expressions cannot be run till they are assigned, so function expressions are not hoisted
anonymousGreet()

//Remember functions are first class objects
// Anonymous function is a function that doesnot have a name and it is referenced with the variable name
//Here function is an expression coz it returns a value
//Anonymous functions are function expressions whereas named functions are function statements
var anonymousGreet = function () {
    console.log('Hi from anonymous')
}

//Invoke the function like this
//works perfectly fine as the anonymousGreet variable is assigned
anonymousGreet()

function log(a){
    console.log(a)
    a()
}

log(anonymousGreet)

//first class functions where we can pass them around to other functions as parameters
log(function(){
    console.log('helloji')
})

---By Value Vs By Reference-------------------------

This is in the context of variables:
lets say:
var a = 20;
here a references the memory location of primitive value of 20

if we do b = a,
b will point to the copy of the primitive value of 20 stored in a new memory location

This approach is called by value
--Copying the value into 2 separate spots in memory

Lets say that now
var a = {};
and we do b = a
In this case b doesnot point to a new location in memory rather it points to the same location in memory where the object is stored.

This approach is called By Reference

All objects operate by reference.

//By value coz 3 is a primitive type
var a = 3;
var b;
//It checks that a is a primitive type so it copies over the value to a new memory location
b = a;
a = 4;

//Here a =4 and b = 3 since b has a copy of primitive value of a
console.log("a= ",a)
console.log("b= ",b)

//by reference (all objects including functions)
var c = {greeting:'hi'};
var d;
d = c;

//mutate the value of c which means change value of c
c.greeting = 'Hola!'

//Here c and d show the same output as they point to same memory location
console.log("c= ",c)
console.log("d= ",d)

//by reference (event as parameters)
function changeGreeting(obj){
    obj.greeting = 'Welcome'
}

changeGreeting(d);
//Here c and d show the same output as they point to same memory location
console.log("c= ",c)
console.log("d= ",d)

//equals operator sets us new memory space (new address)
c = {greeting:'howdy'}

//Here c is the new greeting but d remains the same
//now c and d dont point to the same location in memory
console.log("c= ",c)
console.log("d= ",d)

//All primitive types are passed by value and all objects are by reference

---OBJECTS, FUNCTIONS AND 'this'-------------------------
When a function is invoked a new execution context is created
which means that code property is invoked, a new execution context is created.

Each execution context has:
- variable environment
- reference to outer physical environment(where it lives)
- Javascript engine also gives us 'this' variable. 'this' points at different things depending on how the function is invoked.

Every programming language has its own quirks

let keyword solves some of the problems that come with the var keyword as let and const are block scoped rather than globally scoped

//Global object or window object
console.log(this)

//function statement
function a() {
    //Still points at the Global Object
    console.log(this)
    this.newVar = 'hello'
}

//function expression
var b = function(){
    console.log(this)
}

a();
console.log(this.newVar)
b();

var c = {
    name:'The c object',
    log: function(){
        //Hack to make it work inside its own functions
        var self = this;


        //Javascript Engine recognizes that this is a method belonging to an object
        //Here this keyword point to the c object
        console.log(this)
        this.name = 'updated c object'
        console.log(this.name)
        var setname = function(newName){
            //we expect that this keyword should still point to the object c. However thats not the case
           // Here this points to the global/window object
           //Lot of people think this behaviour is wrong 
           console.log(this)
           this.name = newName;

           //this still points to the object
           self.name = newName;
            
        }
        setname('updated again! the c object')
        console.log(this)
    }
}

c.log();

----Arrays Collections of Anything---------------------------
An array is a collection that can hold many things inside of it

var arr = [1,2,3];
arr[0]
arr[1]

Javascript is dynamically typed so Javascript arrays are different.
We can mix and match the types of elements in the array
like:
var arr = ["hello",1, false,{name:'test', address:'1225 sec 18c'},
    function(name){
        var greeting = 'hello';
        console.log(greeting+' '+name)
    }
    ];
console.log(arr)
arr[4](arr[3].name)


-----arguments and SPREAD operator-------------------------------

When we execute a function a new execution context is created.

Each execution context has:
- variable environment
- reference to outer physical environment(where it lives)
- Javascript engine also gives us 'this' variable. 'this' points at different things depending on how the function is invoked.
- Another keyword: arguments: holds all the values to the function we are calling.

Arguments: Parameters we pass to a function. Javascript gives us a keyword of the same name which contains them all.

function greet(firstName,lastName,language='en',...params){

    language = language || 'en';
    if(arguments.length ===0){
        console.log('Missing Parameters')
        console.log('-------------')
        return;
    }
    console.log(firstName)
    console.log(lastName)
    console.log(language)
//Arguments is a special keyword in javascript. It contains a list of all the parameters we have passed
  //Arguments will be deprecated. Replaced with spread operator. Here all parameters get wrapped into an array 
console.log('arg 0: ',arguments[0])
    console.log('--------------')
}

greet();
greet('John')
greet('John','Doe')
greet('John','Doe','en')


----------Function Overloading----------------------

Functions in Javascript are first class objects. So we really cannot have overloaded functions in Javascript. But there are some patterns that can help us achieve some kind of function overloading like this:

function greet(firstName,lastName,language){
    language = language || 'en'
    if(language ==='en'){
        console.log('Hello ' +firstName + lastName)
    }
    if(language ==='es'){
        console.log('Hola ' +firstName + lastName)
    }
}

function greetEnglish(firstName,lastName){
    greet(firstName,lastName,'en')
}

function greetSpanish(firstName,lastName)
{
    greet(firstName,lastName,'es')
}

greetEnglish('John','Doe')
greetSpanish('John','Doe')

-----------Syntax Parsers-----------------
Code we write is directly run on the computer. Somethinh translates our program to convert it into a language the computer can understand.

Javascript engine has syntax parser which reads our code and determines what is valid and what is not.

Syntax parser goes character by character using a set of rules for valid syntax. It can even make changes to our code before it is executed.

---Automatic semicolon insertion--------------------
Semicolons are optional in core javascript
Syntax parser is putting automatic semicolons if it is missing.
Try to put our own semicolons
In case of pressing Enter, automatic semicolon insertion can cause problems

function getPerson() {
    //Syntax parser will insert semicolon after return, we should not put object literal syntax on the next line so it prints undefined.
    return 
    {
        firstName:'Tony'
    }
}

console.log(getPerson())

Solution is to move the curly braces alongside return statement.


-----Whitespace---------------------------------
Whitespace: invisible character that create literal space in our written code, like carriage returns, tabs and spaces. Javascript is very liberal about whitespaces.

var 
//can put comments here
firstName, 
//more space
lastName, 
//use whitespace liberally
language;
var person = {
    //more whitespace
    firstName: 'John',
    //more whitespace
    lastName: 'Doe'
}

console.log(person)

----Immediately Invoked Function Expressions(IIFEs)-----------------
function statement: function greet(name) {
    console.log(name)
}

To invoke a function statement we need to call it like this: greet()

//using a function expression
function expression: 
var greetFunc = function(name){
    console.log('Hello'+name);
}

greetFunc();

//Function statement
function greet(name) {
    console.log(name)
}
greet('John');

//Function expression
var greetFunc = function(name){
    console.log('Hello '+name);
}
//immediately invoked function expression..run the function immediately after creating it
var greeting = function(name){
    return 'Hello '+name;
}('James'); //invokes the function immediately
console.log(greeting)

greetFunc('Peter');

var firstName = 'William';

//IIFE
//Here Javascript engine assumes that anything inside () is an expression
//executing code on the fly
(function(name){
    console.log('Inside IIFE: Hello ' + name) 
}(firstName))

---------IIFEs and Safe Code--------------------------------

(function(name){
    console.log('Inside IIFE: Hello ' + name) 
}('John'))

Steps that happen when the above code is executed
1. Global Execution Context is created.
2. Anonymous function object is created is created in memory
3. New execution context is created for anonymous function
4. variable 'John' goes into that new execution context

Lets say we create a file greet.js and define a variable like this:
var greeting = 'Hola' inside it

Now in our app.js we have the following code:
 var firstName = 'William';

//IIFE
//Here Javascript engine assumes that anything inside () is an expression
//executing code on the fly
(function(name){
    var greeting = 'Hello'
    console.log(greeting +" " + name) 
}(firstName))

console.log(greeting)

Note that variable "greeting" inside function expression doesnot collide with variable "greeting" inside the IIFE. This is because the IIFE creates its own execution context and locally used variable greeting exists inside it only. This doesnot interfere with variable "greeting" created in file greet.js which exists in the global execution context.

Now how to pass reference to global object in IIFE
Do this:
//pass the window object
(function(global,name){
    var greeting = 'Hello'
    //overrides 'Hola' that exists for greeting in global object
    global.greeting = "Hello"
    console.log(greeting +" " + name) 
}(window, firstName))

IIFE promotes code safety. This way we can ensure that variables donot collide and exist inside their own execution context only.




------CLOSURES--------------------------------
- Vital to understand Javascript and it is difficult to understand

function greet(whattosay){
    return function(name){
        console.log(whattosay+" "+name)
    }
}
//greet('hi')('Tony')
var sayHi = greet('hi');
//How does the sayHi remember the parameter name: whattosay
sayHi('Tony')

Closures are a feature of Javascript programming language

Javascript ensures that any function we are running always has access to the variables it needs to access irrespective of the fact that the functions under which these variables were created are running or not.

Javascript engine creates a closure, we are just taking advantage of it


function greet(whattosay){
    return function(name){
        console.log(whattosay+" "+name)
    }
}


var sayHi = greet('hi');
sayHi('Tony')

In the above code we have a function statement greet. 
When we invoke it in sayHi(), we do the following

1. Create a Global Execution Context
2. Create an execution context for sayHi which returns a function and has 2 variables: name and whattosay = 'hi'
3. greet('hi') successfully executes and its execution context is popped off. But please remember the variables it references: 'whattosay' and 'name' still exist in memory.
4. When we run the function:sayHi('Tony') it executes the following function: 
function(name){
        console.log(whattosay+" "+name)
    }
Here since it cannot find the "whattosay" variable locally, it goes up the scope chain. While the execution context of greet() function is not there, the whattosay variable still exists in memory. So Javascript engine goes up the scope chain and references the "whattosay" variable from memory and prints the output successfully.

We dont create closures, they are a feature of javascript programming language.

Consider the following code

function buildFunctions(){
    var arr = [];
    for(var i = 0;i<3;i++){
        arr.push(
            function(){
                console.log(i)
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

1. First the global execution context is created

2. buildFunctions() is invoked. 

3. It creates a new execution context. This execution context has 2 variables: "i" and "arr". First time the loop runs value of i is 0 and value of arr is [function(){console.log(i)}]. Next time it runs value of i is incremented to 1 and value of arr now holds 2 functions. Next time it runs value of i is incremented to 2 and value of arr now holds 3 functions. Next time it runs, value of i is 3 but since the condition is i < 3, so nothing is added to arr. 

4. It outputs the value of arr and execution context of buildFunctions() is popped off. But value of "i" in memory is 3. 

5. So when fs[0]() runs it executes the following function: function(){
                console.log(i)
            }
Here since variable of i is not there locally, it goes up the scope chain and finds the value of i in memory which is 3 and logs it.

6. Similar process takes place when fs[1]() and fs[2]() are run. Value of i from memory is 3 so output of all of these is 3.


Free variables are those variables we have access to outside of the function.

In ES6 we have let keyword which is blocked scoped.

function buildFunctions2(){
    var arr = [];
    for(var i = 0;i<3;i++){
        //let is block scoped
        let j = i;
        arr.push(
            function(){
                console.log(j)
            }
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();

Now this will print 0, 1, 2 because j holds the value of i each time it was assigned.

Another way to get the value of i correctly, is to use IIFEs.So when we push it to the array we invoke the function also:

function buildFunctions2(){
    var arr = [];
    for(var i = 0;i<3;i++){
        arr.push(
            (function(j){
               return function(){
                console.log(j)
               }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2 will have 3 functions :
function(){
 console.log(j)
 }

 Since it doesnot find j locally, it goes up the scope chain, value of j when it was invoked was 0, 1, 2 when it was invoked so 0,1,2 will be printed.

fs2[0]();
fs2[1]();
fs2[2]();

This will give us output of 0,1,2

--------------Function Factories------------------------------
//Here language is in a closure which acts as a factory function
function makeGreeting(language){
    return function(firstName,lastName){
        if(language === 'en'){
            console.log('Hello '+firstName+" "+lastName);
        }
        else if(language === 'es'){
            console.log('Hola '+firstName+" "+lastName)
        }
    }
}

var greetEnglish  = makeGreeting('en');
var greetSpanish = makeGreeting('es');
greetEnglish('John','Doe');
greetSpanish('John','Doe');

It executes in the following manner:
1. It creates the global execution context
2. It puts the function statement makeGreeting in memory
3. makeGreeting('en') --> its creates its own execution context and returns a function
4. makeGreeting('es') --> it creates its own variable environemtn and creates a new execution context
5. So think of it this way:

Execution Context 1 -->created by makeGreeting('en')
greetEnglish is called and it uses its outer variable language which is set to 'en' in this exection context


Execution Context 2 -->created by makeGreeting('es')
greetSpanish is called and it uses its outer variable language which is set to 'es' in this execution context

------Closures and Callbacks----------------------------
Closures are used all the time

//More examples of closure
//Even setTimeout uses closures
function sayHiLater(){
    var greeting = "Hi"

//example of a callback
    setTimeout(function(){
        console.log(greeting)
    },3000)
}

sayHiLater()

//jquery uses function expressions and first class functions!
$("button").click(function(){

});

Callback function: Function you give to another function to run when the other function has finished executing. So the function we call(i.e invoke), calls back by calling the function we gave to it when it finishes

Example of callback:

function tellMeWhenitsDone(callback){
    var a = 2000;
    var b= 4000;

    callback();
}

tellMeWhenitsDone(function(){
    console.log("I am done")
})

tellMeWhenitsDone(function(){
    console.log("All done...")
})


----Call, Apply and Bind---------------------------------------

These functions deal with Function Execution Context.

In a function execution context we have:
1. Variable Environment
2. "this" keyword
3. Outer Environment

this keyword can point to either global execution context or it may point to the function that created this function in the first place.

Function: special type of object. Has the name property which can be anonymous also. It has code property.  All functions have access to call, apply and bind() functions.

var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function(){
        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

var logName = function(lang1,lang2){
    console.log("Logged:"+" "+this.getFullName())
    console.log('Arguments:'+lang1+" "+lang2)
    console.log('--------------')
}

//it just binds the context of "this" object to the function. Also bind doesnot execute the function
var logPersonName = logName.bind(person);

logPersonName('en');

//it not only binds the context of "this" object but it also passes arguments to the function and also executes it
logName.call(person,'en','es')

//same as the call function but it requires an array to be passed. useful in mathematical calculations
logName.apply(person,['en','es'])

//here we are passing the context of "this" object to be person object
var logPersonName = logName.bind(person);

logPersonName();

Call,Apply, Bind are used to pass the context of "this". These 3 methods are available to every function in Javascript.


//function borrowing

var person2 = {
    firstName:'Jane',
    lastName:'Doe'
}
//used apply to borrow getFullName function into person2
//getFullName function also uses this keyword to access its properties
//we manipulate the context of "this" to pass context of person2
//we can grab methods from other objects and use them

//this will set the context of "this" keyboard in getFullName function to be person2
var result = person.getFullName.apply(person2);
console.log(result);


//function currying
//with bind we create a new copy of the function

function multiply(a,b){
    return a * b;
}

//this obviously doesnot execute the function but what does it do?
// this ensure that whenever we create a copy of this function, the first parameter will always be permanently set to 2
var multiplyBy2 = multiply.bind(this,2);
//this will pass in the second parameter since first parameter is already passed
console.log(multiplyBy2(3))

Similarly we can create
var multiplyBy3 = multiply.bind(this,3);
console.log(multiplyBy3(4))

Function Currying: Creating a copy of the function but with some preset parameters. Very useful in mathematical situations

----Functional Programming-------------------

Functions can be passed around as parameters and can be returned as well.
Functions are first class objects in Javascript.

var arr1 = [1,2,3];
console.log(arr1)

var arr2 = [];
for(var i=0;i<arr1.length;i++){
    arr2.push(arr1[i] *2)
}

console.log(arr2)

function mapForEach(arr,fn){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(fn(arr[i]))
    }
    return newArr;
}
console.log('---------------')
//Example of functional programming
console.log(mapForEach(arr1,function(number){
    return number * 2
}))

console.log(mapForEach(arr1,function(number){
    return number > 2
}))

console.log(mapForEach(arr1,x=>x * 3))

var checkPastLimit = function(limiter, item){
    return item > limiter;
}
//Note that checkPastLimit function accepts 2 arguments, if we want to fix
//the first argument we wish to pass, we use bind keyword
//this way every first argument is set to 1
console.log(mapForEach(arr1,checkPastLimit.bind(this,1)))


//We need to create a function where we dont need to
//pass bind and just pass the limiter

var checkPastLimitSimplified = function(limiter){
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter);
}

console.log(mapForEach(arr1,checkPastLimitSimplified(2)))

In functional programming we should not mutate data. 

Underscore.js is a famous library of javascript.
Another famous library is lodash.js
Both use functional programming to enhance javascript.

//download and install underscore.js
//use the functions that they provide
//in ES6, map, filter and reduce are native to javascript
var arr1 = [1,2,3]
var arr6 = _.map(arr1, function(item){
    return item * 3
});
console.log(arr6)

var arr7 = _.filter([2,3,4,5,6,7],function(item){
    return item % 2 === 0
})

console.log(arr7)

--------Object oriented Javascript and Prototypal Inheritance-------
Classical vs Prototypal Inheritance:
Inheritance: One object gets access to methods and properties of another object.

Classical Inheritance: It is very verbose. Huge massive collection of trees of objects. Used in Java, C#
Prototypal Inheritance: Much simpler and flexible. Very easy to understand. Javascript uses prototypal inheritance

---Understanding the Prototype----------------

All objects in javascript have prototype property. This property is just a reference to another object: proto {}



Lets say we have object in memory.
Object has properties and methods

Object -->obj

obj.prop1

obj.prop2
Javascript engine tries to find prop2 property on obj object. If it doesnot find it there, it goes to proto object. If it finds the property named prop2 over there, it returns it.

Gives the appearance that prop2 is on obj but its on proto object.

Each object can have its own prototype.

Each object has a prototype chain.
We can have a sequence of objects connected by this prototype chain.

Javascript engine does the work of searching the prototype chain.

Lets say we have an object obj whose superclass or prototype is another object obj1.

if we try to do obj.firstName, it will first search for firstname property inside obj, if it doesnt find it, it will go to its prototype i.e obj1. If it finds it there, it will return that value.
If it doesnt find it there, it will keep searching down the prototype chain, i.e it will look at the prototype of obj1 and then on and on till it finds that property.

Example is:

var person = {
    firstName: 'Default',
    lastName:'Default',
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }
}

var john = {
    firstName: "John",
    lastName: "Doe"
}

//dont do this EVER! For demo purposes only
john.__proto__ = person;
console.log(john.__proto__)
//gets this method from its prototype or superclass
//this keyword in getFullName refers to john not person here
console.log(john.getFullName())

var jane = {
    firstName:'Jane'
}

jane.__proto__= john;

console.log(jane.getFullName())
//Result is Jane Doe


----Everything is an Object(or a primitive)--------------

Everything in Javascript that isnt a primitive(Number, boolean, string) is an object and has its own prototype. In a browser we can access any object's prototype by doing this:
var a = {};
var b = function(){

};
var c = [];

a.__proto__
b.__proto__
c.__proto__

-----Reflection and Extend--------------------------------------

Reflection: An object can look at itself, listing and changing its properties and methods

//Grab every property and method on this object and its prototype
for(var prop in john){
    //filter the properties by just looking at the john object and not in its prototype chain
    if(john.hasOwnProperty(prop)){
    console.log(prop + ': '+john[prop])
    }
}

var victor = {
    address:'111 Main St',
    getFormalFullName: function(){
        return this.lastName + ', '+this.firstName;
    }
}

var jim = {
    getFirstName: function(){
        return firstName;
    }
}

//combines the properties and methods of victor and jim 
// and gives it to john object
// Physically different from prototype chain and combined
//properties from other objects into john object
//Copies over properties and methods from victor and jim object into john object
_.extend(john,victor,jim)

console.log(john)


In ES6 we now have the extends keyword so that we can explicity extend one object from another object


Basically in addition to prototype pattern, we can also use the extends patterns to combine and compose objects or enhance their functionality.

----Building Objects-------------------------------------------

--Function Constructors, 'new' and the history of javascript---

Javascript is a language primarily built for the browser. It was named Javascript to attract java developers to it. Similarly to this Microsoft was trying to attract VB developers by calling its own language vbScript

var john = new Person();

Function Constructor: A normal function that is used to construct objects. The 'this' variable points to a new empty object and that object is returned from the function automatically.

//Different ways to construct objects
//Features in javascript language to construct objects
//Setup its properties and methods and its prototype

//Function that is used to construct an object is called a function constructor
function Person(firstName,lastName){
    console.log(this)
    this.firstName = firstName ,
    this.lastName = lastName
    console.log('This function is invoked')
    //return {greeting:'i got in the way'}
}

//Introduced to make javascript look like java
//new keyword is actually an operator
//when we specify new keyword an empty object is created
// then Person() function is called 
// new operator changes what the "this" keyword points to
// "this" keyword points to the new empty object created earlier
//firstName and lastName are added to that empty object
var john = new Person('John','Doe');
console.log(john);

var jane = new Person('Jane','Doe');
console.log(jane);

---How to setup prototype of an Object--------------------
Functions are a special type of object in javascript. They have name, code properties. Every function also has a prototype property as well. When we use new operator to invoke our function, the prototype property is used. It is by default set to an empty object {}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

var john = new Person('John','Doe');
console.log(john.getFullName());

var jane = new Person('Jane','Doe');
console.log(jane.getFullName());



The good thing is that we can always add the prototype later and access the prototype later inside our objects 
//add to the prototype later
Person.prototype.getFormalFullName = function(){
    return this.firstName + "," + this.lastName
}

console.log(john.getFormalFullName())

So the question arises: why add it to the prototype and not to the function constructor?
Well, it will take up memory space. If we add it to the function constructor, every object instantiated from that function constructor will get a copy of that function (which may or may not be required)
It will take up memory space.

So best option is to add it to the prototype. So from an efficiency standpoint we should use prototypes. This ensures the function is used where it is needed while also saving up memory space.

----new() and functions-----------
Function constructors are just regular functions. 
new() is also an operator. It creates a new empty object and change the context of "this" keyword to point to that object.

If we dont use the new keyword then what happens:

var jane = Person('Jane','Doe');

It just executes the Person() function which doesnt return anything, so jane is undefined here.

Thats why function constructors are not really preferred to create objects.

The first letter of a function constructor is a Capital Letter.

Solution we can use is to use linters. They can warn us about these problems.

Function constructors are not going to stay around to create new objects.

---------Built In Function Constructors----------------------

var a = new Number("3")

If we try to print value of a it will not give the value of 3 rather it will give us an object due to the new keyword.

then using a.__proto__we can get access to functions like toString(), toFixed() etc

Similarly if var b = new String("john")
we will have access to functions like indexOf, splice, shift,unshift etc inside its prototype.

We can also use prototypes are kind of extension methods. We can keep adding functionality to existing objects
Here we are adding a prototype method to the String object.

String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}

//Here "John" is boxed automatically by Javascript engine into a String 
//Object and a prototype method can be attached to it.

console.log("John".isLengthGreaterThan(3))

Remember extension methods in c#

Number.prototype.isPositive = function(){
    return this > 0
}
const abc = new Number(3);

console.log(abc.isPositive())

Built in function constructors can be dangerous also

var a = 3;
undefined
var b = new Number(3);
undefined
a === b
false
a == b
true

By using built in function constructors to create primitives, it can lead to unintended side effects.

For manipulating dates and working with dates, use a library called moment.js

we can do var c = Number(3)
c = 3

-----Arrays and for-in----------------
//array is an object
var arrNames = ['John','Jane','Jim'];
for(var prop in arrNames){
   console.log(prop+": "+ arrNames[prop]) 
}

Array.prototype.myCustomFeature = "cool";
console.log(arrNames.myCustomFeature)

//For arrays dont use for...in, use regular for loop

----Object.create and Pure Prototypal Inheritance---------------

Function Constructors were designed to mimic other languages that dont implement prototypal inheritance and so they are little awkward.

Other languages defines classes and then we use the new keyword to create objects. This is what function constructors are trying to mimic.

On the other hand, many consider it better that javascript implements prototypal inheritance

Newer browsers use Object.create()

/Objects dont create new execution context
var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function(){
        return "Hi " + this.firstName;
    }
}

//creates a new empty object with its prototype set in to whatever we passed inside create
var john = Object.create(person);

console.log(john)
The above code results in an empty object with its __proto__ property set to person object.


//add new methods and properties to the new object
//good thing is we can change the prototype along the way
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john.greet())

Newer browsers support Object.create() to create new objects, for older browsers we use polyfills.

Polyfills: Code that adds a feature which the engine may lack. Older browser may have an old javascript engine. So we need to use a polyfill to add new feature. Basically it fills in the gaps that older engine may not have.

//Example code of a polyfill
if(!Object.create){
    Object.create = function(o){
        if(arguments.length > 1){
            throw new Error('Object.create implementation only accepts the first parameter')
        }
        //Quite simple really, sort of like function constructor
        function F(){
            //set prototype of the function
            F.prototype = o;
            //returns a new function constructor with its prototype set //to whatever we passed in
            return new F();
        }
    }
}

Using polyfills we can mimic the functionality of Object.create() on older browsers with older javascript engines.

The above code is pure prototypal inheritance.
Here we can use an object to create a new object and then add more functionality to the new object as required.

----ES6 and classes-------------

ES6 has the concept of classes
Classes are a way of defining an object, telling us what is properties and methods should be.

Javascript doesnot have classes till ES6.

class Person {
    constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }
    greet(){
    return "Hi"+ firstName
    }
}

var john = new Person("John","Doe")

In other programming languages, classes are just templates.
However class is an object in javascript.
Classes are just syntactic sugar. It doesnt change anything.
It is still prototypal inheritance
Prototypal inheritance is much simpler.

Now in ES6 to setup the prototype use the keyword "extends" like this:

//Sets the __proto__ property
class InformalPerson extends Person {

 //super will call the constructor of the object that is my prototype
    constructor(firstName,lastName){
        super(firstName,lastName)
    }
    greet(){
    return "Hola " + firstName
    }
}

----------Initialization------------------
var people = [
{
    firstName:'John',
    lastName:'Doe',
    addresses:[
        '111 Main St',
        '222 Third St'
    ]
},
{
    firstName:'Jane',
    lastName:'Doe',
    addresses:[
        '112 Main St',
        '224 Third St'
    ],
    greet: function() {
        return 'Hello'
    }
}
]

Setup this kind of data inside an interface and get this data from an API.


----typeof instanceOf and knowing what type the variable is---------

typeof and instanceOf are not very reliable:

var a =3;
console.log(typeof a); //number

var d = [];
console.log(typeof d) //object
console.log(d.toString())
console.log(d.__proto__)
//Best way to get any type of object
//this returns object string
console.log(Object.prototype.toString.call("dsfs"))
//this returns object array
console.log(Object.prototype.toString.call(d))

function Person(name){
    this.name = name;
}
var e = new Person('Jane');
console.log(e instanceof Person);

console.log(typeof undefined);

//why does it output object? This is a known bug in Javascript
console.log(typeof null)
//this shows type of [object Null]
console.log(Object.prototype.toString.call(null))

var z = function(){};
//Returns a function
console.log(typeof z)

------Strict Mode--------------------------------
There is a process to opt-in to let Javascript Engine know that we want to process our code in a stricter way, to be more picky and regimented.

Javascript is a flexible language. But strict mode can help to prevent errors.
It is a way to opt-in to a more restricted version of javascript

var person;
persom = {};
console.log(persom)
//undefined
console.log(window.person)

In strict mode we need to declare a variable before we make it equal to anything.

We can use: 'use strict'
var person;
persom = {};
console.log(persom)

app.js:788 Uncaught ReferenceError: persom is not defined
    at app.js:788:8




-----Learning from Other's good code----------------------
Lot of nice frameworks and libraries have been built on Javascript and most of it is open source.

E.g Angular, React and jQuery, backbone.js

Read their source code from Github

-----Review of jQuery Source Code------------------

jQuery also deals with cross-browser issues
It lets us manipulate the DOM

//First line is an IIFE in jQuery
( function( global, factory ) {

it checks the environment where jQuery is sitting like whether it is being used in browser or Node.JS environment.

// Define a local copy of jQuery
    jQuery = function( selector, context ) {

        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init( selector, context );
    };


$("#id")-->returns a call to a function constructor:

 return new jQuery.fn.init( selector, context );

 some init function constructor sitting on fn object sitting on JQuery object.

 //All functions get a prototype property if they are used as a function constructor.

 jQuery.fn = jQuery.prototype

 it has methods for map, each, doing shallow copy and deep copy of objects.

 It makes use of extend method to add methods and properties to my target object.

var a = $("ul.people li"); -->This line calls a function which creates a new object using a function constructor and that new object has access to all the properties and functions of jQuery object itself.


//method chaining
var a = $("ul.people li").addClass("newClass").removeClass("people");

Calling one method after another and each method affects the parent object.
So obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'


 $("ul.people li").addClass("newClass").removeClass("people");

 addClass() method does some work and return 'this' object.
 Thats why addClass() method is chainable. Same goes for removeClass()

 Here Javascript Engine will look for this method on the object first, if it doesnt find it, it will look at its prototype, then 'this' variable points to the originating object.

 The $ sign we use is an operator to call the jQuery function. This jQuery function is sitting in the Global Object or the window Object.




----Create Own Framework and Library(greetr)--------------------------
1. When given a firstName, lastName and optional language, it generates formal and informal greetings
2. Supports English and Spanish languages
3. Reusable library/framework
4. Easy to type 'G$()' structure
5. Support jQuery
6. Pass any element from HTML like div or span and greetr library should fill it with greeting text.


-----Transpiled, ES and Transpiled languages------------------

Transpile: convert the syntax of one programming language to another.
In this case, languages that dont really run anywhere, but instead are processed by transpilers that generate javascript.

Examples are Typescript.
Typescript provides strict type checking.
It also has features like class, types, union types etc.
it transpiles to javascript

Another one is traceur. It writes us write ES6

----------Promises Async Await------------------------------------

Functions in javascript are first class objects. They can be assigned values and passed around

function runThis(otherFn){
    otherFn();
}

runThis(
()=>{
    console.log("Function 2...........")
})

Javascript under the hood has an execution stack
On the execution stack is placed an execution context.

First we have the Global Context
As functions are called, they are placed on the stack

Inside the execution context, the functions are executed line by line one at a time.

Javascript engine provides an idea of a task queue.

So Javascript Engine has an Execution Stack(Call Stack) and Task Queue
Concept of Timer is not part of Javascript specifications
This comes from Node.JS or Browser

setTimeout() doesnot exist in javascript. It is a feature made available
to javascript from the browser or Node.JS

We utilize the concept of first class functions to specify a function that should run when that process is completed. 

When that process is completed, a notification of that is placed on the queue and then javascript engine knows what to do.

Once call stack is empty,  It runs the timeoutHandler or callback function.

setTimeout(function(){
    getPerson(function(){
        getLog(function(){
            .....
        })
    })
},1000)

This is very difficult to deal with. We may have a timeout function which when complete runs another function and when that other function is complete may require another function to run.

Very difficult from coding and debugging standpoint. Called pyramid of doom.

What if we had multiple callbacks to run?

The above coding structure is not very well suited.
We need a better coding approach to deal with these asynchronous events.

So we use Promises

A promise is standardized approach to dealing with asynchronous events and callbacks.

Promise are an object that represent an idea.
They represent a future value.
A value we may get in the future but we dont have it right now

Javascript already can do this, but Promises encapsulate that value.
Before promises, we already had some libraries that could do this like WinJS, RSVP.js, when.js etc

But then promises became part of javascript specification

Thenable Object: An object that has a "then" function. This is some object that acts like Promise

How async and await work:

1. First we have Global Execution Context
2. Then async function is run
3. async function is executed till await statement is reached
4. async keyword tells the Javascript engine that we need to await atleast one thing inside this function
5. We need to await for a promise. We could await another value but it will be wrapped up inside a Promise
6. When the engine reaches the await keyword, the execution context is paused or we can say that it is set off to the side and regular function and invocation continue.
7. The execution context will continue to await(or be paused) till the promise is resolved or rejected.
8. Then another function might be called.
9. When that paused function resolves, it goes back to the execution stack and function execution continues after the promise has resolved using the value it has returned.
10. It basically makes our code which is asynchronous, synchronous to write and debug.
11. async and await depends on Promises.

---ES6 Most Used Parts---------------------------------------------

1. let keyword
let is block scoped. Block is {}
let keyword allows us to control the scope very clearly and easily using curly braces

let myVar = 1;
{
    let myVar = 2;
    console.log(myVar);
    {
        let myVar = 3;

            //myVar is block scoped, value of myVar here is 4
        for(let myVar = 4; myVar > 3;myVar--){
        console.log(myVar)
        }
        console.log(myVar)
    }
}

console.log(myVar);
//Output is 2,4,3, 1

Errors and mistakes can be avoided using let keyword.
let is not added to the Global Object.

2. const keyword
const provides a way to declare a variable where the binding is immutable.
Binding: The connection(pointer) between a variable name and a specific location in the computer's memory that holds the value.

Immutable: cannot be changed

So if const points to an object, then we change the properties of the object later but not the object itself.
so if const a = {name:'Nishant'};
const a = 5; //this gives an error
a.name = "Nalin" //allowed and valid

3. Arrow Functions
Arrow function is a shorthand way of writing functions. We cannot use arrow functions as declarations. 

When a function is invoked we have 3 things being created as part of Execution Context:
1. Variable Environment
2. 'this'
3. Outer Environment

Arrow functions still have all the above created but no 'this' keyword.
This is very important.

// function Timer(){
//     this.seconds = 0;
//     setInterval(()=>{
//         this.seconds++;
//         console.log(this.seconds)
//     },1000)
// }

//Lets assume in the above Timer function instead of arrow function, we used regular functions
function Timer(){
    this.seconds = 0;
    //this here points to the timer object
    console.log(this)
    setInterval(function (){
        //this points to the window object..remember we had to do const that = this; or const self = this;
        console.log(this)
        //this.seconds will give NaN since this.seconds doesnot exist
        this.seconds++;
        console.log(this.seconds)
    },1000)
}


//use Timer as a function constructor
const timer = new Timer();

Known downside of arrow functions:
Arrow functions dont have this keyword


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

Best use case of arrow functions: Callbacks


4. Destructuring Assignment
const greetings = ["Hello","Hi"]

const a = greetings[0];

console.log(a)

Lot of work while typing

so do it like this:
const [a,b] = greetings;
console.log(a)

let person = {
    firstName:'Nishant',
    lastName: 'Taneja'
}

//Notice that these variable names must match the property names of the //object
let {firstName,lastName} = person;
