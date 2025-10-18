<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Same here: We've talked about features that JavaScript has and

features that JavaScript doesn't have.

We talked about features that are coming that not every browser will support yet.

And yet people are so inclined to use these new features or

add on these features that JavaScript doesn't have

that we have something out there called Transpiled Languages.

This is Typescript, ES6, and Transpiled Languages.

So big word alert!

To transpile means to convert the syntax of one programming language to another.

And in this case,

we're talking about languages that don't ever actually run anywhere.

There's no engine that runs them.

Instead, they're processed by a transpiler and

all that means is it generates JavaScript.

So you write in one language and

what you actually put out there is just pure JavaScript

that runs in a JavaScript engine just like we've talked about this whole course.

The first one that's already quite popular and

will continue to be is called TypeScript and it's provided by Microsoft.

You can go to typescriptlang.org.

If you go to the play, and I'll provide link to these in the next lecture,

you can see that I can already, for example, create a class.

And then that's transpiled, or converted, to normal JavaScript,

which I would then include in my application to actually run.

But since there's a transpiler happening between these two,

it can also have error messages and certain requirements.

The biggest thing about TypeScript is that it provides types for your variables.

So if you really, really wish JavaScript had types,

strongly type instead of dynamically type that is, that you could say what

type a variable should be, you can do it in TypeScript.

It also has things like class and some other features that are coming in ES6,

so you can write your entire application in TypeScript,

transpile it to normal JavaScript and it will work on a whole bunch of browsers.

So, that's TypeScript.

Go ahead and take a look and mess around.

The other one that's out here on GitHub is called Traceur.

T-R-A-C-E-U-R.

I also provide links in the next lecture to this.

And it lets you write ES6 today.

In other words, the features of the upcoming version of JavaScript but

it transpiles that into normal standard ES5 JavaScript, that is what's there now.

I also provide a link to another in browser demo

where we can write for example, a class.

[SOUND] With a constructor.

[SOUND] And set up just like we would

if I had access to these latest

version and some Greek function.

And we can see that it might have errors or

it might not but I have methods that

are being converted to methods on the fly.

I have a constructor that's being converted to a constructor function.

So I'm using this new feature that's coming in JavaScript right now but

before I push out my code,

it gets converted to this JavaScript which is what's actually run.

So this is another transpiled language that, for example,

if you have a project starting right now, a big JavaScript project, and

you know it's gonna be a couple years long you might wanna consider using Traceur.

You might wanna start writing in the next version of JavaScript.

And for now it'll just convert down to the current version of JavaScript and

then in a couple years you can stop using Traceur and

just directly send your code out to production.

A lot of people are doing this, a lot of teams for

long term JavaScript projects right now.

So, transpiled languages.

But remember, you shouldn't use a transpiled language like Traceur or

JavaScript transpiler type script without understanding

the code that it's creating for you otherwise you'll get in a lot of trouble.

Alright, let's move on.

**Perfect! Here's a simple explanation of TypeScript, ES6, and Transpilers with code examples for interview prep.**

***

# 🎯 Transpilers: TypeScript, ES6 \& Modern JavaScript

## 📚 What is a Transpiler?

**Transpile = Transform + Compile**[^2][^5]

**Definition:** Convert code from one programming language to another **at the same level** (source-to-source).[^7][^8][^2]

```
JavaScript (Modern) → Transpiler → JavaScript (Old)
       ES6/TypeScript              →          ES5
```

**Not compilation:** Compiler converts high-level → low-level (Java → bytecode)[^8]

**Transpiling:** Converts high-level → high-level (ES6 → ES5)[^2][^8]

***

## 🎯 Why Do We Need Transpilers?

### The Problem

```javascript
// Modern JavaScript (ES6+)
const add = (a, b) => a + b;
class Person {
  constructor(name) {
    this.name = name;
  }
}

// ❌ Old browsers (IE11, old Firefox) don't understand this!
// They throw syntax errors
```


### The Solution: Transpilers

```javascript
// Write modern code → Transpiler converts → Old browsers work!

// You write (ES6):
const add = (a, b) => a + b;

// Transpiler outputs (ES5):
var add = function(a, b) {
  return a + b;
};
```

**Benefit:** Use modern features today, support old browsers tomorrow.[^4][^5][^2]

***

## 🎯 Popular Transpilers

### 1. Babel (Most Popular)

**What it does:** Converts ES6+ → ES5[^1][^4][^2]

**Example:**

```javascript
// You write (ES6)
const items = [{name: 'item1', price: 10}, {name: 'item2', price: 20}];
const displayItems = items.map(({ name, price }) => `${name}: $${price}`);

// Babel transpiles to (ES5)
"use strict";
var items = [{ name: 'item1', price: 10 }, { name: 'item2', price: 20 }];
var displayItems = items.map(function (item) {
  var name = item.name;
  var price = item.price;
  return name + ": $" + price;
});
```

**Features transpiled:**

- Arrow functions → Regular functions
- `const`/`let` → `var`
- Template literals → String concatenation
- Destructuring → Regular assignment
- Classes → Function constructors

***

### 2. TypeScript (Microsoft)

**What it adds:** **Static types** + Modern features → JavaScript[^2]

**Example:**

```typescript
// You write (TypeScript)
class Person {
  name: string;  // Type annotation
  age: number;   // Type annotation
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const john: Person = new Person("John", 30);

// TypeScript transpiles to (JavaScript)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, I'm " + this.name;
    };
    return Person;
}());
var john = new Person("John", 30);
```

**Key Benefit:** Catches errors at **compile-time** instead of **runtime**.[^2]

```typescript
// TypeScript catches this error BEFORE running
let age: number = 30;
age = "thirty";  // ❌ Error: Type 'string' is not assignable to type 'number'
```


***

### 3. Traceur (Google)

**What it does:** ES6 → ES5 (older, less popular than Babel now)[^2]

**Example:**

```javascript
// You write (ES6)
class Book {
  constructor(title) {
    this.title = title;
  }
  
  getTitle() {
    return this.title;
  }
}

// Traceur transpiles to (ES5)
var Book = function() {
  function Book(title) {
    this.title = title;
  }
  
  Book.prototype.getTitle = function() {
    return this.title;
  };
  
  return Book;
}();
```


***

## 🎯 Real-World Examples

### Example 1: Arrow Functions

```javascript
// Modern (ES6)
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Transpiled (ES5)
var numbers = [1, 2, 3];
var doubled = numbers.map(function(n) {
  return n * 2;
});
```


***

### Example 2: Classes

```javascript
// Modern (ES6)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Transpiled (ES5)
var Animal = (function() {
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound");
  };
  
  return Animal;
})();
```


***

### Example 3: Template Literals

```javascript
// Modern (ES6)
const name = "John";
const age = 30;
const message = `Hello, I'm ${name} and I'm ${age} years old`;

// Transpiled (ES5)
var name = "John";
var age = 30;
var message = "Hello, I'm " + name + " and I'm " + age + " years old";
```


***

### Example 4: Destructuring

```javascript
// Modern (ES6)
const person = { name: "John", age: 30 };
const { name, age } = person;

// Transpiled (ES5)
var person = { name: "John", age: 30 };
var name = person.name;
var age = person.age;
```


***

### Example 5: Let \& Const

```javascript
// Modern (ES6)
let x = 10;
const y = 20;

if (true) {
  let x = 30;  // Block scoped
  console.log(x);  // 30
}
console.log(x);  // 10

// Transpiled (ES5) - Babel renames variables for scoping
var x = 10;
var y = 20;

if (true) {
  var _x = 30;  // Different variable name
  console.log(_x);  // 30
}
console.log(x);  // 10
```


***

## 🎯 TypeScript Benefits

### Static Type Checking

```typescript
// Define interfaces
interface User {
  name: string;
  age: number;
  email?: string;  // Optional property
}

// Function with typed parameters
function greetUser(user: User): string {
  return `Hello ${user.name}, you are ${user.age} years old`;
}

// ✅ Works
greetUser({ name: "John", age: 30 });

// ❌ TypeScript error at compile time
greetUser({ name: "John", age: "thirty" });  
// Error: Type 'string' is not assignable to type 'number'

// ❌ TypeScript error at compile time
greetUser({ name: "John" });  
// Error: Property 'age' is missing
```


***

### Type Inference

```typescript
// TypeScript infers types automatically
let age = 30;  // Inferred as 'number'
age = "thirty";  // ❌ Error!

const items = [1, 2, 3];  // Inferred as 'number[]'
items.push("4");  // ❌ Error!

function add(a: number, b: number) {
  return a + b;  // Return type inferred as 'number'
}

const result = add(5, 3);  // result is inferred as 'number'
```


***

### Enums

```typescript
// TypeScript enum
enum Color {
  Red,
  Green,
  Blue
}

let myColor: Color = Color.Red;

// Transpiles to JavaScript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

var myColor = Color.Red;
```


***

## 🎯 How Transpilers Work (Simple)

### 3-Step Process[^2]

```
1. Parse (Source Code → Tokens → AST)
   ↓
2. Transform (Modify AST)
   ↓
3. Generate (AST → Target Code)
```

**Example:**

```javascript
// 1. PARSE: "const add = (a, b) => a + b;"
//    Tokens: ['const', 'add', '=', '(', 'a', ',', 'b', ')', '=>', 'a', '+', 'b']
//    AST: { type: 'ArrowFunction', params: ['a', 'b'], body: ... }

// 2. TRANSFORM: Convert arrow function to regular function in AST
//    AST: { type: 'FunctionExpression', params: ['a', 'b'], body: ... }

// 3. GENERATE: Output JavaScript code
//    "var add = function(a, b) { return a + b; };"
```


***

## 🎯 When to Use Transpilers

### Use Babel When:

- Want to use ES6+ features today
- Need to support old browsers
- Project already uses modern JavaScript


### Use TypeScript When:

- Large codebase with many developers
- Want compile-time error checking
- Need better IDE autocomplete
- Want type safety


### Use Traceur When:

- Want ES6 features (older alternative to Babel)
- Experimental projects

***

## ⚠️ Important Warning

**Don't use transpilers blindly!** You must understand the JavaScript they generate.[^4][^2]

```typescript
// TypeScript
class Person {
  constructor(public name: string) {}
}

// You MUST understand this generated JavaScript!
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
```

**Why?**

- Debugging transpiled code is harder
- Performance implications
- Must understand JavaScript fundamentals

***

## 🎯 Comparison Table

| Feature | Babel | TypeScript | Traceur |
| :-- | :-- | :-- | :-- |
| **Main Purpose** | ES6+ → ES5[^2][^4] | Types + Modern JS[^2] | ES6 → ES5[^2] |
| **Type Checking** | ❌ No | ✅ Yes | ❌ No |
| **Popularity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ (older) |
| **Learning Curve** | Easy | Medium | Easy |
| **IDE Support** | Good | Excellent | Good |
| **Compile Time** | Fast | Slower (type checking) | Fast |


***

## 🎯 Setup Examples

### Babel Setup

```bash
# Install
npm install --save-dev @babel/core @babel/cli @babel/preset-env

# babel.config.json
{
  "presets": ["@babel/preset-env"]
}

# Transpile
npx babel src --out-dir dist
```


### TypeScript Setup

```bash
# Install
npm install --save-dev typescript

# tsconfig.json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "strict": true
  }
}

# Transpile
npx tsc
```


***

## ✅ Interview-Ready Summary

**Q: What is a transpiler?**

```
A tool that converts code from one programming language 
to another at the same abstraction level. 
Example: ES6 → ES5, TypeScript → JavaScript
```

**Q: Why use transpilers?**

```
1. Use modern features today
2. Support old browsers
3. Add features JavaScript doesn't have (types)
4. Write cleaner, more maintainable code
```

**Q: What's the difference between transpiling and compiling?**

```
Transpiling: High-level → High-level (ES6 → ES5)
Compiling: High-level → Low-level (Java → Bytecode)
```

**Q: Popular transpilers?**

```
1. Babel - ES6+ to ES5
2. TypeScript - Types + Modern features
3. Traceur - ES6 to ES5 (older)
```

**Q: Should you use transpilers without understanding JavaScript?**

```
❌ NO! You must understand the generated JavaScript
because:
- Debugging is harder
- Performance implications
- Interview questions about fundamentals
```


***

## 🚀 Practical Interview Example

**Interviewer:** "Can you explain this transpiled code?"

```javascript
// Modern
const greet = (name) => `Hello ${name}`;

// Transpiled
var greet = function(name) {
  return "Hello " + name;
};
```

**Your Answer:**
"The arrow function was converted to a regular function expression. The `const` became `var`, and the template literal was converted to string concatenation. This makes it compatible with ES5 browsers that don't support arrow functions or template literals."

***

**You're now ready to discuss transpilers in interviews! 🎉**
<span style="display:none">[^3][^6]</span>

<div align="center">⁂</div>

[^1]: https://javascript.info/polyfills

[^2]: https://daily.dev/blog/transpilers-how-they-work

[^3]: https://stackoverflow.com/questions/48414941/what-is-transpiler-and-what-is-exactly-work-of-transpiler

[^4]: https://webreference.com/javascript/advanced/transpilers/

[^5]: https://www.geeksforgeeks.org/javascript/javascript-polyfilling-transpiling/

[^6]: https://dev.to/arikaturika/what-is-a-transpiler-with-examples-ice

[^7]: https://en.wikipedia.org/wiki/Source-to-source_compiler

[^8]: https://devopedia.org/transpiler

