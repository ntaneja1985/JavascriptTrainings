//add a semicolon before so that any code before doesnot close its own semicolon
//helps to prevent unintended side effects
;(function(global,$){

    //'new' an object
    var Greetr = function(firstName,lastName,language){
        return new Greeter_Init(firstName,lastName,language)
    }
    //hidden within the scope of IIFE and never directly accessible
    var supportedLangs = ['en','es']

    //informal greeting
    var greetings = {
        en:'Hello',
        es: 'Hola'
    };

    //formal greetings
    var formalGreetings = {
        en:'Greetings',
        es: 'Saludos'
    };

    //logger messages
    var logMessages = {
        en: 'Logged In',
        es: 'Incio Session'
    }

    //prototype holds methods(to save memory space)
    Greetr.prototype = {

        //this refers to the calling object at execution time
        fullName: function(){
            return this.firstName + " " + this.lastName
        },
        validate: function(){
            //checks if it is a valid language
            //references the externally inaccessible 'supportedlangs' within the closure
            if(supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid Language'
            }
        },
        greeting: function(){
            return greetings[this.language]+ " " + this.firstName+ " "+this.lastName+ "!"
        },
        formalGreeting: function(){
            return formalGreetings[this.language]+ ", " + this.fullName();
        },

        //chainable methods that return their own containing object
        greet: function(formal){
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if(console){
                console.log(msg)
            }
            //make it chainable
            //this refers to the calling object at execution time
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language]+":"+this.fullName())
            }
            return this;
        },
        setLang: function(lang){
            //set the language
            this.language = lang;
            //validate
            this.validate();
            //make chainable
            return this;
        },
        HTMLGreeting: function(selector,formal){
            if(!$){
                throw 'jQuery not loaded'
            }
            if(!selector){
                throw 'Selector not loaded'
            }

            //determine what the message is
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            //inject the message in the chosen place in the DOM
            $(selector).html(msg);
            //make it chainable
            return this;
        }

    };

    //function constructor
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
 Greeter_Init = function(firstName,lastName,language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
    }

    //trick borrowed from jQuery so that we dont have to use the 'new' keyword
    Greeter_Init.prototype = Greetr.prototype;

    //attach our greeter to the global object, and provide a shorthand '$G' for easing our poor fingers
    global.Greetr = global.G$ = Greetr;

}(window,jQuery))