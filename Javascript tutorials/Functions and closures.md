<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Do the same for this also:

**Perfect! Here's a beginner-friendly tutorial for these advanced JavaScript topics.**

***

# 📚 Advanced JavaScript - Function Patterns \& Functional Programming

## 🎯 Section 49: Function Factories

**Function Factory = A function that creates and returns other functions**

### Basic Function Factory

```javascript
// Factory that creates greeting functions
function makeGreeting(language) {
  return function(firstName, lastName) {
    if (language === 'en') {
      return 'Hello ' + firstName + ' ' + lastName;
    } else if (language === 'es') {
      return 'Hola ' + firstName + ' ' + lastName;
    }
  };
}

// Create specialized greeting functions
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

console.log(greetEnglish('John', 'Doe'));   // "Hello John Doe"
console.log(greetSpanish('Juan', 'Garcia')); // "Hola Juan Garcia"
```


### Why Use Function Factories?

```javascript
// Without factory - repetitive code
function multiplyBy2(number) {
  return number * 2;
}

function multiplyBy3(number) {
  return number * 3;
}

function multiplyBy5(number) {
  return number * 5;
}

// With factory - DRY (Don't Repeat Yourself)
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

var double = makeMultiplier(2);
var triple = makeMultiplier(3);
var quintuple = makeMultiplier(5);

console.log(double(10));      // 20
console.log(triple(10));      // 30
console.log(quintuple(10));   // 50
```


### Practical Example: Validation Factory

```javascript
function makeValidator(minLength) {
  return function(input) {
    if (input.length < minLength) {
      return 'Input must be at least ' + minLength + ' characters';
    }
    return true;
  };
}

var validateUsername = makeValidator(5);
var validatePassword = makeValidator(8);

console.log(validateUsername('joe'));      // "Input must be at least 5 characters"
console.log(validateUsername('john123'));  // true
console.log(validatePassword('pass'));     // "Input must be at least 8 characters"
console.log(validatePassword('password123')); // true
```


### Complex Factory with Configuration

```javascript
function createLogger(prefix, showTime) {
  return function(message) {
    var output = prefix + ': ' + message;
    
    if (showTime) {
      output = '[' + new Date().toLocaleTimeString() + '] ' + output;
    }
    
    console.log(output);
  };
}

var errorLogger = createLogger('ERROR', true);
var infoLogger = createLogger('INFO', false);
var debugLogger = createLogger('DEBUG', true);

errorLogger('Connection failed');
// Output: [2:30:45 PM] ERROR: Connection failed

infoLogger('User logged in');
// Output: INFO: User logged in

debugLogger('Variable x = 42');
// Output: [2:30:45 PM] DEBUG: Variable x = 42
```


### Real-World: HTTP Request Factory

```javascript
function createApiCaller(baseUrl, headers) {
  return function(endpoint, method, data) {
    var url = baseUrl + endpoint;
    
    console.log('Making ' + method + ' request to ' + url);
    console.log('Headers:', headers);
    console.log('Data:', data);
    
    // In real code, this would use fetch() or XMLHttpRequest
    return {
      url: url,
      method: method,
      headers: headers,
      data: data
    };
  };
}

var callUserAPI = createApiCaller('https://api.example.com/users', {
  'Authorization': 'Bearer token123',
  'Content-Type': 'application/json'
});

var callProductAPI = createApiCaller('https://api.example.com/products', {
  'Authorization': 'Bearer token456',
  'Content-Type': 'application/json'
});

callUserAPI('/123', 'GET');
callProductAPI('/new', 'POST', { name: 'Widget', price: 9.99 });
```


***

## 🎯 Section 50: Closures and Callbacks

**Callback = A function passed to another function to be executed later**

### Simple Callback Example

```javascript
function processData(data, callback) {
  console.log('Processing: ' + data);
  
  // Do some processing...
  var result = data.toUpperCase();
  
  // Call the callback with result
  callback(result);
}

// Pass a function as callback
processData('hello', function(result) {
  console.log('Result: ' + result);
});

// Output:
// Processing: hello
// Result: HELLO
```


### Callbacks with Closures

```javascript
function createProcessor(prefix) {
  // Closure remembers 'prefix'
  
  return function processWithCallback(data, callback) {
    var result = prefix + ' ' + data;
    callback(result);
  };
}

var orderProcessor = createProcessor('ORDER');
var userProcessor = createProcessor('USER');

orderProcessor('12345', function(result) {
  console.log(result);  // "ORDER 12345"
});

userProcessor('john_doe', function(result) {
  console.log(result);  // "USER john_doe"
});
```


### Real-World: Array Methods with Callbacks

```javascript
var numbers = [1, 2, 3, 4, 5];

// forEach - executes callback for each element
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

// map - creates new array using callback
var doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - creates new array with elements that pass test
var evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens);  // [2, 4]

// find - returns first element that passes test
var found = numbers.find(function(num) {
  return num > 3;
});
console.log(found);  // 4
```


### Asynchronous Callbacks

```javascript
function fetchData(callback) {
  console.log('Fetching data...');
  
  // Simulate async operation with setTimeout
  setTimeout(function() {
    var data = { name: 'John', age: 30 };
    callback(data);
  }, 2000);
}

console.log('Start');

fetchData(function(data) {
  console.log('Received:', data);
});

console.log('End');

// Output:
// Start
// Fetching data...
// End
// [2 seconds later]
// Received: { name: 'John', age: 30 }
```


### Callback Hell (The Problem)

```javascript
// ❌ Callback hell - hard to read and maintain
getData(function(data) {
  processData(data, function(processed) {
    saveData(processed, function(result) {
      sendEmail(result, function(emailResult) {
        console.log('All done!');
      });
    });
  });
});

// ✅ Better: Named functions
function handleData(data) {
  processData(data, handleProcessed);
}

function handleProcessed(processed) {
  saveData(processed, handleSaved);
}

function handleSaved(result) {
  sendEmail(result, handleEmail);
}

function handleEmail(emailResult) {
  console.log('All done!');
}

getData(handleData);
```


***

## 🎯 Section 51: call(), apply(), and bind()

**These methods control what `this` refers to inside a function**

### Understanding the Problem

```javascript
var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.getFullName());  // "John Doe" ✅

var logName = person.getFullName;
console.log(logName());  // undefined undefined ❌
// 'this' is now the global object, not 'person'
```


### call() - Invoke function with specific `this`

```javascript
var person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet(greeting, punctuation) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName + punctuation;
}

// call(thisArg, arg1, arg2, ...)
var result = greet.call(person, 'Hello', '!');
console.log(result);  // "Hello John Doe!"

var person2 = {
  firstName: 'Jane',
  lastName: 'Smith'
};

var result2 = greet.call(person2, 'Hi', '.');
console.log(result2);  // "Hi Jane Smith."
```


### apply() - Same as call(), but arguments in array

```javascript
var person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet(greeting, punctuation) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName + punctuation;
}

// apply(thisArg, [arg1, arg2, ...])
var result = greet.apply(person, ['Hello', '!']);
console.log(result);  // "Hello John Doe!"

// Useful with Math functions
var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);
console.log(max);  // 7

// Modern alternative: spread operator
var max2 = Math.max(...numbers);
console.log(max2);  // 7
```


### bind() - Create new function with fixed `this`

```javascript
var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// bind() returns a NEW function with 'this' permanently set
var logName = person.getFullName.bind(person);
console.log(logName());  // "John Doe" ✅

// Can also bind arguments (partial application)
function multiply(a, b) {
  return a * b;
}

var double = multiply.bind(null, 2);  // 'a' is always 2
console.log(double(5));   // 10
console.log(double(10));  // 20

var triple = multiply.bind(null, 3);  // 'a' is always 3
console.log(triple(5));   // 15
```


### Comparing call, apply, bind

```javascript
var person = {
  name: 'John'
};

function greet(greeting) {
  return greeting + ' ' + this.name;
}

// call - invokes immediately, arguments separate
console.log(greet.call(person, 'Hello'));  // "Hello John"

// apply - invokes immediately, arguments in array
console.log(greet.apply(person, ['Hello']));  // "Hello John"

// bind - returns new function, doesn't invoke
var greetJohn = greet.bind(person);
console.log(greetJohn('Hello'));  // "Hello John"
console.log(greetJohn('Hi'));     // "Hi John"
```


### Real-World: Function Borrowing

```javascript
var person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

var person2 = {
  firstName: 'Jane',
  lastName: 'Smith'
};

// Borrow person1's method for person2
console.log(person1.getFullName.call(person2));
// "Jane Smith"

// Array-like object example
function logArguments() {
  // arguments is not a real array, but we can borrow array methods
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}

logArguments(1, 2, 3);  // [1, 2, 3]
```


### Practical: Event Handlers

```javascript
var app = {
  name: 'MyApp',
  version: '1.0',
  
  handleClick: function() {
    console.log(this.name + ' v' + this.version + ' clicked!');
  }
};

// ❌ Wrong - 'this' will be the button element
// button.addEventListener('click', app.handleClick);

// ✅ Right - bind 'this' to app object
button.addEventListener('click', app.handleClick.bind(app));
```


***

## 🎯 Section 52: Functional Programming

**Functional Programming = Writing code using pure functions and avoiding side effects**

### What is a Pure Function?

```javascript
// ✅ Pure function - same input always gives same output
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));  // Always 5
console.log(add(2, 3));  // Always 5

// ❌ Impure function - depends on external state
var total = 0;
function addToTotal(num) {
  total += num;  // Modifies external variable
  return total;
}

console.log(addToTotal(5));  // 5
console.log(addToTotal(5));  // 10 (different result!)
```


### First-Class Functions

```javascript
// Functions can be assigned to variables
var greet = function(name) {
  return 'Hello ' + name;
};

// Functions can be passed as arguments
function executeFunc(fn, value) {
  return fn(value);
}

console.log(executeFunc(greet, 'John'));  // "Hello John"

// Functions can be returned
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var double = createMultiplier(2);
console.log(double(5));  // 10
```


### Higher-Order Functions

```javascript
// Higher-order function: takes function as argument OR returns function

// Example 1: Takes function as argument
function repeatAction(n, action) {
  for (var i = 0; i < n; i++) {
    action(i);
  }
}

repeatAction(3, function(i) {
  console.log('Iteration ' + i);
});
// Output: Iteration 0, Iteration 1, Iteration 2

// Example 2: Returns function
function createGreeter(greeting) {
  return function(name) {
    return greeting + ' ' + name;
  };
}

var sayHello = createGreeter('Hello');
var sayHi = createGreeter('Hi');

console.log(sayHello('John'));  // "Hello John"
console.log(sayHi('Jane'));     // "Hi Jane"
```


### Immutability

```javascript
// ❌ Mutating (bad in functional programming)
var numbers = [1, 2, 3];
numbers.push(4);  // Modifies original array
console.log(numbers);  // [1, 2, 3, 4]

// ✅ Immutable approach (good)
var numbers = [1, 2, 3];
var newNumbers = numbers.concat(4);  // Creates new array
console.log(numbers);     // [1, 2, 3] (unchanged)
console.log(newNumbers);  // [1, 2, 3, 4]

// Or with spread operator
var newNumbers2 = [...numbers, 4];
console.log(newNumbers2);  // [1, 2, 3, 4]

// Object immutability
var person = { name: 'John', age: 30 };

// ❌ Mutation
person.age = 31;

// ✅ Immutable
var olderPerson = { ...person, age: 31 };
console.log(person);       // { name: 'John', age: 30 }
console.log(olderPerson);  // { name: 'John', age: 31 }
```


### Composition

```javascript
// Combine simple functions to create complex behavior

function double(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

// Manual composition
var result = square(addOne(double(3)));
console.log(result);  // ((3 * 2) + 1)² = 49

// Composition helper
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

var doubleAndAddOne = compose(addOne, double);
console.log(doubleAndAddOne(3));  // 7

var doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3));  // 36
```


***

## 🎯 Section 53: Functional Programming - Part 2

### Map, Filter, Reduce Pattern

```javascript
var numbers = [1, 2, 3, 4, 5];

// map - transform each element
var doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep elements that pass test
var evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens);  // [2, 4]

// reduce - combine all elements into single value
var sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);
console.log(sum);  // 15

// Chaining them together
var result = numbers
  .filter(function(num) { return num % 2 === 0; })  // Get evens: [2, 4]
  .map(function(num) { return num * 3; })           // Triple: [6, 12]
  .reduce(function(total, num) { return total + num; }, 0);  // Sum: 18

console.log(result);  // 18
```


### Practical Example: Data Processing

```javascript
var users = [
  { name: 'John', age: 30, active: true },
  { name: 'Jane', age: 25, active: false },
  { name: 'Bob', age: 35, active: true },
  { name: 'Alice', age: 28, active: true }
];

// Get names of active users over 27
var result = users
  .filter(function(user) {
    return user.active && user.age > 27;
  })
  .map(function(user) {
    return user.name;
  });

console.log(result);  // ["John", "Bob", "Alice"]

// Calculate average age of active users
var activeUsers = users.filter(function(user) {
  return user.active;
});

var totalAge = activeUsers.reduce(function(sum, user) {
  return sum + user.age;
}, 0);

var averageAge = totalAge / activeUsers.length;
console.log(averageAge);  // 31
```


### Currying

```javascript
// Regular function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));  // 12

// Curried version - returns functions
function multiplyCurried(a) {
  return function(b) {
    return a * b;
  };
}

var multiplyBy3 = multiplyCurried(3);
console.log(multiplyBy3(4));  // 12
console.log(multiplyBy3(5));  // 15

var multiplyBy5 = multiplyCurried(5);
console.log(multiplyBy5(4));  // 20

// Practical example
function createUrl(protocol) {
  return function(domain) {
    return function(path) {
      return protocol + '://' + domain + '/' + path;
    };
  };
}

var httpsUrl = createUrl('https');
var apiUrl = httpsUrl('api.example.com');

console.log(apiUrl('users'));     // "https://api.example.com/users"
console.log(apiUrl('products'));  // "https://api.example.com/products"
```


### Partial Application

```javascript
// Create specialized versions of functions

function greet(greeting, name) {
  return greeting + ' ' + name;
}

// Manual partial application
function greetHello(name) {
  return greet('Hello', name);
}

console.log(greetHello('John'));  // "Hello John"

// Using bind for partial application
var greetHello2 = greet.bind(null, 'Hello');
console.log(greetHello2('Jane'));  // "Hello Jane"

// More complex example
function calculatePrice(price, tax, discount) {
  return price + (price * tax) - discount;
}

// Create specialized function with fixed tax rate
var calculateWithTax = calculatePrice.bind(null, undefined, 0.08);
// Doesn't work well - need custom helper

// Better: Custom partial helper
function partial(fn) {
  var fixedArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var remainingArgs = Array.prototype.slice.call(arguments);
    return fn.apply(null, fixedArgs.concat(remainingArgs));
  };
}

var calculateWith8PercentTax = partial(calculatePrice, 100, 0.08);
console.log(calculateWith8PercentTax(10));  // 98
```


### Functional Utilities

```javascript
// Utility: Compose functions
function compose() {
  var functions = Array.prototype.slice.call(arguments);
  
  return function(x) {
    return functions.reduceRight(function(acc, fn) {
      return fn(acc);
    }, x);
  };
}

function addTwo(x) { return x + 2; }
function multiplyByThree(x) { return x * 3; }
function subtractOne(x) { return x - 1; }

var calculate = compose(subtractOne, multiplyByThree, addTwo);
console.log(calculate(5));  // ((5 + 2) * 3) - 1 = 20

// Utility: Pipe (opposite of compose)
function pipe() {
  var functions = Array.prototype.slice.call(arguments);
  
  return function(x) {
    return functions.reduce(function(acc, fn) {
      return fn(acc);
    }, x);
  };
}

var calculate2 = pipe(addTwo, multiplyByThree, subtractOne);
console.log(calculate2(5));  // ((5 + 2) * 3) - 1 = 20
```


***

## ✅ Quick Reference Summary

### Function Factories

- **Pattern:** Function that returns functions
- **Benefit:** Create specialized functions from templates
- **Example:** `makeMultiplier(n)` returns function that multiplies by n


### Callbacks \& Closures

- **Callback:** Function passed as argument, executed later
- **Closure:** Function remembers outer variables
- **Use:** Async operations, array methods, event handlers


### call, apply, bind

- **call:** `fn.call(thisArg, arg1, arg2)` - invoke with specific `this`
- **apply:** `fn.apply(thisArg, [args])` - same as call, array args
- **bind:** `fn.bind(thisArg)` - returns new function with fixed `this`


### Functional Programming

- **Pure functions:** Same input → same output, no side effects
- **Higher-order:** Functions that take/return functions
- **Immutability:** Don't modify data, create new copies
- **Composition:** Combine simple functions


### Common Patterns

- **map:** Transform array elements
- **filter:** Select elements that pass test
- **reduce:** Combine elements into single value
- **Currying:** Transform `f(a,b)` to `f(a)(b)`
- **Partial:** Pre-fill some arguments

***

**Does this help clarify these advanced concepts? Want more examples on any specific topic?**
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: image.jpg

