<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Same here: A couple of important points.

As we begin this section, we're going to dive in into some detail, into some of the most commonly

used aspects of more modern JavaScript.

That's not to say that the things we've talked about aren't still applicable.

In fact, they're very important.

For example, using the var keyword has showed us some of the weirdest parts of JavaScript.

Depending on the project you're working on and the browsers you're targeting, you may be using older

or newer aspects of JavaScript as well as legacy projects versus new ones.

But here we're going to talk about some of the most common modern aspects of JavaScript, and that will

help us to get ready to understand even more.

This is ES6, the most used parts.

Let's talk more about the let keyword for declaring variables.

For starters, for the rest of this course, I'll be switching from brackets to Visual Studio Code.

Now, that's not to say you can't use brackets for any of this.

I'm just switching over because Visual Studio Code is very popular, so I want to include that in the

course.

You can get Visual Studio Code by going to Code.visualstudio.com.

It's free.

Then, in order to be able to run my code, I go to extensions and I installed an extension called Live

Server.

Once I have this extension installed, then I can go to my index.html page and in the bottom right just

click Go Live.

My computer then pretends to be the internet and the code is running.

There it is.

It outputted one.

Which is the value of my var.

It went up the scope chain and found that value when we executed the A function.

The A function executed the B function and we see a one var is scoped via where it is lexically inside

the function calls defined within my JavaScript code.

But let's suppose that instead I use the keyword let.

What happens here?

Well, for starters, let's just log to the console.

My var let still works.

There it is.

But one immediate difference is if I go to the global object, the window object, I won't find my var

anywhere on it.

Unlike declaring a variable with the var keyword.

Declaring a variable with let does not add it to the global object.

So how is let scoped?

Well, it's block scoped.

This is a block curly braces.

That means that I can declare a variable either at the global level or inside a block.

When I log to the console, the JavaScript engine will look lexically at my code, but look for the

first instance of that variable declared in the same block where it's being called at that moment,

and that line of code.

So here I see one both times, first and second.

But if I let myvar equal two, then on this console.log, it will look at the scope and find that there

is a myvar declared within a block.

The same block that's being called.

So that's the var that it will use, and it will stop looking up the scope chain in the instance of

this console.log.

The first variable declared with let that it finds will be that one here, because inside this block

is deeper down the scope chain than where this call is made.

Similar to how if this was a function definition, the same thing would be true.

So I see two, then one.

Let then allows us to declare our variables and control the scope very clearly and visually, with curly

braces and any syntax that uses curly braces without having to break things into functions.

And I could keep going down the line.

I could put another set of curly braces.

Another block set myvar equal to three, log that to the console, etc., etc. 231.

Why is that?

Well, the code runs.

The first console is at the same block here with Myvar two.

The second console dot log finds its first myvar inside the same block where that line of code is being

run.

And finally the outer one.

So two, three and then one because of these console.log orders.

Note that it's not just because it's inside the curly braces, but associated with the curly braces.

For example, let's suppose that I write a for loop and I'll declare in the for loop my variable with

let.

Let myvar equal four.

And then I'm going to as long as it's greater than three, keep running.

So it'll just run once and I'll count down.

So console.log Myvar.

And there's that four because the loop only runs once two, then four three and then one.

Notice that this is a four even though the let is not inside the curly braces where I typed.

But for purposes of JavaScript syntax, what's inside these parentheses is associated with this block,

these curly braces.

So the JavaScript engine considers what I declare here as if it was inside these curly braces.

So when I do a console dot log, this is the same block as the console dot log.

Let gives us more control over the usage of our variables, over how they can collide across scope.

That doesn't mean you can't use var, but to be honest, most JavaScript developers prefer using let

and we'll talk about in the next lecture const.

For this reason you can avoid errors and mistakes by using let because we know that if we declare it

inside those curly braces and then we write a line of code referencing it inside those same curly braces,

or in a scope below, then that is what will be used.

And we can have the same variable name under different circumstances and not worry that one is overriding

the other or generating errors.

And it also isn't added to.

And even if we declare it at the global level, it's not added to the global object.

For the rest of this course, we'll be using let or const block scoping is great, but as someone who

understands JavaScript completely, it's good to understand var and let and const which is next.

Let's look closer at yet another way to declare a variable in JavaScript.

This is const.

Const provides a way to declare a variable where the binding is immutable.

Big word alert.

Binding the connection.

The pointer between a variable name and a specific location in the computer's memory that holds the

value.

So the binding, for example, when we use the equals operator, binds the name of the variable.

To the place in the computer's memory where the value of the variable is stored and immutable.

Means that something cannot be changed.

So using the const keyword means we create a binding that cannot be changed.

But that's different from creating a value that cannot be changed.

Let's try using const to declare a variable.

I'll say const.

Let's say my var equals one.

Now if I say my var equals two, what will happen?

Well I get an error.

Uncaught uncaught type error assignment to constant variable because I declared my variable with const

instead of var or let.

The JavaScript engine won't permit me to reassign this value, but really, it's not the fact that I'm

changing the value.

What's not allowed is I'm trying to change the binding.

The equals operator takes the variable and points it at a new location in memory, or an updated location

in memory, where this value would now be two.

But the variable has an immutable binding because of const, meaning that it's already pointing to a

spot in memory.

So you can't change where this variable name points to.

How is that different from just saying I can't change the value?

Well, let's say I made a new variable called greet and it's an object that holds my name.

Now I'll say greet dot name equals Anthony.

What do you think is going to happen?

Well let's comment this out so I don't get an error.

And I'll log to the console the greet object.

And there it is.

And the update happened.

The value, the object itself changed.

Why was that allowed?

Because what const causes is an immutable binding?

When I used the dot operator that looked at the same object in the same location in memory and updated

a portion of it, the name property that isn't the same as pointing the greet variable to a new location

in memory.

Instead, I edited the value already in that very location.

And that's allowed.

So it can be confusing to say const and think that well, now this object can't change.

But that's not true.

The dot operator doesn't go point the variable somewhere else, it just changes a portion of the object.

It's the equals operator that's changing the binding.

So you can declare a const variable with an immutable binding.

But if you aren't setting it equal to a primitive value, if you're setting it equal to, say, an object,

then const is not guaranteeing that that complex value, that object can't be changed.

It does guarantee that I'm not going to be able to write greet equals later on.

That gives me an error because I'm trying to change the binding.

And Kant says you can't do that.

One last note.

Often you may see developers choose to name const variables as all capitals.

That's a way for them to be able to note later in the code that this is a const variable, something

that's not going to be changed.

Now you don't have to do that.

I just wanted to point that out because it's common.

But that's const.

If you want to make sure that you're saying, hey, this value I really don't want you to be able to

reassign it by accident.

Then you can use const.

Oh, and by the way const just like let is block scoped.

So if I put inside a block this change and I declare const greet to be name Tony and last name Alysia.

And then I log to the console twice.

What's going to happen?

What do you think?

I'll see.

Well, the greet at this last console is going to be referencing here.

This greet with name Tony.

But inside the block this console greet will be referencing what's lexically scoped the block level

that is between curly braces.

So we'll change the name to Anthony, but it will also have the last name property.

So I see Anthony Alysia.

And then just Tony.

So const works the same as let, but creates an immutable binding.

And that can be very useful in your code.

Another very often used aspect of modern JavaScript is arrow functions.

We've talked a lot about functions and functions being object in JavaScript.

So if I create a function called greeter that takes a name and then I return hello name, and then I

log to the console calling that and passing Tony, I get back the string.

Hello, Tony.

And it's logged to the console.

There it is.

This is a function declaration.

I know.

I can also do a function expression where I say a variable is equal to, let's say an anonymous function.

I can still call greeter because it's referencing that function object still works.

An arrow function is essentially a shorthand way of writing functions.

You can't use arrow functions as declarations because they have no name.

They're always anonymous.

I take away the keyword function and replace it instead, where I have my parentheses and my curly braces

in between, I use equals greater than, which forms an arrow.

This is still a function and it still works.

It's an arrow function.

An arrow function also allows me to do one more piece of shorthand.

If I had more code here, then I would need these curly braces.

But if I know I just have one line and it returns a value, I can actually drop the curly braces and

the return.

And that still works.

The shorthand of an arrow function says after the arrow.

If there's only one line with no curly braces, I assume that that's actually a return.

The JavaScript engine will parse the arrow function that way, and that's what will be executed.

This is great because it saves me some typing, but it can be a bit confusing because it's not immediately

obvious until you become accustom to how arrow functions work.

Arrow functions are just functions.

They're therefore also objects.

If I create a greet function where I pass the functional greeting, the function that will be called

where I pass to it, the name.

So I could give different greet functions.

Then I can log to the console call greet and I'm going to give it a function.

But I could say function, etc. or I can just say an arrow function.

It takes a name and returns hi plus last name.

And the second parameter of the greet function is name.

So I'll put Anthony.

So I'm calling the greet function I'm passing an arrow function object, which is a function that takes

a name and returns hi plus name and then passing a string.

And there it is.

The arrow function is passed around just like a normal function.

It's really just creating a function object.

But there is a difference.

Remember how you said that when a function is invoked during the creation phase, the execution context

is created and it has various things, including a this keyword, a variable, this.

Well, when arrow functions are created, there's still an execution context.

But no this.

What does that mean?

Well, that means I can at times avoid certain issues.

For example, if I had a function timer that really was going to create an object and it starts at zero.

And then I was going to start a timer using Setinterval, which just runs a function every certain number

of milliseconds.

Then I can increase this dot seconds and log it to the console, and then I'll create a new timer.

And it's running.

But what if I didn't use an arrow function in this case?

Well, if I used a regular function.

What would this point to?

I would get an error.

It points to nothing because when I use this in a regular function, it's about creating a new object.

I need to use the new keyword to get that object, etc. this would be pointing to any new object created

from the function.

But when I use an arrow function because there is no this keyword, it's going to try to find the variable

this up the scope chain.

So the next one up would be the this pointing to the new timer object that was just created.

So that works.

Here's a downside though.

Let's suppose I create an object creator two that has name Tony and a function.

And I'll make it an arrow function that says the greeting based on the value of the name and the object.

What's going to happen?

I'll call the greet method on the greeter two object and I get undefined as a result.

Why?

Because greet is attached to an arrow function, and arrow functions don't have the this keyword in

the execution context.

So it tries to go up the scope chain and finds this.

What will this be?

Well console.log this I'll return.

Hello, I need to add the return keyword because now I have two lines of code in my function and look.

This is the window object.

It went up the scope chain and next up the scope chain.

Outside the object is the global.

This.

This shows how arrow functions are not really suitable as methods on objects.

If instead I said function and got rid of the arrow, the execution context will have a this keyword

which will be pointing at the object that it's part of.

And because it's not an arrow function, I'll need to add return.

And that works.

This keyword is in place and it's pointing at the object that the function is a part of.

Up the scope chain.

The.

This keyword exists and is pointing at the object that function is a part of.

So arrow functions are very useful to use as callbacks.

For example, quickly passing these functions around, setting them equal to variables.

They're fast to write.

And because they don't have the this keyword, that can be an advantage under some circumstances, but

they can be problematic as methods on objects because they don't have the this keyword.

That said, whenever you see an arrow function, you never you see this equal and greater than.

Then you know, that's essentially saying function.

And if you don't see any curly braces in one line, then you know, that's saying return.

And lastly, there's no this keyword.

Let's move on.

There's another very often used feature in modern JavaScript.

It's called destructuring assignment.

Destructuring assignment doesn't actually add any true new capabilities to JavaScript.

Not really in the sense that for the most part, it doesn't provide anything that couldn't have been

accomplished before some other way, but it does make a certain kind of thing far faster and far easier.

Let's say I have an array of greetings, hello and hi two strings.

Now, if I wanted to set two variables equal to those values, I'm going to use const.

Here I might say greetings zero and const be equals.

Greetings one.

So the first and second positions of the array.

And then log to the console both of those.

And there they are.

But that's a lot of work when it comes to typing.

Just typing it out some more values there were there.

The more typing I would do and I'd really be repeating myself a lot.

This kind of thing is where destructuring assignment comes in.

I can still declare let or const for example, but I can say that I want to destructure the array.

Then I'm going to declare two variables a and b, and the JavaScript engine will destructure this array,

meaning it will take the value in the first position and put it in a and the value in the second position

and put it in B.

Declaring declaring these variables, setting them equal to those values all in that one line of code.

And that still works.

I can do the same thing with an object.

Let's say I have an object that holds my first name and last name.

I can now use let in this case say that I want to destructure the object, pulling out each individual

property and assigning it to a variable, assigning that value of that property to a variable.

But it needs to match the name.

For example, if I said f and l for first name last name equal to person the object, what's going to

happen?

Unlike array, it doesn't just try to grab the first property name that it comes across, it's undefined.

Our variable names and these are variable names, even though they're inside curly braces because they're

on this side of the equals, they're treated as variable names being declared.

If the variable name matches the property name on the object on the other side of the equals, then

that object will be destructured.

The value of person dot first name will be the value of the first name variable.

So I can say first name, last name and that works.

Destructuring is very useful and can save us a lot of time in our code.

Sometimes features are just there to help the developer.

And I appreciate those kinds of features.

Let's move on.

**Perfect! Here's a beginner-friendly explanation of modern JavaScript (ES6) with simple code examples for interviews.**

***

# 🎯 Modern JavaScript (ES6) - Interview Ready Guide

## 📚 Part 1: let vs var vs const

### The Old Way: var

```javascript
// var is FUNCTION scoped
function test() {
  var x = 1;
  console.log(x);  // 1
}
console.log(x);  // Error: x is not defined

// var gets added to global object (window)
var globalVar = "Hello";
console.log(window.globalVar);  // "Hello"

// var can be re-declared
var name = "John";
var name = "Jane";  // No error!
console.log(name);  // "Jane"
```


***

### The Modern Way: let (Block Scoped)

**Block = Anything between `{ }` curly braces**.[^1][^2][^3]

```javascript
// let is BLOCK scoped
{
  let x = 1;
  console.log(x);  // 1
}
console.log(x);  // Error: x is not defined

// let NOT added to global object
let globalLet = "Hello";
console.log(window.globalLet);  // undefined

// let CANNOT be re-declared in same scope
let name = "John";
let name = "Jane";  // ❌ Error: Identifier 'name' has already been declared
```

**Key Difference: Block Scope**[^2][^3][^1]

```javascript
// Example 1: var is function scoped
function varExample() {
  var x = 1;
  
  if (true) {
    var x = 2;  // Same variable!
    console.log(x);  // 2
  }
  
  console.log(x);  // 2 (changed!)
}

// Example 2: let is block scoped
function letExample() {
  let x = 1;
  
  if (true) {
    let x = 2;  // Different variable!
    console.log(x);  // 2
  }
  
  console.log(x);  // 1 (unchanged!)
}
```


***

### Nested Blocks with let

```javascript
let myVar = 1;
console.log(myVar);  // 1

{
  let myVar = 2;
  console.log(myVar);  // 2
  
  {
    let myVar = 3;
    console.log(myVar);  // 3
  }
  
  console.log(myVar);  // 2
}

console.log(myVar);  // 1

// Output: 1, 2, 3, 2, 1
```

**Each block has its own scope**![^3][^1]

***

### let in For Loops

```javascript
// let in loop (block scoped to loop)
for (let i = 0; i < 3; i++) {
  console.log(i);  // 0, 1, 2
}
console.log(i);  // Error: i is not defined

// vs var in loop (function/global scoped)
for (var j = 0; j < 3; j++) {
  console.log(j);  // 0, 1, 2
}
console.log(j);  // 3 (still accessible!)
```


***

## 🎯 Part 2: const - Immutable Binding

**const = Constant binding, NOT constant value**.[^5][^1][^2]

### Immutable Binding Explained

```javascript
// Primitive values
const myVar = 1;
myVar = 2;  // ❌ Error: Assignment to constant variable

const name = "John";
name = "Jane";  // ❌ Error: Assignment to constant variable

// CANNOT reassign
```

**Binding = Connection between variable name and memory location**.[^1][^5]

```
Variable Name → Points to Memory Location → Holds Value
    myVar     →      0x123ABC           →     1

const makes the → immutable (can't change where it points)
```


***

### const with Objects (Gotcha!)

```javascript
// const with object
const greet = {
  name: "Tony"
};

// ✅ CAN modify properties (same memory location)
greet.name = "Anthony";
console.log(greet.name);  // "Anthony" (works!)

// ❌ CANNOT reassign (change binding)
greet = { name: "New" };  // Error: Assignment to constant variable
```

**Why?**

- `.` operator modifies **value** at same memory location ✅
- `=` operator tries to change **binding** (where variable points) ❌

***

### const with Arrays

```javascript
const numbers = [1, 2, 3];

// ✅ CAN modify array contents
numbers.push(4);
console.log(numbers);  // [1, 2, 3, 4]

numbers[^0] = 99;
console.log(numbers);  // [99, 2, 3, 4]

// ❌ CANNOT reassign
numbers = [5, 6, 7];  // Error: Assignment to constant variable
```


***

### const is Also Block Scoped

```javascript
const greet = { name: "Tony" };

{
  const greet = { name: "Anthony", lastName: "Alicea" };
  console.log(greet);  // { name: "Anthony", lastName: "Alicea" }
}

console.log(greet);  // { name: "Tony" }
```


***

### Naming Convention (Optional)

```javascript
// Many developers use UPPERCASE for const
const API_KEY = "abc123";
const MAX_USERS = 100;

// But lowercase is also fine
const user = { name: "John" };
```


***

## 📊 Comparison Table

| Feature | var | let | const |
| :-- | :-- | :-- | :-- |
| **Scope** | Function[^1][^2] | Block[^1][^2][^3] | Block[^1][^2] |
| **Re-declare** | ✅ Yes[^2][^3] | ❌ No[^2][^3] | ❌ No[^2] |
| **Reassign** | ✅ Yes[^2][^5] | ✅ Yes[^2][^5] | ❌ No[^1][^2][^5] |
| **Global Object** | ✅ Added[^1] | ❌ Not added[^1] | ❌ Not added[^1] |
| **Hoisting** | ✅ Yes (undefined)[^2][^4] | ❌ TDZ*[^2][^4] | ❌ TDZ*[^2][^4] |
| **Best Practice** | ❌ Avoid[^1][^3] | ✅ Use when reassigning[^1][^8] | ✅ Default choice[^1][^8] |

*TDZ = Temporal Dead Zone (can't access before declaration)

***

## 🎯 Part 3: Arrow Functions

**Arrow functions = Shorthand function syntax**.[^11]

### Basic Syntax

```javascript
// Traditional function
function greeter(name) {
  return "Hello " + name;
}

// Function expression
var greeter = function(name) {
  return "Hello " + name;
};

// ✅ Arrow function (anonymous)
var greeter = (name) => {
  return "Hello " + name;
};

// ✅ Arrow function (one line - implicit return)
var greeter = (name) => "Hello " + name;

console.log(greeter("Tony"));  // "Hello Tony"
```

**Key:** Arrow functions are always **anonymous**.[^11]

***

### Arrow Function Shortcuts

```javascript
// Multiple lines - need curly braces and return
const add = (a, b) => {
  const result = a + b;
  return result;
};

// One line - NO curly braces, NO return keyword
const add = (a, b) => a + b;

// Single parameter - NO parentheses needed
const double = x => x * 2;

// No parameters - NEED empty parentheses
const greet = () => "Hello";

console.log(add(5, 3));      // 8
console.log(double(5));      // 10
console.log(greet());        // "Hello"
```


***

### Arrow Functions as Callbacks

```javascript
// Traditional callback
[1, 2, 3].map(function(num) {
  return num * 2;
});

// ✅ Arrow function callback
[1, 2, 3].map(num => num * 2);  // [2, 4, 6]

// Passing arrow function to function
function greet(greetingFn, name) {
  console.log(greetingFn(name));
}

greet(name => "Hi " + name, "Anthony");  // "Hi Anthony"
```


***

### The BIG Difference: No 'this' Keyword

**Arrow functions DON'T have `this`**![^11]

#### Problem with Regular Functions

```javascript
function Timer() {
  this.seconds = 0;
  
  setInterval(function() {
    this.seconds++;  // ❌ 'this' is undefined or global
    console.log(this.seconds);
  }, 1000);
}

new Timer();  // NaN or error
```


#### Solution: Arrow Function

```javascript
function Timer() {
  this.seconds = 0;
  
  // ✅ Arrow function - no 'this', looks up scope chain
  setInterval(() => {
    this.seconds++;  // 'this' from Timer function
    console.log(this.seconds);
  }, 1000);
}

new Timer();  // 1, 2, 3, 4...
```

**Why it works:** Arrow function doesn't have `this`, so it looks up the scope chain and finds `this` from `Timer()`.[^11]

***

### When NOT to Use Arrow Functions

#### ❌ As Object Methods

```javascript
// ❌ WRONG - Arrow function has no 'this'
const greeter = {
  name: "Tony",
  greet: () => {
    console.log(this);  // Window object (global)
    return "Hello " + this.name;  // undefined
  }
};

greeter.greet();  // "Hello undefined"

// ✅ CORRECT - Regular function has 'this'
const greeter2 = {
  name: "Tony",
  greet: function() {
    console.log(this);  // greeter2 object
    return "Hello " + this.name;
  }
};

greeter2.greet();  // "Hello Tony"
```


***

### Arrow Functions Summary

**Use arrow functions for:**

- Callbacks ✅
- Short inline functions ✅
- When you want to preserve outer `this` ✅

**Don't use for:**

- Object methods ❌
- When you need `this` keyword ❌

***

## 🎯 Part 4: Destructuring Assignment

**Destructuring = Extract values from arrays/objects into variables**.[^12][^11]

### Array Destructuring

```javascript
// Traditional way
const greetings = ["Hello", "Hi", "Hey"];
const a = greetings[^0];  // "Hello"
const b = greetings[^1];  // "Hi"

// ✅ Destructuring (cleaner!)
const [a, b] = ["Hello", "Hi", "Hey"];
console.log(a);  // "Hello"
console.log(b);  // "Hi"

// Can use let or const
let [first, second] = [1, 2, 3];
console.log(first);   // 1
console.log(second);  // 2
```


***

### Object Destructuring

```javascript
// Traditional way
const person = {
  firstName: "Tony",
  lastName: "Alicea"
};
const firstName = person.firstName;
const lastName = person.lastName;

// ✅ Destructuring (cleaner!)
const { firstName, lastName } = person;
console.log(firstName);  // "Tony"
console.log(lastName);   // "Alicea"
```

**Important:** Variable names **must match** property names!

```javascript
const person = { firstName: "Tony", lastName: "Alicea" };

// ❌ WRONG - names don't match
const { f, l } = person;
console.log(f);  // undefined
console.log(l);  // undefined

// ✅ CORRECT - names match
const { firstName, lastName } = person;
console.log(firstName);  // "Tony"
console.log(lastName);   // "Alicea"
```


***

### Skip Array Elements

```javascript
const numbers = [1, 2, 3, 4, 5];

// Skip elements with commas
const [first, , third, , fifth] = numbers;
console.log(first);   // 1
console.log(third);   // 3
console.log(fifth);   // 5
```


***

### Nested Destructuring

```javascript
const user = {
  name: "Tony",
  address: {
    city: "New York",
    state: "NY"
  }
};

// Destructure nested object
const { name, address: { city, state } } = user;
console.log(name);   // "Tony"
console.log(city);   // "New York"
console.log(state);  // "NY"
```


***

### Default Values

```javascript
// Array with defaults
const [a = 1, b = 2, c = 3] = [10, 20];
console.log(a);  // 10
console.log(b);  // 20
console.log(c);  // 3 (default)

// Object with defaults
const { name = "Guest", age = 18 } = { name: "Tony" };
console.log(name);  // "Tony"
console.log(age);   // 18 (default)
```


***

### Function Parameters

```javascript
// Destructure in function parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet({ name: "Tony", age: 30 });
// "Hello Tony, you are 30 years old"

// Array destructuring in parameters
function sum([a, b]) {
  return a + b;
}

sum([5, 3]);  // 8
```


***

### Swapping Variables

```javascript
// Traditional swap
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;

// ✅ Destructuring swap (elegant!)
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);  // 2
console.log(b);  // 1
```


***

## ✅ Interview-Ready Summary

### Key Questions

**Q: What's the difference between let, var, and const?**

```
var: Function-scoped, can re-declare, added to global
let: Block-scoped, cannot re-declare, NOT added to global
const: Block-scoped, cannot reassign, NOT added to global
```

**Q: When to use each?**

```
const: Default choice (immutable binding)
let: When value needs to change
var: Avoid in modern JavaScript (use let/const instead)
```

**Q: Can you change a const object?**

```
YES! const prevents reassignment (changing binding).
You CAN modify properties (same memory location).

const obj = { x: 1 };
obj.x = 2;     // ✅ Works
obj = {};      // ❌ Error
```

**Q: What's special about arrow functions?**

```
1. Shorter syntax
2. NO 'this' keyword (looks up scope)
3. Always anonymous
4. Implicit return for one-liners
5. Don't use as object methods
```

**Q: What is destructuring?**

```
Extract values from arrays/objects into variables.
Cleaner than accessing by index/property repeatedly.

const [a, b] = [1, 2];
const { name, age } = person;
```


***

### Best Practices

```javascript
// ✅ Modern JavaScript
const API_KEY = "abc123";  // Won't change
let counter = 0;           // Will change
const user = { name: "Tony" };  // Object (can modify properties)

// Arrow functions for callbacks
array.map(item => item * 2);

// Destructuring for cleaner code
const { name, age } = user;

// ❌ Avoid
var x = 1;  // Use let/const instead
```


***

**You're now ready for modern JavaScript interviews! 🚀**
<span style="display:none">[^10][^6][^7][^9]</span>

<div align="center">⁂</div>

[^1]: https://accreditly.io/articles/understanding-the-differences-between-let-const-and-var-in-javascript

[^2]: https://www.geeksforgeeks.org/javascript/difference-between-var-let-and-const-keywords-in-javascript/

[^3]: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

[^4]: https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/

[^5]: https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-variables-created-using-let-var-or-const

[^6]: https://www.scaler.com/topics/javascript/difference-between-var-let-and-const/

[^7]: https://www.youtube.com/watch?v=xI1RzJNd9IU

[^8]: https://stackoverflow.com/questions/41086633/in-javascript-why-should-i-usually-prefer-const-to-let

[^9]: https://www.reddit.com/r/learnjavascript/comments/tomn5z/difference_between_var_let_and_const/

[^10]: https://www.w3schools.com/js/js_let.asp

[^11]: https://javascript.info/async-await

[^12]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises

