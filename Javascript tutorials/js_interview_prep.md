# JavaScript Interview Prep - Core Concepts

## 1. FOUNDATIONAL CONCEPTS

### Syntax Parser
**What it is:** A program that reads your code and determines what it does and if its grammar is valid.

**Why it matters:** Understanding that there's a layer between your code and execution helps you understand how JavaScript interprets what you write.

```javascript
// The syntax parser reads this and validates it
function hello() {
  var a = 'hello world';
}
```

---

### Lexical Environment
**What it is:** WHERE something sits physically in the code you write. "Lexical" means related to words/grammar.

**Key Point:** In JavaScript, WHERE you write code matters!

```javascript
function outer() {
  var name = 'outer';
  
  function inner() {
    // inner() is LEXICALLY inside outer()
    console.log(name); // Can access 'name' because of lexical position
  }
  
  inner();
}
```

---

### Execution Context
**What it is:** A wrapper that manages the code that is currently running.

**Key Point:** There are many lexical environments, but the execution context determines which one is currently running.

---

## 2. NAME/VALUE PAIRS & OBJECTS

### Name/Value Pair
**Definition:** A name that maps to a unique value. The name may be defined multiple times but can only have ONE value in any given context.

```javascript
var address = '15 Floral Park'; // Simple name/value pair
```

### Objects in JavaScript
**Definition:** A collection of name/value pairs.

```javascript
var address = {
  street: 'main',
  number: '312',
  apt: {
    floor: 3,
    number: 301
  }
};

// Access values
console.log(address.street); // 'main'
console.log(address.apt.floor); // 3
```

---

## 3. GLOBAL EXECUTION CONTEXT

### What Gets Created
When JavaScript runs, it creates a **Global Execution Context** with:
1. **Global Object** (`window` in browsers, `global` in Node.js)
2. **`this`** (which equals the global object at global level)
3. **Outer Environment** (null for global context)

```javascript
// These are attached to the global object
var a = 'Hello World';

function b() {
  console.log('Function b');
}

console.log(window.a); // 'Hello World' (in browser)
console.log(this.a);   // 'Hello World' (in global scope)
```

**Remember:** "Global" means "Not inside a Function"

---

## 4. EXECUTION CONTEXT PHASES

### Phase 1: CREATION PHASE
What happens:
1. Global object is created
2. `this` is set up
3. Outer environment is linked
4. **HOISTING occurs** - memory space is allocated for variables and functions

**Critical Difference:**
- **Variables:** Only memory space is created, value set to `undefined`
- **Functions:** Entire function is placed in memory

```javascript
console.log(a); // undefined (not an error!)
console.log(b); // [Function: b]

var a = 'Hello';

function b() {
  console.log('Hi');
}
```

**Why this works:**
```javascript
// What JavaScript sees in creation phase:
var a = undefined;
function b() {
  console.log('Hi');
}

// Then in execution phase:
console.log(a); // undefined
console.log(b); // function exists
a = 'Hello';
```

### Phase 2: EXECUTION PHASE
- Code runs line by line
- Variable assignments happen
- Functions are invoked

```javascript
var a; // Already in memory from creation phase
console.log(a); // undefined
a = 'Hello World'; // Assignment happens NOW
console.log(a); // 'Hello World'
```

---

## 5. UNDEFINED vs NOT DEFINED

### undefined
**What it is:** A special JavaScript value meaning "variable exists but has no value yet"

```javascript
var a;
console.log(a); // undefined

// NEVER DO THIS:
var b = undefined; // Bad practice! Confusing during debugging
```

**Interview Tip:** `undefined` means JavaScript set it, not you. Don't manually set variables to `undefined`.

### Not Defined (ReferenceError)
```javascript
console.log(c); // ReferenceError: c is not defined
// Variable 'c' doesn't exist at all
```

---

## 6. SINGLE THREADED, SYNCHRONOUS EXECUTION

**Single Threaded:** One command executes at a time.

**Synchronous:** Executes in order, one line after another.

```javascript
console.log('First');
console.log('Second');
console.log('Third');

// Output is always:
// First
// Second
// Third
```

---

## 7. FUNCTION INVOCATION & EXECUTION STACK

**Invocation:** Running a function using parentheses `()`

```javascript
function b() {
  console.log('Called b');
}

function a() {
  b(); // Invocation
}

a(); // Invocation
```

### Execution Stack (Call Stack)

```javascript
function b() {
  console.log('b executed');
}

function a() {
  b();
  console.log('a executed');
}

a();
console.log('global executed');
```

**Execution Order:**
1. Global Execution Context created
2. `a()` invoked → new execution context created and pushed to stack
3. `b()` invoked → new execution context created and pushed to stack
4. `b()` finishes → popped off stack
5. `a()` finishes → popped off stack
6. Global code continues

**Output:**
```
b executed
a executed
global executed
```

---

## 8. VARIABLE ENVIRONMENTS

**Variable Environment:** Where variables live and how they relate to each other in memory.

**Key Point:** Each execution context has its own variable environment!

```javascript
function b() {
  var myVar;
  console.log(myVar); // undefined
}

function a() {
  var myVar = 2;
  console.log(myVar); // 2
  b();
}

var myVar = 1;
a();
console.log(myVar); // 1
```

**What's happening:**
- Global Execution Context: `myVar = 1`
- `a()` Execution Context: `myVar = 2` (different variable!)
- `b()` Execution Context: `myVar = undefined` (yet another different variable!)

---

## 9. SCOPE CHAIN (Critical Interview Topic!)

**Scope Chain:** How JavaScript finds variables by looking at outer environments.

### Example 1: Function Outside
```javascript
function b() {
  console.log(myVar); // Where does it find myVar?
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// Output: 1
// Why? b() is LEXICALLY in global scope, so its outer environment is global
```

### Example 2: Function Inside (Nested)
```javascript
function a() {
  var myVar = 2;
  
  function b() {
    console.log(myVar); // Where does it find myVar?
  }
  
  b();
}

var myVar = 1;
a();

// Output: 2
// Why? b() is LEXICALLY inside a(), so its outer environment is a()
```

### Example 3: Deep Chain
```javascript
function a() {
  function b() {
    console.log(myVar); // myVar not in b
  }
  b();
}

var myVar = 1;
a();

// Output: 1
// Scope chain: b() → looks in b (not found) → looks in a() (not found) → looks in global (found!)
```

**Interview Key:** The scope chain is determined by LEXICAL (physical) position, NOT by where the function is called!

---

## 10. SCOPE, ES6, and `let`

### `var` vs `let`

**`var`:** Function-scoped
```javascript
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside if block)
}
```

**`let`:** Block-scoped
```javascript
function test() {
  if (true) {
    let x = 10;
  }
  console.log(x); // ReferenceError: x is not defined
}
```

### Temporal Dead Zone
```javascript
console.log(a); // undefined (var is hoisted)
console.log(b); // ReferenceError (let is in temporal dead zone)

var a = 1;
let b = 2;
```

**Key Point:** `let` is hoisted but you can't access it until the declaration line runs.

### Loop Example (Classic Interview Question!)
```javascript
// With var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (same variable i)

// With let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 (new i created each iteration)
```

---

## 11. ASYNCHRONOUS CALLBACKS & EVENT LOOP

**Asynchronous:** More than one thing happening at a time (sort of).

### Key Components
1. **Call Stack** (Execution Stack)
2. **Event Queue**
3. **Browser APIs** (setTimeout, HTTP requests, DOM events)

### How It Works
```javascript
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {} // Blocking code
  console.log('finished function');
}

function clickHandler() {
  console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
```

**Output Order:**
1. `finished function` (after 3 seconds)
2. `finished execution`
3. `click event` (only after call stack is empty)

**Why?**
- Event queue is only processed when the call stack is EMPTY
- JavaScript processes the call stack synchronously
- Even if you click during `waitThreeSeconds()`, the click event waits

### SetTimeout Example
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout (even with 0ms delay!)
```

---

## 12. TYPES IN JAVASCRIPT

### Dynamic Typing
**Key Point:** You don't tell JavaScript what type a variable is. The engine figures it out.

```javascript
var isNew = true;  // Boolean
isNew = 'yup';     // Now it's a String
isNew = 4;         // Now it's a Number
// All valid!
```

### 6 Primitive Types

1. **undefined** - Lack of existence (set by JavaScript)
```javascript
var a;
console.log(a); // undefined
```

2. **null** - Lack of existence (set by you)
```javascript
var b = null; // You explicitly set this
```

3. **Boolean** - true or false
```javascript
var c = true;
var d = false;
```

4. **Number** - Always a floating point number
```javascript
var e = 3;      // Still a float internally
var f = 3.14;   // Float
// No separate int, float, decimal types!
```

5. **String** - Sequence of characters
```javascript
var g = 'Hello';
var h = "World";
```

6. **Symbol** - New in ES6 (unique identifiers)
```javascript
var i = Symbol('description');
```

**Everything else is an Object!**

---

## QUICK REFERENCE: Common Interview Traps

### Trap 1: Hoisting
```javascript
console.log(typeof myVar); // undefined (not error)
console.log(typeof myFunc); // function

var myVar = 5;
function myFunc() {}
```

### Trap 2: Scope Chain
```javascript
var x = 10;

function outer() {
  var x = 20;
  
  function inner() {
    console.log(x); // 20, not 10!
  }
  
  return inner;
}

var fn = outer();
fn(); // 20
```

### Trap 3: Event Loop
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3, 3, 3 (not 0, 1, 2)
```

### Trap 4: `this` in Global
```javascript
var a = 'Hello';
console.log(window.a); // 'Hello'
console.log(this.a);   // 'Hello' (in global scope)
```

---

---

## 13. PROTOTYPAL INHERITANCE (Critical Interview Topic!)

### What is a Prototype?

Every object in JavaScript has a special hidden property called `[[Prototype]]` (accessed via `__proto__`). This is a reference to another object.

**Key Concept:** When you try to access a property on an object and it doesn't exist, JavaScript automatically looks at the object's prototype.

```javascript
const obj = {};

// We never defined toString, so where does it come from?
console.log(obj.toString()); // "[object Object]"

// It comes from obj's prototype!
console.log(obj.__proto__ === Object.prototype); // true
```

**The Prototype Chain:**
```
obj 
  ↓ __proto__
Object.prototype 
  ↓ __proto__
null
```

---

### Creating Objects and Prototypes

#### Method 1: Object Literal
```javascript
const person = {
  name: 'John',
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet(); // "Hi, I am John"

// Check prototype
console.log(person.__proto__ === Object.prototype); // true
```

#### Method 2: Constructor Function
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (NOT inside constructor!)
Person.prototype.greet = function() {
  console.log('Hi, I am ' + this.name);
};

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // "Hi, I am John"
jane.greet(); // "Hi, I am Jane"

// Both share the SAME greet function
console.log(john.greet === jane.greet); // true
```

**Why use prototype for methods?**
- **Memory Efficiency:** Method is created ONCE and shared
- Without prototype, each instance would have its own copy

```javascript
// BAD - Creates new function for each instance
function Person(name) {
  this.name = name;
  this.greet = function() { // DON'T DO THIS
    console.log('Hi');
  };
}

// GOOD - One function shared by all instances
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() { // DO THIS
  console.log('Hi');
};
```

---

### The `new` Keyword - What Actually Happens?

When you use `new Constructor()`, JavaScript does 4 things:

```javascript
function Person(name) {
  // 1. New empty object is created: {}
  // 2. this = that new object
  // 3. New object's __proto__ = Person.prototype
  this.name = name;
  // 4. return this (implicit)
}

const john = new Person('John');
```

**Manual equivalent:**
```javascript
function Person(name) {
  this.name = name;
}

// What 'new' does behind the scenes:
const john = {};
john.__proto__ = Person.prototype;
Person.call(john, 'John');
```

---

### `prototype` vs `__proto__` (VERY CONFUSING!)

**This is the #1 source of confusion!**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hi!');
};

const john = new Person('John');
```

**Two different things:**

1. **`Person.prototype`** - An object that will become the `__proto__` of instances
   - Property on the CONSTRUCTOR function
   - Used as a template for new instances

2. **`john.__proto__`** - Reference to the prototype object
   - Property on the INSTANCE
   - Points to `Person.prototype`

```javascript
console.log(john.__proto__ === Person.prototype); // true

// john doesn't have greet directly
console.log(john.hasOwnProperty('greet')); // false

// But can access it via prototype chain
john.greet(); // "Hi!"
```

**Visual:**
```
Person (constructor function)
  ↓ .prototype property
Person.prototype (object with greet method)
  ↑ __proto__ points here
john (instance)
```

---

### The Prototype Chain in Action

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hi, I am ' + this.name);
};

const john = new Person('John');

john.greet(); // How does JavaScript find greet()?
```

**Lookup Process:**
1. Check `john` object itself - no `greet` property
2. Check `john.__proto__` (which is `Person.prototype`) - FOUND!
3. Execute the function

```javascript
// Adding to the chain
john.toString(); // Where is toString()?

// Lookup Process:
// 1. john object - not found
// 2. john.__proto__ (Person.prototype) - not found
// 3. Person.prototype.__proto__ (Object.prototype) - FOUND!
```

**Full Chain:**
```
john
  ↓ __proto__
Person.prototype
  ↓ __proto__
Object.prototype
  ↓ __proto__
null
```

---

### Creating Inheritance Hierarchies

#### Classic Pattern: Inheriting from Another Constructor

```javascript
// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + ' is eating');
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up prototype chain (CRITICAL STEP!)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix constructor reference

// Add Dog-specific methods
Dog.prototype.bark = function() {
  console.log(this.name + ' says woof!');
};

const rex = new Dog('Rex', 'German Shepherd');

rex.eat();  // "Rex is eating" (from Animal)
rex.bark(); // "Rex says woof!" (from Dog)

console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
```

**Prototype Chain:**
```
rex
  ↓ __proto__
Dog.prototype
  ↓ __proto__
Animal.prototype
  ↓ __proto__
Object.prototype
  ↓ __proto__
null
```

**Why `Object.create()`?**
```javascript
// WRONG - This doesn't create proper chain
Dog.prototype = Animal.prototype; // Both point to SAME object!

// WRONG - This calls Animal constructor immediately
Dog.prototype = new Animal(); // Creates unwanted instance

// RIGHT - Creates new object with Animal.prototype as __proto__
Dog.prototype = Object.create(Animal.prototype);
```

---

### ES6 Classes (Syntactic Sugar)

ES6 classes do the SAME thing as constructor functions, just cleaner syntax!

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(this.name + ' is eating');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls Animal constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + ' says woof!');
  }
}

const rex = new Dog('Rex', 'German Shepherd');
rex.eat();  // "Rex is eating"
rex.bark(); // "Rex says woof!"
```

**Under the hood, this is IDENTICAL to the constructor function pattern above!**

```javascript
// Proof:
console.log(typeof Dog); // "function"
console.log(rex.__proto__ === Dog.prototype); // true
```

---

### Object.create() - Direct Prototype Linking

Another way to create objects with specific prototypes:

```javascript
const personProto = {
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }
};

// Create object with personProto as prototype
const john = Object.create(personProto);
john.name = 'John';
john.age = 30;

john.greet(); // "Hi, I am John"

console.log(john.__proto__ === personProto); // true
```

**Comparison:**
```javascript
// Method 1: Constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() { /*...*/ };
const john1 = new Person('John');

// Method 2: Object.create
const personProto = {
  greet: function() { /*...*/ }
};
const john2 = Object.create(personProto);
john2.name = 'John';

// Both achieve the same prototype chain!
```

---

### Common Prototype Methods

#### hasOwnProperty()
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {};

const john = new Person('John');

console.log(john.hasOwnProperty('name'));  // true (own property)
console.log(john.hasOwnProperty('greet')); // false (inherited)
```

#### instanceof
```javascript
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
console.log(john instanceof Array);  // false
```

#### Object.getPrototypeOf()
```javascript
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
```

---

### Interview Traps & Gotchas

#### Trap 1: Modifying Prototype After Creation
```javascript
function Person(name) {
  this.name = name;
}

const john = new Person('John');

// Add method AFTER instance creation
Person.prototype.greet = function() {
  console.log('Hi!');
};

john.greet(); // "Hi!" - Still works! (prototype chain is live)
```

#### Trap 2: Shadowing Prototype Properties
```javascript
function Person() {}
Person.prototype.name = 'Default';

const john = new Person();
console.log(john.name); // "Default" (from prototype)

john.name = 'John'; // Creates OWN property, shadows prototype
console.log(john.name); // "John" (own property)

delete john.name;
console.log(john.name); // "Default" (prototype property visible again)
```

#### Trap 3: Array and Function Prototypes
```javascript
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true

arr.push(4); // push comes from Array.prototype

const func = function() {};
console.log(func.__proto__ === Function.prototype); // true
```

#### Trap 4: Prototype Pollution
```javascript
// DANGEROUS - Affects ALL objects!
Object.prototype.hack = function() {
  console.log('Hacked!');
};

const obj = {};
obj.hack(); // "Hacked!" - Even empty objects have it!
```

---

### Why Prototypal Inheritance Matters

**Performance:**
- Methods stored once in prototype, not duplicated
- Saves memory with many instances

**Flexibility:**
- Can modify prototypes at runtime
- Can create complex inheritance hierarchies
- Objects can inherit from any object (not just classes)

**JavaScript's Identity:**
- Unlike class-based languages (Java, C++), JavaScript uses prototypes
- Classes in ES6 are just syntactic sugar over prototypes
- Understanding prototypes = understanding JavaScript deeply

---

### Quick Reference: Prototype Patterns

```javascript
// Pattern 1: Constructor Function + Prototype
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() { /*...*/ };
const p1 = new Person('John');

// Pattern 2: Object.create
const proto = { greet: function() { /*...*/ } };
const p2 = Object.create(proto);
p2.name = 'John';

// Pattern 3: ES6 Class
class Person {
  constructor(name) { this.name = name; }
  greet() { /*...*/ }
}
const p3 = new Person('John');

// All create the same prototype chain!
```

---

## Summary Checklist

✅ Understand Creation vs Execution Phase
✅ Know what hoisting really is
✅ Grasp scope chain and outer environments
✅ Differentiate undefined vs null vs not defined
✅ Understand how the event loop works
✅ Know the difference between var, let, const
✅ Understand single-threaded, synchronous execution
✅ Know the 6 primitive types
✅ Understand prototypes and prototype chain
✅ Know `prototype` vs `__proto__` difference
✅ Understand constructor functions and `new` keyword
✅ Can create inheritance hierarchies
✅ Understand ES6 classes are syntactic sugar

---

**Next Steps:**
1. Test yourself on the tricky concepts
2. Practice explaining these concepts out loud
3. Do mock interview questions