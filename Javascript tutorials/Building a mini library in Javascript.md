<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Go through the following transcript. Explain in very simple terms with easy to understand code examples to help me prepare for interviews: All right, so it's time.

It's time to use everything we've done in this course so

far to build our own little mini framework library.

Frameworks and libraries are similar concepts,

although frameworks are a more complex.

But for the purposes of this course we're going to talk about them as if they were

the exact same thing.

Because we're focusing on structure.

Not so much what it does.

So let's build our own mini-framework/library.

And let's build something that you could use in a project if you wanted to or

in many projects.

All right, let's do something first, that we need to do for any software project.

Let's look at the requirements.

What should the software do?

Well, first of all, what is our little framework library going to be called?

Let's call it greetr.

All this time in this course we've been using greet as a example,

and I like to use those simple examples because we can focus on the concept and

not get lost in the implementation.

But now let's formalize it.

Let's say we wanted to build a library or frame work that helps us give greetings.

Maybe for when I'm on a website and someone logs in I can show them

a greeting after they login in the upper right corner or right after they log in.

And maybe I'd like to do it in different languages, depending on

what language they choose, their preferred language in the application.

Something like that.

Let's do the official requirements.

When I'm given a first name, a last name and an optional language, it should

generate formal and informal greetings that I could use throughout my app.

It should support both English and Spanish languages for starters.

It should be reusable,

meaning that it won't interfere with any of the other JavaScript code in my app,

and someone else can just grab it and use it in their apps.

And lastly, even though it's called greetr,

I'd like to have an easy to type structure, kind of jQuery like, and

a G\$, maybe, like the dollar sign for jQuery.

Let's do G\$.

Oh, and one more thing.

All my developers use jQuery on a lot of their projects.

So greetr should also support jQuery.

Even though it returns greetings what we'd like is to be able to give it a jQuery

object that points at some HTML element.

And it'll fill that element with the greeting.

So I could just pass my greetr, let's say a div or

a span in my HTML that just contains text.

And it'll fill that with my appropriate greeting text.

All right, so that's the requirement of our greetr framework/library.

Let's go build it.

To start with, let's look at structuring our greeter frame work

in a way that's safe so that it can be reused inside any Java script application.

In the downloadable source code for this lecture, you'll find this starter setup.

I've got an index, that HTML page, and three JavaScript files.

I have jQuery.

Since we said we wanted jQuery support, I need to load that first.

I have my Greetr.js file, which will be my framework slash library.

That's where I'm gonna put my code, and

an app.js file we'll use our frameworks and libraries.

Got that?

So just three files and

we're going to do most of our work inside here, inside greeter.js.

So for starters, here's what we want to do.

We want to create a new execution context for our entire framework/library.

So all of our variables declared are safe.

And we're only exposing on the global object what we want.

So how do we do that?

Start right here.

Wrap up some code in the way that you think would be appropriate,

in order to make any code inside of it safe.

And pass to it what we need access to.

We need access to the global variable which is Window and

the jQuery variable which is either the word jQuery or a dollar sign.

Here's your first hint.

It's an immediately invoked function.

So go ahead and pause the video.

Set up an immediately invoked function, that accepts and

takes in a global object and a jQuery object.

And when you invoke that immediately invoked function.

When you do those parentheses to call it, make sure you're passing in Window, and

the jQuery object.

Go ahead and pause.

All right.

You ready?

So we're going to create our immediately invoked function.

I can't just do function.

I have to do a parentheses or something like that to trick the syntax parser.

And then I end the function and end that.

And then I'm going to invoke it with parentheses.

I'm gonna pass a global object in jQuery which I'll just make a dollar sign.

And when I invoke it, I pass in my global and

my jQuery object, which I could either put dollar sign or jQuery right here.

Make sense?

So now I have safe code.

I've structure around the code that I'm going to write.

So the first thing that happens is it executes this,

creating a new execution context giving me the variables I need to run.

And so now my whole greeter is safe inside of here and ready to be reused by anybody.

All right, pretty simple start.

Let's keep going

Now it's time to set up our Greetr object and this will be a bit tricky

because we want to set it up the way that jQuery is set up.

We're going to imitate jQuery's structure.

What I want to do is set up my Greetr so that it generates an object so

it'll be a function, a function that generates an object.

But what I'd like to do whenever I use Greetr is I'd like to just say G\$, and

then pass firstName, lastName, and maybe language, and that's it.

And what it gives me back is an object, kind of like jQuery does.

So, I don't want to have to say new all the time.

So, let's do that now.

How can I set up a function that does this?

Let's get started, we'll set up a function,

a firstName, a lastName, and a language.

And now I want it, instead of being a function constructor, so I have to

use new, I want it to return the results of a different function constructor.

Maybe like a .init, just like jQuery did.

You wanna try that yourself?

Try to see if you can create a separate function constructor,

Greetr.init, that takes the same firstName, lastName, and language.

And then have this function right here, this Greetr function

return a new object created with that other function constructor.

Go back and look at it on jQuery if you want to again.

Think about it a bit.

At least give it a try.

All right, ready?

Return new something.

Well, I'm going to need a Greetr and I'm going to do a property on my Greetr.

It's gonna take the same thing.

So it's return new, so I'm going to return and

then use a function constructor to generate the object.

That way I don't have to always setup the object with the new keyword.

Then I'll do Greetr.init and this is the actual function.

And notice that it's okay that I'm setting this up after this because

this won't be called until I actually use Greetr.

So by the time this is actually called, this will all be set up.

All this other code will be already run.

All right, so I'm going to set up some default properties.

Do you wanna try that?

Set up some default values for firstName, lastName, and language.

How would you do that?

If I pass in firstName I want to use the firstName I pass in.

But if I don't, I want to set a default.

And I want to add firstName, lastName and

language to this empty object that's created by new so I need to use this.

Give it a thought.

How can I set up my new object, because that's what I'm doing?

I'm doing a function constructor so I'm building an object,

building this new object that's going to be returned by the greeter function.

All right, well I'm gonna use my nice self, just to be safe.

Self is the same as this, so

that I don't have to worry about what this variable points to later.

And I'll set up, I'll build my object because this, and

now self points to the empty object created by the new operator.

And I passed in firstName so I'll use or and then I'll default to an empty string.

And I'll build my object again, the new property and one more.

What should be our default language?

Let's say English.

En for English.

All right, so that's it.

I have a function constructor that builds an object and gives it three properties

and sets its value if you pass something into the function constructor,

otherwise set some defaults.

Now what about the prototype?

Well I want to use Greetr.prototype because it looks nicer in my code and

that's just gonna be an empty object for now.

And here is where I'll put any methods that I want to use

inside my object that's returned from Greetr.

But in order to do that that means that this object here that's created

needs to point to this as its prototype.

Remember how jQuery did that?

Well any object returned from this function constructor will point where for

its prototype.

Where will an object created from this function,

which is Greetr.init, where will an object created from here,

where will its prototype, its proto property be pointing at?

Remember, those names are a little confusing.

Greetr.init.protoype, this is a function.

Any object created with this function as a function constructor,

that's where the proto property is pointing.

So all my objects are going to point here.

If I call my Greetr when it's ready, and this returns an object,

then It'll return an object by calling this function constructor.

So the .prototype property of this function

is where that new object will point as its proto.

Remember all that?

Go back and look at that, if you need to again.

Can be a little confusing just because it's called prototype.

But it really is just where objects that are being created are pointing at.

And I want this to be the prototype of all objects created from this.

So a jQuery did was this.

Remember?

It just says any objects created with this function should

actually point here for its prototype chain.

Got it?

So now I can cleanly put my properties and methods on here.

It just looks a little better.

All right now I want to expose my Greetr to the outside world.

I want to attach it to my global object so that I can call this function anywhere.

Because it's sitting on the global object.

We're not gonna worry about checking to see whether it exists or not.

We're just going to attach it to the global object.

And oh, we also want that nice alias, G\$,

so I don't have to type Greetr all the time when I'm using this.

How do we do that?

How do we add it to the global object?

Try it yourself, and then alias it with G\$.

How do we do that?

Well, to make something available everywhere I need to attach it to

the global object.

I passed it in to this function that's being invoked..

So it's called global cuz I passed in window.

And I don't want my code inside of here to think about whether it's a window or

not so we're just gonna call it global.

And maybe someday I could enhance this call to check whether window or

not exists.

All right so global.Greetr because global is what I passed into this function.

And, I also want an alias, global.G\$,

and I am going to set that equal to what?

I'm exposing the Greetr function, so

it's just Greetr, this Greetr right here, which is a function.

So, on the global object, these two names will point to this value.

Got it?

So I have the basic setup of my object and my prototype.

So if I go to my app, I can already say var,

let's just say g = G\$('John',

'Doe'), and I'm not gonna pass a language.

And let's console.log(g).

And let's refresh.

Hey, look.

I have an object with firstName John, lastName, Doe,

default language, and its of type Greetr.init, which makes sense,

because just like jQuery, I'm returning a new Greetr.init.

But its prototype is pointing here so I can add my other methods and

properties right here.

Got that.

We're well on our way.

Let's add some functionality.

All right, so let's add some functionality.

Let's add some properties, and

some chainable methods to our object, because I like that.

And we'll also set up some setup features that are within the greeter but

not exposed to the outside world.

So I've already set up my object in here where I'm building my object and

my function constructor, the one that I'll actually be using out in my app.js file.

I've already built this up with the properties that are unique to each copy or

each instance of the object.

So, in order to save memory space, where should I put any methods and

other properties that would be shared by all of the objects generated here?

Where should I put it?

I could put self dot and add methods here, but it's better to put it where?

On the prototype, which, thanks to this line of code will be this object.

All right?

And what about things that I want to use in the logic of this entire

framework/library, but I don't want it to be exposed to the outside world at all?

Can I create variables and concepts that aren't

part of the object that gets returned when we use the greeter?

Yes.

I could put, for example, a variable here, let's say supported languages.

I'll make it an array, and we're gonna support English and Spanish.

This is never exposed anywhere.

Right? It's not a property,

it's not a method of the object being returned.

It's inside this memory space of this function.

However, I can use it inside my object, because of what?

Why is it that the object that's returned, well then any methods

on that object created here would have access to this variable.

Why would any objects created here have access to this variable?

Because this object's lexical environment is this whole function.

And so thanks to closures it'll close in this variable

even when this immediately invoked function is done running.

So it will have access to these variables.

But they're hidden to many other developers

from changing them without coming into the source code itself.

All right, so let's say I also wanna set up any other data that I want

that I don't want developers to be able to change but I do need access to.

I want to set up greetings and then we'll also set up formal greetings.

I could make these arrays, but I really would like to reference the greeting

by the name of the language, by the string, the name of the language.

Do you remember how we can do that with objects?

How can we reference an object's property with a string?

That's right, with the brackets.

So I could put English in here and if there is a .en property it'll find it.

So I can use that and I'm gonna set up my greetings here,

hello, and a Spanish one, hola.

And then I'll set up a formal greeting, the same property name so

I can reference it by language.

Greetings, more formal, and saludos, also more formal in Spanish.

Got that?

So now I have a nice list of greetings and I'm making sure that others outside this

greeter framework/library can't just go like greeter.greetings, and change these.

I'll have to expose it for them, if that's really what they want.

Make sense?

All right.

So, I have my languages.

I have my greetings, I have my formal greetings and

I'm just gonna put semicolons here.

So it's clear that this is just declaring and creating these brand new things.

And I need my var to show that.

Make sense?

All right, let's move on.

One other thing.

Just because I'm a good developer,

I wanna add an option to log whenever those greetings get used or called.

Maybe be logged to a database in our case we'll just log it to the console that

it got used.

So if I want to log it to the console I need some messages for that.

So I'll just create log messages and

same thing, maybe it'll be logged in, will be the message.

And in Spanish, in case I want Spanish logged messages,

I'll just use this right here.

Inicio session.

That means logged in.

Got it?

All right, so I have three sets of messages, but they're objects,

not arrays, because I want to reference them by the name/value pair,

by the name of the property.

And this will let me do this dynamically very easily.

So, that's some things that are not exposed to

the outside world until I desire it to do so.

Interesting, right?

Okay, so now that I have these values that are hidden from being

accidentally changed, greetings, formal greetings, log messages.

Let's add some things that will be exposed inside this prototype object.

So that any objects built here will have access to any methods and properties here.

And any methods in here that this variable will point to the object that was created.

Remember all that?

So I need a fullName property because I have a first name and last name.

We've built this plenty of times.

It's a very simply one, not very smart one, but that's okay.

This will just return firstName and lastName.

I'm using object literal syntax to create a method called fullName with

this function expression to define it.

Then a comma, right, because I'm adding properties and

methods in object literal syntax.

So I separate them with a comma.

What else might I need?

I'd like to be able to validate that it's a language that's supported.

So if the developer tries to call this and pass German or French or

something, I can tell them that it doesn't support this language.

I set up a hidden variable here that'll be hidden to the outside world but

accessible via the closure called supported languages.

So JavaScript will make sure that when this function is called

because of where it sits lexically, it will go up the scope chain and

find supported languages where it's sitting in memory.

So this is an array.

I can use indexOf which just tells me whether

It's found in the array and I'm gonna use this.language.

Remember this, the keyword this,

will point to the object that's calling this function.

And the object will store its own language that we're requesting.

And I'm gonna see if it's found or not.

If it's not found, I'm gonna throw a new error.

And this is a simple way to throw an error in JavaScript, if you didn't know this.

All right, so it's just a validate function, just so

I can throw an error if we're asking for a language that isn't supported.

Make sense?

Oh actually there's a syntax error here, it should say if.

Here we go.

Did you catch that?

All right so if and indexOf returns a negative one if it's not found.

Otherwise it'll return a zero or a one.

All right so, validate.

So that works just fine and I have another comma.

So I'm just adding more methods.

I'm adding functionality to my objects.

You'll have access to all of these so I'm just gonna go ahead and add some.

Let's say I want to have a regular greeting.

So now I have the first name and last name of the person I want to go out and

grab the greetings based on the language that was chosen.

So greetings and then I'll use brackets operator to get the property,

and the property I've named after the language.

So this.language, whatever is set up as the language in the object.

I'll go get that equivalent property name, do a space and

then the first name of the person, maybe an exclamation mark or

something like that, cuz this is informal.

And a formalGreeting, let's just do a function.

And I have formalGreetings as another object with properties.

And I can grab that property by name, using the chosen language.

So it will go out and get the appropriate language.

I'll do a comma and

this dot, actually I want full name in this case, because it's formal.

So let's do fullName.

All right, so

now I want some methods that I can really use and be chainable.

Remember we saw chainable methods in jQuery?

For example, I don't want to always have to call greeting or

formal greeting that just encapsulated that code, separately.

I'll just have a greet method, which is the one I'll probably

be really using as a developer, and I'll pass whether or not I want it formal.

All right, I've already written this up,

so I'm just going to type it out real quick.

I'm going to have a message.

And then, I'm also gonna log when this happens because I just wanna use this and

show how it's used.

So I'll log the greeting to the console.

So I can do .greet and log into the console that way.

All right, so I have this message.

If it's formal then it's the result of formal greeting.

If it's not, it's the result of greeting.

These are just returning strings, and I'll put it to the console.

And then I'll make it chainable by returning this.

See that?

So .greet, whether or

not I want it formal will log the appropriate greeting to the console.

And then I'm also going to write a log function.

This is when I want to manually make sure that something is logged.

I'll log it to the console, Internet Explorer

actually doesn't have a console variable unless its console is open.

So I'm going to make sure that it is by just saying if console.

That's an object.

If it's undefined, it will be coerced to false.

So as long as I have a console object available, I'll console.log.

And then I'm just going to say something according to this logMessages.

So very similar to what I've done before,

I'll do logMessages[this.language] + that would be a colon and this.fullName.

So whoever it was that was used, it will log to the console that log message.

So this is just a greeting, and this I'm using for logging, and

let's see, what other functionality can I do?

Well, let's make this chainable as well.

So I'll return this at the end of this function.

So both of these are chainable, meaning I can call the object and

then the method and then dot another method.

What if I want to change the language on the fly?

Could you write a setLang method that changes the language on the fly?

And make that a chainable method?

So I could call .greet in English, then set the language to Spanish and

then call .greet again all in one line.

Let's do function.

It'll take the new language that I want.

And I'll validate this after I

set this.language equal to that language that got passed in.

So, update my object and then, call validate to make sure that it's valid.

And then, return this.

Make sense?

So I'm just creating properties and

methods along the way and each one of these is returning

the this variable so that they're chainable.

All right.

Let's try using this.

I'm just gonna double-check my syntax because my editor's

been acting a little strange.

I'd suggest that somewhere something's wrong.

Oh, look. See that console.log?

I don't have an ending parenthesis,

that's why it was acting strange, it was getting confused.

All right. So I have all of these properties,

all of these methods, inside a single object literal.

And that object literal ends right there.

See that?

One giant object literal that's the prototype

of all of these methods defined on it.

So now let's use our object with all of its properties available on the prototype.

I've got my object returned, right?

So g\$ points to the greeter function, which is up here.

The greeter function returns a new greeter.init down here,

which builds the object, sets the values.

This prototype makes sure that all of those objects created from here has access

to all of these methods on this prototype property.

Got that?

So I should be able to do something like g.greet and

what g.greet should do is it should decide whether I passed formal or not.

And i just used coercion to see if I passed it.

And if I did it'll give me a formal greeting and if I didn't,

it'll give me a regular greeting and I made it chainable by returning this,

or returning the object that's actually calling the method.

So, let's see if this works.

Hello John!

And that's chainable so I could call greet again right away if I wanted to and

say true.

And that's being passed to that formal parameter which will then

get me a formal greeting and pass that or log that to the console.

So what I should see is this function's calll returns this,

which is the g object and calls it again on the g object and

there I have, my greeting and my formal greeting.

And then since I've changed the language swap I can

stick in between there setLang, change it to Spanish.

There we go.

What do you think?

If I had set something that wasn't valid, that validate should throw an error.

So if I tried French it's not supported.

There it is.

So I have chainable methods and an object

that I created without having to call the new operator using the jQuery syntax.

Take a look at this code.

Try it for yourself.

Try doing some things.

Let's move on.

We've seen one of our requirements then is now that we have a greeting object

that I can output a greeting based on a language and whether it's formal or not.

I'd like to actually be able to use it.

One way would be to simply use the greeting or formal greeting

methods on the object and manually update my web application, for example.

But I'd like to add a bit of jQuery support to make it easier for

any developers using this.

They could just give it a selector and the selector would then be used

to create a jQuery object and then we fill the text of that element.

Now, let's try it.

I've added a bit of HTML to our index.html, just so

that we can use jQuery.

I have this logindiv and inside of it I have a select with the id of language.

And it's English and Spanish options, where the values is those en and

es that are standard, and we're using inside our greeter object.

Then I have a button, called Login.

We're imagining that this is some kind of login page.

And a spot where I'd like to drop my greeting after the login, and

I gave it an ID so I could find it with jQuery, called a Greeting.

So when I update this, I just have a little drop down and a login button.

And I still have my app.js code, where I have my chainable methods.

I greeted and I changed the language and I greeted again, but formal.

I can even set the log, if I want to log this, use that.

So all of that is working.

Now I'd like to add a method that accepts a jQuery selector.

And then updates whatever the selector is.

So I challenge you to try doing that if you're familiar with jQuery.

If you're not you just come along for the ride.

But if you're familiar with jQuery, I challenge you to make

a method on the prototype that accepts a selector.

And whether or not it's a formal greeting, and then uses jQuery to update the value.

And the selector will probably be \#greeting,

because that's what I'm gonna pass.

But it should accept any selector, any string, create a jQuery object form it and

update the text inside this here, update the HTML.

You can go ahead and give that a try.

As a clue your gonna need to put it inside this prototype object literal declaration.

All right, here we go.

I'm gonna do HTMLGreeting, that's what I call it,

you can call it whatever you want.

It's a function that takes a selector for jQuery and whether or not it's formal.

I'm gonna make sure that I have jQuery.

So if jQuery isn't around then maybe I'll throw and error something like that.

jQuery not loaded.

And there might be other errors that would happen if jQuery wasn't loaded, but

just to be sure.

And if I don't have a selector I'm gonna throw my own error.

Missing jQuery selector, or something like that.

And then I'm gonna do a same little bit of code.

I could refactor this into a separate function,

but we'll just show it here so it's clear.

So I'm just saying depending on whether you give me a formal parameter or not.

That's the string that I'll use.

Now I'm gonna use jQuery.

Cuz remember I passed jQuery down into the function.

Although it is available globally, so I didn't have to.

But I'm encapsulating this just in case someday someone decides to use something

that's an alternative to jQuery.

They wanna pass a different variable here.

I don't care, as long as it works the same as jQuery.

So I can use my dollar sign.

That's whatever was passed to me that represents jQuery or something like it.

And I'll just pass the selector.

Because this function takes a string.

So I'm just gonna pass it down into my jQuery object and

I'll set the HTML to the screening.

And let's make this chainable.

All right.

So I have a jQuery

method that accepts a selector, a jQuery selector and

whether or not it's a formal greeting and sets up the greeting itself.

And then updates whatever value is there.

Now I need to do a little bit more validation of

what the results of the selector are but that could be for another day.

And then I'm making it chainable.

All right, so we have a complete little mini framework/library.

Let's use it.

Whoops, see what I just did there?

I took a deep breath and was so

glad I finished my code, I almost made a really bad mistake.

I didn't stop to comment up my code, and that's especially important in JavaScript.

JavaScript is not a verbose language.

It's very terse.

You can do things in very slick and various ways, and

as a result, good commenting is especially important when writing JavaScript.

Because while it's not terrible to read, it really is helpful if you explain

what your intent is, how you're doing something, for yourself and for

future coders, because JavaScript is so terse.

That is, it doesn't have a lot of explanatory text within itself.

You have a lot of literal syntaxes and those sorts of things, and

so, commenting is really helpful.

So, I've taken our mini library and framework, and I've commented it up.

And it's available as source code in the resources of this lecture.

So, you can go find the zip file for

good commenting and take a look.

And this is what we'll use going forward.

So remember in the real world, you might have to come back to this a year later,

and you will have to refigure out what you did.

I even did a check of the code while I was at it, and I had missed something.

Did you notice?

I didn't call the validate when you initially create the object.

I did when you set the language later in the chainable function,

but not when you actually create it.

So I missed something important.

So go back through your code in JavaScript, do a good check of yourself.

And a good way to do that is to comment what you're doing so

that you can double check the logic and the flow of what you've done, and

maybe find something you missed, as well as help the sanity

of future developers that look at your code, and yourself as well.

All right, so it's time.

We've used the knowledge that we've gained to build our own little mini-framework.

Well, it's kinda small so maybe it's a library.

Either way, let's go ahead and

use it on a webpage, since, in this case, we're supporting jQuery.

And even if we weren't supporting jQuery,

we could use it maybe in some other way on the server.

But, let's go.

Let's use our framework/library that we just built.

So I have my immediately invoked function, and I have all of my code.

By the way, if you ever see a library that does this,

puts a semicolon before it, that's another trick.

Just in case there's some other code, some other

library that may be injected before the Greetr.js in a script file,

maybe above it, that doesn't quite finish out its semicolons properly.

You can also put a semicolon there to make it more completely useful

in that even if the other code doesn't finish its semicolons out properly,

a code that's used above here, your code will still run fine.

I just wanted to make mention of that because you will see it sometimes used.

All right so, I have it all now.

And so I'm gonna use it.

What I want to do is on this little webpage.

I'm gonna pretend that this is a login.

If you're familiar with jQuery what we're going to do is

add a click event to this button.

And when the button's clicked,

we'll set the greeting based on the language that's chosen.

We'll create a new object with the first name and last name.

And we'll just pretend that this login let us get the first name and

last name of the person back from the server or something like that.

And then we'll use our greeter to set

this heading with an ID of greeting.

And it needs to do so with the language that's chosen.

And remember that the HTML greeting method already sets up the jQuery object.

You just need to give it the selector.

Would you like to try that yourself, if you're familiar with jQuery?

See if you can use the greeter, we already have it set up here.

See if you can use it in order to call the HTML greeting

with the appropriate selector, and have the language set appropriately.

I'll let you give that a try.

All right, if you're not familiar with jQuery or

if you already tried it, just move along with me.

I need a click event on the login button which has an ID of login.

So I'll just use jQuery, call the jQuery function, pass it the login ID.

That pound sign means ID.

And a click event and

pass it a function object that I create on the fly with the function expression.

Then I'm going to make a brand new object, let's say login greeter.

Use g\$ that's our object, which is created.

And we'll know it's John Doe because of the user name and

password that they gave or something like that.

And I'm going to go ahead and hide this entire

select and button, this entire drop-down and button.

You didn't have to do this after this so it has an ID.

And then I'm gonna take my login greeter, I'm gonna set its language.

And you could have set the language here,

depending on how you want it, but I'll just do it to show chainable methods.

I need the value of that select box.

It has an ID of lang and I need it's value.

So I'm gonna pass its value which is a string.

There's the value, pass it to set language.

So now my login greeter object will have a language of whatever was chosen.

And then I'll chain the method HTML greeting,

I'll pass it the jQuery selector, which it'll use to create a jQuery object.

And let's say I want a formal greeting, so I'll say true.

Oh, and I'd like to log this to the console while I'm at it with

a chainable method.

Got that?

So, when I click the button, creates a new object using my function.

I'm just going to hide the UI there, the interface.

And I'm going to set the language based on what's chosen in the select box.

Chain a method that actually updates that h1,

because it has an ID of greeting, right there.

I want a formal one.

And I also want to log it to the console, all in one line of code.

Let's try it.

Refresh.

Login.

Refresh, Spanish, login.

What about the console?

There it is.

Refresh.

Login.

I'm logged in.

Refresh.

Spanish, login.

And it logged it.

It worked!

We have nice, clean, safe reusable, little mini frame work or

library that has some neat features that mimic the structure of jQuery.

And its approach with these chain-able methods in a function that

returns a new object without me needing to use a new keyword.

Pretty neat, right?

What do you think?

We have our own reusable mini framework or library.

And you could use this in your apps right now if you wanted.

So here's your homework for the future.

Try adding another language.

See if you can do that.

Add support for another language.

Add some methods.

Add some alternate greetings.

Play with this, see if it makes sense to you.

The last thing we'll do is we'll add our comments.

Remember, it's JavaScript, and in any programming language

it's important to have comments, but especially with JavaScript.

So I'll just add a little bit of commenting.

So I'll have a commented up usage and

inside the actual app we have that as well.

Inside the actual framework and library we have everything we need.

And you can take a look through this code in the finished folder

of the Let's Use Our Framework zip file.

So, I hope you appreciate how far you've come.

We've built our own mini framework library by understanding JavaScript,

how it works under the hood.

And also by looking around a bit at the source code of jQuery.

This is how you improve as a developer, by understanding how things really work,

and looking at others' good code.

So enjoy it!

Remember that writing in JavaScript can be an extremely

enjoyable experience as a developer.

Because of the nature of the programming language.

So don't be afraid of learning something new and trying it.

Enjoy your JavaScript development.

Enjoy all the parts of JavaScript, even the weird ones.

**Perfect! Here's a beginner-friendly breakdown of building a custom JavaScript library/framework with interview-ready examples.**

***

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

