<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Similar to above, provide me with an explanation of the following topics with even more simpler code examples. Also include any tricky insights which might be useful for interviews:

**Perfect! Here's Section 6 with super simple examples and interview-ready insights.**

***

# 📚 Section 6: Building Objects - Interview Ready Guide

## 🎯 Section 58: Function Constructors, 'new', and History

**Function Constructor = A function used to create objects (old way before ES6 classes)**

### Basic Function Constructor

```javascript
// Regular function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hi, I'm " + this.name);
  };
}

// Use with 'new' keyword
var john = new Person("John", 30);
var jane = new Person("Jane", 25);

console.log(john.name);  // "John"
john.greet();            // "Hi, I'm John"
console.log(jane.name);  // "Jane"
```

**Convention:** Function constructors start with capital letter (Person, not person).

***

### What 'new' Does (Magic Behind the Scenes)

```javascript
function Person(name) {
  this.name = name;
}

var john = new Person("John");

// When you use 'new', JavaScript does this:
// 1. Creates empty object: var this = {};
// 2. Links it to Person.prototype
// 3. Executes Person function with 'this' as the new object
// 4. Returns the object (implicit return)
```

**Step-by-step visualization:**

```javascript
function Person(name) {
  // Step 1: var this = {};  (JavaScript does this)
  // Step 2: this.__proto__ = Person.prototype;
  
  this.name = name;  // Step 3: Your code runs
  
  // Step 4: return this;  (JavaScript does this)
}
```


***

### 🎯 Interview Gotcha: Forgetting 'new'

```javascript
function Person(name) {
  this.name = name;
}

// ✅ Correct - with 'new'
var john = new Person("John");
console.log(john.name);  // "John"

// ❌ WRONG - without 'new'
var jane = Person("Jane");
console.log(jane);        // undefined
console.log(window.name); // "Jane" (polluted global!)
```

**Why?** Without `new`, `this` refers to global object (window)!

**Safe constructor pattern:**

```javascript
function Person(name) {
  // Check if called with 'new'
  if (!(this instanceof Person)) {
    return new Person(name);
  }
  
  this.name = name;
}

// Both work now
var john = new Person("John");
var jane = Person("Jane");  // Auto-corrects!
```


***

### 🎯 Interview Question: What does 'new' return?

```javascript
function Test() {
  this.value = 42;
}

var obj1 = new Test();
console.log(obj1.value);  // 42

// But if constructor explicitly returns an object:
function Test2() {
  this.value = 42;
  return { value: 99 };  // Explicit return
}

var obj2 = new Test2();
console.log(obj2.value);  // 99 (explicit return wins!)

// But if you return a primitive:
function Test3() {
  this.value = 42;
  return 99;  // Primitive ignored
}

var obj3 = new Test3();
console.log(obj3.value);  // 42 (primitive returns ignored)
```

**Rule:** `new` returns the object, unless constructor explicitly returns a different object.

***

## 🎯 Section 59: Function Constructors and '.prototype'

**Every function has a `.prototype` property (not to be confused with `__proto__`)**

### The Problem with Methods in Constructor

```javascript
function Person(name) {
  this.name = name;
  this.greet = function() {  // ❌ BAD! Each instance gets a copy
    console.log("Hi, I'm " + this.name);
  };
}

var john = new Person("John");
var jane = new Person("Jane");

// Two separate function copies!
console.log(john.greet === jane.greet);  // false
```

**Memory waste:** 1000 Person objects = 1000 copies of greet function!

***

### Solution: Use .prototype

```javascript
function Person(name) {
  this.name = name;  // Instance property
}

// Add method to prototype (shared by all)
Person.prototype.greet = function() {
  console.log("Hi, I'm " + this.name);
};

var john = new Person("John");
var jane = new Person("Jane");

// Same function reference!
console.log(john.greet === jane.greet);  // true ✅

john.greet();  // "Hi, I'm John"
jane.greet();  // "Hi, I'm Jane"
```

**Memory efficient:** 1000 Person objects = 1 copy of greet function!

***

### Understanding .prototype vs __proto__

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hi");
};

var john = new Person("John");

// Person.prototype = Object where shared methods live
console.log(Person.prototype);  // { greet: function... }

// john.__proto__ = Points to Person.prototype
console.log(john.__proto__ === Person.prototype);  // true

// Prototype chain:
// john → john.__proto__ (Person.prototype) → Object.prototype → null
```

**Visual:**

```
Person (function)
  └─ Person.prototype (object)
       └─ greet: function

john (object)
  ├─ name: "John"
  └─ __proto__ → Person.prototype
```


***

### 🎯 Interview Gotcha: Overwriting .prototype

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hi");
};

var john = new Person("John");

// ❌ DANGER: Overwrite prototype
Person.prototype = {
  wave: function() {
    console.log("Waving");
  }
};

var jane = new Person("Jane");

john.greet();  // "Hi" (still works - old prototype)
// john.wave();  // Error! john points to old prototype

jane.wave();   // "Waving" (new prototype)
// jane.greet(); // Error! jane points to new prototype
```

**Lesson:** Existing objects keep reference to old prototype!

***

## 🎯 Section 60: 'new' and Functions - Dangerous Aside

### The Danger: 'new' Changes Function Behavior

```javascript
function logStuff() {
  console.log("Logging");
}

// Normal call
logStuff();  // "Logging"

// With 'new' - returns empty object!
var obj = new logStuff();
console.log(obj);  // {} (not what you expected!)
```

**Any function can be called with `new`**, even if it wasn't meant to be a constructor.

***

### Real Danger: Built-in Functions

```javascript
// Number function
var num = Number("42");
console.log(num);  // 42 (primitive)
console.log(typeof num);  // "number"

// With 'new' - returns object!
var numObj = new Number("42");
console.log(numObj);  // Number {42} (object)
console.log(typeof numObj);  // "object"

// Comparison gotcha
console.log(num == numObj);   // true (loose equality)
console.log(num === numObj);  // false (different types!)
```


***

### 🎯 Interview Question: Primitive vs Object Wrapper

```javascript
// Primitive
var str = "hello";
console.log(typeof str);  // "string"
console.log(str.length);  // 5 (temporary wrapper)

// Object wrapper
var strObj = new String("hello");
console.log(typeof strObj);  // "object"
console.log(strObj.length);  // 5

// The trap
if (str) { console.log("True"); }     // "True" (truthy)
if (strObj) { console.log("True"); }  // "True" (all objects truthy!)

var empty = "";
var emptyObj = new String("");

if (empty) { console.log("True"); }     // Nothing (falsy)
if (emptyObj) { console.log("True"); } // "True" (object is truthy!)
```

**Rule:** Never use `new` with String, Number, Boolean constructors. Use them as functions.

***

## 🎯 Section 61: Built-In Function Constructors

**JavaScript provides built-in constructors for primitives.**

### String Constructor

```javascript
// Don't use new String()
var str1 = "hello";              // ✅ Primitive
var str2 = String("hello");      // ✅ Primitive (converts)
var str3 = new String("hello");  // ❌ Object wrapper

console.log(typeof str1);  // "string"
console.log(typeof str2);  // "string"
console.log(typeof str3);  // "object"

// Moment of confusion
console.log(str1 === str2);  // true
console.log(str1 === str3);  // false (different types!)

// Adding methods to String.prototype
String.prototype.isLongWord = function() {
  return this.length > 7;
};

console.log("hello".isLongWord());      // false
console.log("verylongword".isLongWord()); // true
```


***

### Number Constructor

```javascript
// Don't use new Number()
var num1 = 42;
var num2 = new Number(42);

console.log(num1 == num2);   // true (coercion)
console.log(num1 === num2);  // false (different types)

// Useful Number methods
console.log((3.14159).toFixed(2));  // "3.14"
console.log(Number.isInteger(42));  // true
console.log(Number.isInteger(3.14)); // false

// Adding to Number.prototype
Number.prototype.isEven = function() {
  return this % 2 === 0;
};

console.log((4).isEven());   // true
console.log((5).isEven());   // false
```


***

### Array Constructor

```javascript
// Different ways to create arrays
var arr1 = [1, 2, 3];              // ✅ Literal (best)
var arr2 = new Array(1, 2, 3);     // ✅ Works, but why?
var arr3 = new Array(3);           // ⚠️ GOTCHA!

console.log(arr1);  // [1, 2, 3]
console.log(arr2);  // [1, 2, 3]
console.log(arr3);  // [empty × 3] (3 empty slots!)

// Useful Array.prototype methods
Array.prototype.first = function() {
  return this[^0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

var nums = [10, 20, 30];
console.log(nums.first());  // 10
console.log(nums.last());   // 30
```


***

### 🎯 Interview Insight: Extending Built-ins

```javascript
// Add method to ALL arrays
Array.prototype.shuffle = function() {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

var cards = [1, 2, 3, 4, 5];
cards.shuffle();
console.log(cards);  // Shuffled order
```

**Warning:** Modifying built-in prototypes can cause conflicts! Only do it if you understand the risks.

***

## 🎯 Section 62: Built-In Function Constructors - Dangerous Aside

### The Danger: Object Wrappers

```javascript
var a = 3;
var b = new Number(3);

console.log(a == b);   // true
console.log(a === b);  // false

// Math operations
console.log(a + 5);    // 8
console.log(b + 5);    // 8 (auto-unwrapped)

// But typeof reveals the truth
console.log(typeof a);  // "number"
console.log(typeof b);  // "object"
```


***

### Boolean Wrapper Trap

```javascript
var myTrue = true;
var myFalse = false;
var myFalseObj = new Boolean(false);

if (myTrue) { console.log("True"); }      // "True"
if (myFalse) { console.log("True"); }     // Nothing
if (myFalseObj) { console.log("True"); }  // "True" ❌ TRAP!

// Why? ALL objects are truthy!
console.log(Boolean(myFalseObj));  // true (object is truthy)
console.log(myFalseObj.valueOf()); // false (underlying value)
```

**Golden Rule:** Never use `new` with String, Number, Boolean!

***

### When Wrappers Happen Automatically

```javascript
// Primitive
var str = "hello";

// Accessing properties creates temporary wrapper
console.log(str.toUpperCase());  // Behind scenes: new String(str).toUpperCase()

// You can't add properties to primitives
str.customProp = "test";
console.log(str.customProp);  // undefined (wrapper created and destroyed)

// But with object wrapper
var strObj = new String("hello");
strObj.customProp = "test";
console.log(strObj.customProp);  // "test" (persists)
```


***

## 🎯 Section 63: Arrays and for..in

### The Problem with for..in on Arrays

```javascript
var arr = ['a', 'b', 'c'];

// ❌ BAD: for..in on arrays
for (var index in arr) {
  console.log(index + ": " + arr[index]);
}
// Output: 0: a, 1: b, 2: c

// Looks fine, but...
Array.prototype.customMethod = function() {};

for (var index in arr) {
  console.log(index); 
}
// Output: 0, 1, 2, customMethod ❌ Inherited properties included!
```


***

### ✅ Correct Ways to Loop Arrays

```javascript
var arr = ['a', 'b', 'c'];

// Method 1: Classic for loop
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Method 2: forEach
arr.forEach(function(item, index) {
  console.log(index + ": " + item);
});

// Method 3: for..of (ES6)
for (var item of arr) {
  console.log(item);
}
```


***

### When to Use for..in

```javascript
// ✅ GOOD: for..in on objects (not arrays)
var person = {
  name: "John",
  age: 30,
  city: "NYC"
};

for (var key in person) {
  if (person.hasOwnProperty(key)) {  // Filter inherited
    console.log(key + ": " + person[key]);
  }
}
// Output: name: John, age: 30, city: NYC
```

**Rule:** Use `for..in` for objects, NOT for arrays.

***

## 🎯 Section 64: Object.create and Pure Prototypal Inheritance

**The cleanest way to create objects with prototypes.**

### Object.create Explained

```javascript
// Create a prototype object
var personProto = {
  greet: function() {
    console.log("Hi, I'm " + this.name);
  },
  
  getInfo: function() {
    return this.name + " (" + this.age + ")";
  }
};

// Create object with this prototype
var john = Object.create(personProto);
john.name = "John";
john.age = 30;

john.greet();  // "Hi, I'm John"
console.log(john.getInfo());  // "John (30)"

// Prototype chain
console.log(john.__proto__ === personProto);  // true
```


***

### Compared to Function Constructors

```javascript
// Old way: Function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hi, I'm " + this.name);
};

var john1 = new Person("John", 30);

// New way: Object.create
var personProto = {
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

var john2 = Object.create(personProto);
john2.name = "John";
john2.age = 30;

// Both work the same!
john1.greet();  // "Hi, I'm John"
john2.greet();  // "Hi, I'm John"
```


***

### Pure Prototypal Pattern

```javascript
// Pattern: Start with prototype, create instances
var animal = {
  type: "Animal",
  eat: function() {
    console.log(this.name + " is eating");
  }
};

var dog = Object.create(animal);
dog.name = "Buddy";
dog.type = "Dog";
dog.bark = function() {
  console.log("Woof!");
};

var cat = Object.create(animal);
cat.name = "Whiskers";
cat.type = "Cat";
cat.meow = function() {
  console.log("Meow!");
};

dog.eat();   // "Buddy is eating"
dog.bark();  // "Woof!"
cat.eat();   // "Whiskers is eating"
cat.meow();  // "Meow!"
```


***

### 🎯 Interview Question: Polyfill for Object.create

```javascript
// Object.create didn't exist in old browsers
// Polyfill (simplified version)
if (!Object.create) {
  Object.create = function(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
}

// How it works:
// 1. Create dummy constructor
// 2. Set its prototype to desired object
// 3. Create instance using 'new'
// 4. Instance's __proto__ points to desired object
```


***

## 🎯 Section 65: ES6 and Classes

**Modern syntax for creating objects (syntactic sugar over prototypes).**

### ES6 Class Syntax

```javascript
// ES6 class (modern way)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
  
  getInfo() {
    return `${this.name} (${this.age})`;
  }
}

var john = new Person("John", 30);
john.greet();  // "Hi, I'm John"
```


***

### Class vs Function Constructor

```javascript
// Function constructor (old way)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hi, I'm " + this.name);
};

// ES6 class (new way)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// BOTH CREATE THE SAME THING!
// Classes are just syntactic sugar over prototypes
```


***

### Class Inheritance

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Child class (extends)
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log("Woof!");
  }
}

var buddy = new Dog("Buddy", "Golden Retriever");
buddy.eat();   // "Buddy is eating" (inherited)
buddy.bark();  // "Woof!" (own method)
console.log(buddy.breed);  // "Golden Retriever"
```


***

### Static Methods

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

// Call on class itself, not instances
console.log(MathHelper.add(5, 3));       // 8
console.log(MathHelper.multiply(4, 5));  // 20

// Can't call on instances
var helper = new MathHelper();
// helper.add(5, 3);  // Error!
```


***

### Getters and Setters

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Getter (access like property)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  // Setter (assign like property)
  set fullName(name) {
    var parts = name.split(' ');
    this.firstName = parts[^0];
    this.lastName = parts[^1];
  }
}

var john = new Person("John", "Doe");

// Use like properties, not methods
console.log(john.fullName);  // "John Doe" (getter)

john.fullName = "Jane Smith";  // (setter)
console.log(john.firstName);   // "Jane"
console.log(john.lastName);    // "Smith"
```


***

### 🎯 Interview Insight: Class Hoisting

```javascript
// Function constructors are hoisted
var person1 = new Person1("John");  // ✅ Works

function Person1(name) {
  this.name = name;
}

// Classes are NOT hoisted
// var person2 = new Person2("John");  // ❌ Error!

class Person2 {
  constructor(name) {
    this.name = name;
  }
}

// Must declare class before using
var person2 = new Person2("John");  // ✅ Works
```


***

## ✅ Quick Reference - Interview Cheat Sheet

### Function Constructors

- **Use capital letter:** `Person`, not `person`
- **Always use `new`:** Without it, pollutes global scope
- **Methods in prototype:** Memory efficient
- **`new` does:** Creates object, links prototype, returns object


### Prototype vs __proto__

- **`Constructor.prototype`:** Object with shared methods
- **`instance.__proto__`:** Points to constructor's prototype
- **Chain:** instance → Constructor.prototype → Object.prototype → null


### Built-in Constructors

- **Never use `new`:** With String, Number, Boolean
- **Wrappers are objects:** Even `new Boolean(false)` is truthy
- **Use primitives:** Simpler and faster


### Arrays

- **Don't use `for..in`:** Includes inherited properties
- **Use:** `for`, `forEach`, `for..of`
- **Array constructor gotcha:** `new Array(3)` creates 3 empty slots


### Object.create

- **Pure prototypal:** No constructors needed
- **Clean syntax:** Direct prototype linking
- **Polyfill:** Uses dummy constructor trick


### ES6 Classes

- **Syntactic sugar:** Still uses prototypes underneath
- **Not hoisted:** Must declare before use
- **`extends`:** Inheritance keyword
- **`super`:** Call parent constructor/methods
- **Static methods:** On class, not instances

***

**Key Interview Questions:**

1. What does `new` do? (4 steps)
2. Difference between `.prototype` and `.__proto__`?
3. Why not use `new String()`?
4. What's wrong with `for..in` on arrays?
5. How does `Object.create` work?
6. Are ES6 classes true classes? (No, syntactic sugar)

**Ready for any JavaScript interview! 🚀**

<div align="center">⁂</div>

[^1]: image.jpg

