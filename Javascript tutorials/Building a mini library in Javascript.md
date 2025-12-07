

# 🎯 Building Your Own JavaScript Library - Interview Guide

## 📚 What We're Building: "Greetr"

**Requirements:**

- Generate greetings in multiple languages (English, Spanish)
- Support formal and informal greetings
- Chainable methods (jQuery-style)
- Easy-to-use API without `new` keyword
- jQuery integration support
- Reusable across projects

***

## 🏗️ Step 1: IIFE Structure (Privacy \& Safety)

**Why?** Prevent global namespace pollution, keep code private.[^3][^5]

```javascript
// Wrap everything in IIFE
(function(global, $) {
  
  // All your code here is PRIVATE
  
  // Expose only what you want at the end
  
})(window, jQuery);  // Pass global objects
```

**Interview Insight:** Always start with IIFE for library code.[^5][^3]

***

## 🏗️ Step 2: The Core Function (jQuery-Style, No 'new')

```javascript
(function(global, $) {
  
  // Main function - users call this
  var Greetr = function(firstName, lastName, language) {
    // Don't use 'new' - return new object from internal constructor
    return new Greetr.init(firstName, lastName, language);
  };
  
  // The actual constructor (hidden from users)
  Greetr.init = function(firstName, lastName, language) {
    var self = this;  // Safe reference
    
    // Set properties with defaults
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';  // Default English
  };
  
  // Make prototype accessible
  Greetr.prototype = {};
  
  // Link init's prototype to Greetr's prototype
  Greetr.init.prototype = Greetr.prototype;
  
  // Expose globally
  global.Greetr = global.G$ = Greetr;
  
})(window, jQuery);
```

**Key Pattern:**

```javascript
// User calls this:
var g = G$('John', 'Doe');  // No 'new' needed!

// Behind the scenes:
// 1. G$ function called
// 2. Returns new Greetr.init()
// 3. Prototype shared with Greetr.prototype
```


***

## 🏗️ Step 3: Private Data (Closures)

```javascript
(function(global, $) {
  
  // PRIVATE - not accessible outside
  var supportedLangs = ['en', 'es'];
  
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
  
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  };
  
  // Main function
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  
  // ... rest of code
  
})(window, jQuery);
```

**Why Private?** Users can't accidentally change `greetings.en = "Hey"` and break your library.[^3][^5]

***

## 🏗️ Step 4: Prototype Methods (Shared, Memory Efficient)

```javascript
Greetr.prototype = {
  
  // Simple property
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  
  // Validation
  validate: function() {
    if (supportedLangs.indexOf(this.language) === -1) {
      throw "Invalid language";
    }
  },
  
  // Get greeting
  greeting: function() {
    return greetings[this.language] + ' ' + this.firstName;
  },
  
  // Get formal greeting
  formalGreeting: function() {
    return formalGreetings[this.language] + ', ' + this.fullName();
  },
  
  // Chainable method - logs to console
  greet: function(formal) {
    var msg;
    
    if (formal) {
      msg = this.formalGreeting();
    } else {
      msg = this.greeting();
    }
    
    console.log(msg);
    return this;  // ← ENABLE CHAINING!
  },
  
  // Chainable - log user action
  log: function() {
    if (console) {
      console.log(logMessages[this.language] + ': ' + this.fullName());
    }
    return this;  // ← ENABLE CHAINING!
  },
  
  // Chainable - change language
  setLang: function(lang) {
    this.language = lang;
    this.validate();  // Make sure it's valid
    return this;  // ← ENABLE CHAINING!
  },
  
  // jQuery support
  HTMLGreeting: function(selector, formal) {
    if (!$) {
      throw 'jQuery not loaded';
    }
    
    if (!selector) {
      throw 'Missing jQuery selector';
    }
    
    var msg;
    if (formal) {
      msg = this.formalGreeting();
    } else {
      msg = this.greeting();
    }
    
    // Update HTML element
    $(selector).html(msg);
    
    return this;  // ← ENABLE CHAINING!
  }
};
```

**Interview Question: "Why return `this`?"**

**Answer:** Enables method chaining - each method returns the object so you can call another method immediately.

```javascript
G$('John', 'Doe')
  .greet()              // Returns G$ object
  .setLang('es')        // Returns G$ object
  .greet(true)          // Returns G$ object
  .log();               // Returns G$ object
```


***

## 🏗️ Complete Mini-Library

```javascript
;(function(global, $) {
  
  // PRIVATE DATA
  var supportedLangs = ['en', 'es'];
  
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
  
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  // MAIN FUNCTION
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  
  // PROTOTYPE
  Greetr.prototype = {
    
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    
    greet: function(formal) {
      var msg = formal ? this.formalGreeting() : this.greeting();
      console.log(msg);
      return this;
    },
    
    log: function() {
      if (console) {
        console.log('Logged in: ' + this.fullName());
      }
      return this;
    },
    
    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    
    HTMLGreeting: function(selector, formal) {
      if (!$) throw 'jQuery not loaded';
      if (!selector) throw 'Missing selector';
      
      var msg = formal ? this.formalGreeting() : this.greeting();
      $(selector).html(msg);
      return this;
    }
  };
  
  // CONSTRUCTOR
  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  };
  
  // LINK PROTOTYPES
  Greetr.init.prototype = Greetr.prototype;
  
  // EXPOSE GLOBALLY
  global.Greetr = global.G$ = Greetr;
  
})(window, jQuery);
```


***

## 🎯 Using the Library

### Basic Usage

```javascript
// Create greeting object
var g = G$('John', 'Doe');

// Chain methods
g.greet()                    // "Hello John!"
 .setLang('es')             // Change to Spanish
 .greet(true)               // "Saludos, John Doe"
 .log();                    // "Logged in: John Doe"

// No variables needed - direct chaining
G$('Jane', 'Smith')
  .greet()
  .setLang('es')
  .greet();
```


### With jQuery Integration

```html
<select id="lang">
  <option value="en">English</option>
  <option value="es">Spanish</option>
</select>

<button id="login">Login</button>
<h1 id="greeting"></h1>
```

```javascript
$('#login').click(function() {
  
  // Create greeter
  var loginGreetr = G$('John', 'Doe');
  
  // Hide login form
  $('#login').hide();
  
  // Chain everything!
  loginGreetr
    .setLang($('#lang').val())        // Get selected language
    .HTMLGreeting('#greeting', true)  // Update h1 element
    .log();                           // Log to console
  
});
```


***

## 🎯 Key Patterns You Learned

### Pattern 1: IIFE for Privacy

```javascript
;(function(global) {
  var privateVar = "hidden";  // Private
  global.publicVar = "visible";  // Public
})(window);

console.log(publicVar);   // "visible"
console.log(privateVar);  // Error - not accessible
```


### Pattern 2: No 'new' Keyword

```javascript
// Bad (users must remember 'new')
var obj = new MyLib();

// Good (your library handles it)
var MyLib = function() {
  return new MyLib.init();
};

var obj = MyLib();  // Works without 'new'
```


### Pattern 3: Method Chaining

```javascript
// Every method returns 'this'
myMethod: function() {
  // Do work
  return this;  // ← Key to chaining
}

// Enables:
obj.method1().method2().method3();
```


### Pattern 4: Private Data with Closures

```javascript
(function() {
  var privateData = ['secret'];  // Private
  
  var MyLib = {
    usePrivate: function() {
      return privateData[^0];  // Closure access
    }
  };
  
  window.MyLib = MyLib;
})();

MyLib.usePrivate();  // "secret"
// privateData is not accessible directly
```


### Pattern 5: Prototype Sharing

```javascript
// All objects share ONE prototype (memory efficient)
MyLib.init.prototype = MyLib.prototype;

// 1000 objects = 1 copy of methods
```


***

## ✅ Interview-Ready Summary

**Q: How do you structure a JavaScript library?**

```
1. Wrap in IIFE (privacy)
2. Main function returns new object from internal constructor
3. Prototype holds shared methods
4. Private data via closures
5. Expose only what's needed to global
```

**Q: How do you enable method chaining?**

```javascript
return this;  // At end of every method
```

**Q: Why use IIFE?**

```
- Prevents global pollution
- Creates private scope
- Controls what's exposed
```

**Q: How to avoid 'new' keyword?**

```javascript
var MyLib = function() {
  return new MyLib.init();  // Handle 'new' internally
};
```

**Q: Difference between library and framework?**

- **Library:** You call its code (jQuery, lodash)[^6][^8]
- **Framework:** It calls your code (Angular, React)[^8][^6]

***

## 🚀 Your Homework

**Try these:**

1. Add another language (French)
2. Add a method `.sayGoodbye()`
3. Add validation for empty firstName
4. Add a `.reset()` method

**Pattern to remember:**

```javascript
;(function(global, $) {
  // Private stuff
  // Main function (no 'new')
  // Prototype with chainable methods (return this)
  // Link prototypes
  // Expose globally
})(window, jQuery);
```

**You now understand how libraries like jQuery, Lodash, and Moment.js are structured!** 🎉
<span style="display:none">[^1][^2][^4][^7][^9]</span>

<div align="center">⁂</div>

[^1]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries

[^2]: https://www.geeksforgeeks.org/javascript/javascript-libraries-and-frameworks/

[^3]: https://blog.risingstack.com/writing-a-javascript-framework-project-structuring/

[^4]: https://betterprogramming.pub/the-pragmatic-guide-to-your-first-javascript-library-516a7b08c677

[^5]: https://blog.bitsrc.io/creating-custom-javascript-libraries-a-guide-to-reusable-and-efficient-code-2bcaff45339d

[^6]: https://www.dotcms.com/blog/javascript-frameworks-guide

[^7]: https://www.sencha.com/blog/comprehensive-guide-to-javascript-frameworks-for-web-development/

[^8]: https://www.ionos.com/digitalguide/websites/web-development/popular-javascript-frameworks-and-libraries/

[^9]: https://ionic.io/resources/articles/beginners-guide-to-javascript-frameworks

