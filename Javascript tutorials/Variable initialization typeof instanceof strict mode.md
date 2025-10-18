<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Do the same here for the following topics:

**Perfect! Here's Section 7: Odds and Ends - Simple, crisp explanations with interview insights.**

***

# 📚 Section 7: Odds and Ends - Interview Ready

## 🎯 Section 66: Initialization

**Initialization = Setting up initial values for variables**

### Basic Initialization

```javascript
// Declaration without initialization
var name;
console.log(name);  // undefined

// Declaration with initialization
var name = "John";
console.log(name);  // "John"

// Multiple declarations
var a = 1, b = 2, c = 3;
console.log(a, b, c);  // 1 2 3
```


***

### Object Initialization

```javascript
// Empty object
var person = {};

// Object literal initialization
var person = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Dynamic property initialization
var person = {};
person.name = "John";
person.age = 30;
person['city'] = "NYC";

console.log(person);  // { name: "John", age: 30, city: "NYC" }
```


***

### Array Initialization

```javascript
// Empty array
var arr = [];

// Array with initial values
var numbers = [1, 2, 3, 4, 5];

// Array with different types
var mixed = [1, "hello", true, { name: "John" }, [1, 2]];

// Pre-allocated array (empty slots)
var arr = new Array(5);
console.log(arr);  // [empty × 5]
console.log(arr.length);  // 5
```


***

### Function Initialization

```javascript
// Function declaration
function greet(name) {
  return "Hello " + name;
}

// Function expression
var greet = function(name) {
  return "Hello " + name;
};

// Arrow function (ES6)
var greet = (name) => "Hello " + name;

// IIFE - Initialize and execute immediately
(function() {
  var message = "Initialized!";
  console.log(message);
})();
```


***

### 🎯 Interview Gotcha: Hoisting and Initialization

```javascript
console.log(a);  // undefined (declared but not initialized)
var a = 5;

// Behind the scenes:
var a;  // Declaration hoisted
console.log(a);  // undefined
a = 5;  // Initialization stays in place

// let and const are NOT initialized during hoisting
console.log(b);  // ReferenceError: Cannot access before initialization
let b = 10;
```


***

### Default Initialization Pattern

```javascript
// Pattern: Initialize with default if undefined
function greet(name) {
  name = name || "Guest";  // Default to "Guest" if falsy
  return "Hello " + name;
}

console.log(greet("John"));  // "Hello John"
console.log(greet());        // "Hello Guest"

// ES6 default parameters (better)
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet("John"));  // "Hello John"
console.log(greet());        // "Hello Guest"
```


***

### Configuration Object Initialization

```javascript
// Common pattern for complex initialization
function createApp(config) {
  // Default configuration
  var defaults = {
    theme: "light",
    language: "en",
    debug: false,
    timeout: 5000
  };
  
  // Merge with user config
  var settings = Object.assign({}, defaults, config);
  
  return {
    settings: settings,
    init: function() {
      console.log("App initialized with:", this.settings);
    }
  };
}

var app = createApp({ theme: "dark", debug: true });
app.init();
// App initialized with: { theme: "dark", language: "en", debug: true, timeout: 5000 }
```


***

## 🎯 Section 67: 'typeof', 'instanceof', and Figuring Out What Something Is

**How to check what type of data you're working with**

### typeof Operator

```javascript
// Primitives
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof Symbol());     // "symbol"

// Objects
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" (arrays are objects!)
console.log(typeof null);         // "object" (JavaScript bug!)
console.log(typeof function(){}); // "function"
```


***

### 🎯 Interview Gotcha: typeof null

```javascript
console.log(typeof null);  // "object" ❌ BUG!

// Correct way to check for null
var value = null;

if (value === null) {
  console.log("It's null");
}

// Or combined check
if (value === null || value === undefined) {
  console.log("No value");
}
```


***

### Checking Arrays

```javascript
var arr = [1, 2, 3];

// ❌ WRONG: typeof
console.log(typeof arr);  // "object" (not helpful!)

// ✅ CORRECT: Array.isArray()
console.log(Array.isArray(arr));  // true

// Old way (before Array.isArray)
console.log(Object.prototype.toString.call(arr));  
// "[object Array]"
```


***

### instanceof Operator

```javascript
// instanceof checks if object was created by constructor
function Person(name) {
  this.name = name;
}

var john = new Person("John");

console.log(john instanceof Person);  // true
console.log(john instanceof Object);  // true (all objects)

var arr = [1, 2, 3];
console.log(arr instanceof Array);    // true
console.log(arr instanceof Object);   // true

var func = function() {};
console.log(func instanceof Function); // true
console.log(func instanceof Object);   // true
```


***

### 🎯 Interview Question: typeof vs instanceof

```javascript
var arr = [];

// typeof tells you the primitive type
console.log(typeof arr);  // "object"

// instanceof tells you the constructor
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

// When to use what?
// typeof: Check primitive types (number, string, boolean)
// instanceof: Check object types (Array, Date, custom constructors)
```


***

### Complete Type Checking

```javascript
function getType(value) {
  // Handle null specifically (typeof null is "object")
  if (value === null) return "null";
  
  // Handle primitives
  if (typeof value !== "object") return typeof value;
  
  // Handle arrays
  if (Array.isArray(value)) return "array";
  
  // Handle dates
  if (value instanceof Date) return "date";
  
  // Handle regex
  if (value instanceof RegExp) return "regexp";
  
  // Default to object
  return "object";
}

console.log(getType(42));         // "number"
console.log(getType("hello"));    // "string"
console.log(getType(null));       // "null"
console.log(getType(undefined));  // "undefined"
console.log(getType([]));         // "array"
console.log(getType({}));         // "object"
console.log(getType(new Date())); // "date"
console.log(getType(/test/));     // "regexp"
```


***

### Practical Example: Type Validation

```javascript
function processValue(value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  
  if (typeof value === "number") {
    return value * 2;
  }
  
  if (Array.isArray(value)) {
    return value.length;
  }
  
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  
  return "Unknown type";
}

console.log(processValue("hello"));     // "HELLO"
console.log(processValue(5));           // 10
console.log(processValue([1, 2, 3]));   // 3
console.log(processValue(new Date()));  // "10/16/2025"
```


***

## 🎯 Section 68: Strict Mode

**Strict mode = Opt-in to a stricter version of JavaScript that catches common mistakes**

### Enabling Strict Mode

```javascript
// Entire script in strict mode
"use strict";

var x = 10;
y = 20;  // Error! Must declare with var/let/const

// Function-level strict mode
function myFunc() {
  "use strict";
  // Strict mode only in this function
}

// Non-strict outside
var z = 30;  // No error
```


***

### What Strict Mode Prevents

#### 1. Undeclared Variables

```javascript
// Without strict mode
x = 10;  // Creates global variable (bad!)
console.log(window.x);  // 10

// With strict mode
"use strict";
x = 10;  // ReferenceError: x is not defined
```


#### 2. Deleting Variables

```javascript
"use strict";

var x = 10;
delete x;  // SyntaxError: Cannot delete variable in strict mode
```


#### 3. Duplicate Parameters

```javascript
// Without strict mode - second 'a' overwrites first
function add(a, a) {
  return a + a;
}
console.log(add(1, 2));  // 4 (uses second 'a' twice)

// With strict mode
"use strict";
function add(a, a) {  // SyntaxError: Duplicate parameter name
  return a + a;
}
```


#### 4. Octal Numbers

```javascript
"use strict";

var num = 010;  // SyntaxError: Octal literals not allowed
// Use 0o10 in ES6 for octal
```


#### 5. Writing to Read-Only Properties

```javascript
"use strict";

var obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });

obj.x = 100;  // TypeError: Cannot assign to read-only property
```


#### 6. Using Reserved Words

```javascript
"use strict";

var let = 10;        // SyntaxError
var private = 20;    // SyntaxError
var interface = 30;  // SyntaxError
```


***

### 'this' in Strict Mode

```javascript
// Without strict mode
function showThis() {
  console.log(this);
}
showThis();  // window/global object

// With strict mode
"use strict";
function showThis() {
  console.log(this);
}
showThis();  // undefined (not global!)

// But still works with objects
var obj = {
  method: function() {
    console.log(this);
  }
};
obj.method();  // obj (works as expected)
```


***

### 🎯 Interview Insight: When to Use Strict Mode

```javascript
// ✅ ALWAYS use strict mode in modern code
"use strict";

// ES6 modules are automatically strict
// No need to add "use strict"
export function myFunc() {
  // Already strict
}

// ES6 classes are automatically strict
class MyClass {
  constructor() {
    // Already strict
  }
}
```


***

### Benefits Summary

```javascript
"use strict";

// Prevents silent errors (throws exceptions)
// x = 10;  // Error instead of creating global

// Makes debugging easier
function test(a, a) {}  // Syntax error instead of confusion

// Prevents bad syntax
var obj = { x: 1, x: 2 };  // Error (duplicate property in strict mode)

// Secures JavaScript
delete Object.prototype;  // Error (can't delete built-ins)

// Optimizes performance (engines can optimize better)
```


***

## 🎯 Section 69: Strict Mode Reference

**Quick reference for strict mode restrictions**

### Complete List of Strict Mode Changes

```javascript
"use strict";

// 1. Variables must be declared
x = 10;  // ReferenceError

// 2. No deleting variables, functions, or arguments
var x = 10;
delete x;  // SyntaxError

// 3. No duplicate parameter names
function sum(a, a, c) {}  // SyntaxError

// 4. No octal syntax
var x = 010;  // SyntaxError

// 5. No writing to read-only properties
var obj = {};
Object.defineProperty(obj, "x", { value: 1, writable: false });
obj.x = 2;  // TypeError

// 6. No deleting undeletable properties
delete Object.prototype;  // TypeError

// 7. eval doesn't create variables in surrounding scope
eval("var x = 10");
console.log(x);  // ReferenceError (x is not defined)

// 8. 'this' is undefined in functions (not global)
function test() {
  console.log(this);  // undefined
}
test();

// 9. No 'with' statement
with (Math) {  // SyntaxError
  x = cos(2);
}

// 10. eval and arguments can't be identifiers
var eval = 10;       // SyntaxError
var arguments = 20;  // SyntaxError

// 11. arguments doesn't track parameter changes
function test(a) {
  a = 10;
  console.log(arguments[^0]);  // Still original value
}

// 12. No arguments.callee
function test() {
  console.log(arguments.callee);  // TypeError
}

// 13. Reserved words become keywords
var let = 10;        // SyntaxError
var static = 20;     // SyntaxError
var interface = 30;  // SyntaxError
```


***

### Comparison Table

| Feature | Non-Strict | Strict Mode |
| :-- | :-- | :-- |
| Undeclared variables | Creates global | ReferenceError |
| `this` in functions | Global object | undefined |
| Duplicate params | Allowed | SyntaxError |
| Octal literals (010) | Allowed | SyntaxError |
| Delete variables | Silent fail | SyntaxError |
| `with` statement | Allowed | SyntaxError |
| `eval` scope | Leaks to outer | Contained |
| Reserved words | Sometimes ok | Always error |


***

### 🎯 Interview Questions

**Q1: What does "use strict" do?**

```javascript
"use strict";
// Enables stricter JavaScript parsing and error handling
// Throws errors for unsafe/confusing code
// Makes debugging easier
```

**Q2: How to enable strict mode?**

```javascript
// Entire file
"use strict";

// Just one function
function myFunc() {
  "use strict";
  // strict only here
}

// ES6 modules/classes - automatic
export function test() {} // already strict
class MyClass {} // already strict
```

**Q3: What happens to 'this' in strict mode?**

```javascript
"use strict";

function test() {
  console.log(this);
}

test();           // undefined (not global)
test.call(null);  // null (not global)
test.call(undefined); // undefined (not global)

// But in objects, still works
var obj = { test: test };
obj.test();  // obj
```


***

## ✅ Quick Reference Summary

### Initialization

- **Declaration:** `var x;` (undefined)
- **Initialization:** `var x = 5;` (has value)
- **Hoisting:** Declarations hoisted, initializations stay
- **Default values:** `var x = x || default;` or parameter defaults


### typeof / instanceof

- **typeof:** Returns string of primitive type
- **typeof null:** "object" (bug!)
- **typeof array:** "object" (not helpful)
- **Array.isArray():** Correct way for arrays
- **instanceof:** Checks constructor (works with custom types)


### Strict Mode

- **Enable:** `"use strict";` at top
- **Prevents:** Undeclared variables, duplicate params, octal
- **'this' behavior:** undefined in functions (not global)
- **Automatic:** ES6 modules and classes
- **Benefits:** Catches errors, better debugging, performance

***

### 🎯 Interview Tips

**Most Common Questions:**

1. "What's the typeof null bug?" → "object" instead of "null"
2. "How do you check for an array?" → `Array.isArray()`
3. "What's the difference between typeof and instanceof?" → Primitive types vs constructor check
4. "What does strict mode do?" → Catches common mistakes, throws errors
5. "How does 'this' change in strict mode?" → undefined instead of global

**Pro Tips:**

- Always use strict mode in new code
- Use `Array.isArray()` not `typeof` for arrays
- Remember `typeof null === "object"` is a bug
- `instanceof` checks the prototype chain

***

**You're now ready for JavaScript interviews! 🚀**
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: image.jpg

