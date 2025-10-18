<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Same here: Hi this is Don't imitate.

Understand.
I'm Tony Alysia.
In this video we'll endeavor to gain a proper mental model of promises async and await in the JavaScript
programming language.
In order to do that, we'll first start by reviewing some fundamental things we need to be sure we understand
in order to then understand promises.
Async await and dealing with asynchronous processes in JavaScript in general.
For starters, we need to know that functions in JavaScript are first class objects.
That means they can be assigned as values and passed around.
So we could write something like this.
A function that takes another function as a parameter.
In this case, other f n does some work and then executes the function that it's been given.
So I could call, run this and give it a function to then run.
I could do that again with a different function.
So this function again is being passed around.
It's a first class object.
I might also rewrite this using arrow functions like this, but it's the same idea.
I have a function that takes another function as a parameter and runs it.
So when I call run this, what's being passed is this function object and we refer to this concept and
the function itself being passed as a callback.
We've given it to a function and then it calls that function in return.
And this happens again with a different function object.
After it's done and it actually runs, we would get output that looks like this.
The run.
This function has been run twice and each time it ran the callback.
That's the first concept.
The second concept is how JavaScript is actually executing its code under the hood.
Under the hood of the JavaScript engine is an execution stack.
On the execution stack are placed execution contexts.
Where your code begins is the global context.
And as functions are called, they're placed on the stack.
If function one called another function, let's say function two that would also be placed on the stack.
And when that function is done, then that execution context is removed from the stack.
As part of this concept also is how JavaScript is running each of those individual execution contexts.
If we look inside one of these functions, we could see that essentially the JavaScript engine is executing
each line of code individually one at a time.
Because JavaScript is synchronous and single threaded, which essentially means that it's doing one
thing at a time.
But we know in practice that when we're writing JavaScript code, there's often multiple things happening
at the same time.
How is that actually going on?
The JavaScript engine provides the idea of a queue, essentially a spot to put notifications that things
outside the engine have occurred, things that in your code you might be interested in.
And when we say outside the JavaScript engine, it's because how the JavaScript engine is generally
used in practice.
In reality, this entire concept sits inside the JavaScript engine, which for most engines is C or
C plus plus code.
And those engines are in turn embedded in other systems, also usually written in C and C plus plus
code like Internet browsers or NodeJS.
And that's where these other things, these other processes are running that might be happening at the
same time that the JavaScript engine is processing its code.
And then might notify the engine that some work is done.
For example, a common feature in browsers and in NodeJS is the idea of a timer something that can count
down and then do something once enough time has passed.
Now this concept does not exist inside JavaScript itself.
It's not part of the JavaScript specification or JavaScript engines.
But since JavaScript engines are usually embedded inside a larger system, that larger system can give
features to JavaScript that it normally wouldn't have.
For example, for years developers have used something called setTimeout.
But set timeout doesn't exist in JavaScript.
It's not inside the specification.
It's a feature made available to JavaScript from whatever system it's embedded inside of usually the
browser or NodeJS.
And then we can use the concept of first class functions to specify a function that should run when
that external process is completed and when that process is completed, a notification of that can be
placed on the queue and the JavaScript engine then knows what to do.
If we zoom back in, once this other code has been completed, the JavaScript engine can look at this
queue, understand that it needs to be processed and run the associated callback function in modern
JavaScript engines.
It's a little bit more complicated than that in that there's actually multiple queues depending on what
might have greater priority.
But from a mental model standpoint, this is enough to understand what's going on.
And again, this is our callback.
Now, once we start writing code like this, where we're initiating the use of a feature, providing
a callback function and then doing something inside that function, we begin to find ourselves in a
bit of a quandary, a bit of a difficulty when it comes to coding, because I might have several things
in a row that require waiting for that external process to complete.
And I might get code that looks like this.
Let's imagine that I set a timeout.
When that timeout was complete, I had to go out to the Internet and get some data like a person that's
going to happen through the browser, for example.
That's not part of the JavaScript engine.
So JavaScript requests that it's going to be another process external to the engine, which means we're
going to wait again.
And then perhaps once we get that person information back, I have to go out to the Internet again and
get another set of information like git log.
And so we end up with this nested set of callback functions.
This actually gets really difficult to deal with just from a writing code and debugging standpoint,
from looking at it and understanding what's going on, especially when it gets big and there's lots
of logic involved.
In fact, sometimes this coding structure is called the pyramid of doom, because if you look at it
sideways, it kind of looks like a pyramid.
There's a couple of other problems with this coding structure.
Let's suppose that we process the event and the callback runs.
Now the event is over.
But what if we had multiple callbacks that we wanted to run when that event completed?
Where would we specify that?
Another problem is what if the event is processed?
It's handled.
And then later we say in some other function, whenever that process completes.
I also want to handle it.
But the process is already completed, so.
What do we do?
These are problems not solved by this coding structure.
But I bet if you stopped and thought about it, you could start to imagine ways you could code it to
be able to handle those problems.
It's not that JavaScript can't handle those problems.
It's that this basic simple idea of callbacks within callbacks doesn't handle that idea very well.
We need a better concept, a better coding approach to dealing with asynchronous events.
And that's where the idea comes in of a promise.
A promise is a standardized approach to dealing with asynchronous events and callbacks.
Now, sometimes we hear things said that sound kind of complicated.
Kind of deep.
Like JavaScript, has promises now or some feature returns a promise.
But that's nowhere near as complicated as it sounds.
It's really just an idea.
Let's illustrate with a simpler idea.
Let's suppose that around the world, JavaScript coders everywhere were dealing with people.
That is to say, data about people.
And so these objects and data represent a person of human individual.
But many JavaScript coders were doing their own implementations of very similar ideas.
Maybe one uses a person object.
Another one uses a human object.
Another one uses an individual object.
They all basically do the same thing, but they're not quite the same.
And that makes our life a little difficult.
So everyone gets together and says, Let's come up with one specification for what a person object should
look like, and we'll all use that same person object.
When we do that, that makes all of our lives easier.
And we can write tools and utilities and share code and everyone's life is better then the folks that
write the JavaScript engine say, Great, it's in the specification, so we'll add it into the engine,
we'll make this object available.
And so people start saying JavaScript has persons now or some feature returns a person.
It doesn't really mean that JavaScript can do something new that it couldn't do before.
It means that there's now a standard that's available in JavaScript so that you don't have to write
it yourself and that we all know we're using an object that is the same object.
It's really a simple and useful idea.
In the exact same way.
Promises are an object that represent an idea.
A promise object represents a future value.
A value we know eventually we're going to get, but we may not have yet.
It encapsulates this general idea that we've already seen when it comes to the JavaScript engine being
embedded in another system that provides other features.
So that system provides a feature and it provides some hook for JavaScript coders to request the use
of that feature and a way to run a function when that feature has completed its work.
When that work is completed, we assume that we have some kind of value, maybe some data coming back
from some other system, a true or a false.
Whatever the case is, we have some value in the future and a promise represents that value.
But it also wraps up the idea of requesting the usage of that feature and handling it when the feature
has completed its work.
And again, these aren't things that the JavaScript engine couldn't already do.
But coders wanted to encapsulate this idea, standardize this idea of an object that represents a future
value.
And there were other implementations out there in the past.
But then it became part of the JavaScript specification and JavaScript engines, implemented a standardised
version of the idea, a standardised object, and that object is a promise.
Now to understand promises and what they do.
We're going to start by coding just a little bit the first half of our own version of a promise to get
under the hood a little bit and understand the ideas.
Then we'll use the implementation of promises in JavaScript to understand more.
Then we'll use that to understand async and await.
So let's write a little bit of code that shows how a promise object is supposed to work.
Now, we'll say right away, don't use any of this code we're about to write.
We're going to focus on simplicity so we understand the ideas.
But that means this code will not be ready for use in production, and you don't really need it because
a promise object is already available in JavaScript.
So let's write the beginnings of our own promise object to start with.
We think about what it's representing.
It's representing a value that comes back after work is completed.
So there's three states that we want to think about.
There's the state where the work is pending.
The state where the work has been fulfilled.
That is, it's done and completed successfully.
And the state where the work tried to complete but couldn't.
There was some problem, some error, and we'll call that rejected.
The promise then will be in one of these three states where waiting for work or pending the work is
done and we have a value successfully which is fulfilled or the work did not complete successfully.
And we probably have an error message which is rejected.
Now let's create our promise object.
I'll call it custom promise.
And what we'll give it is an executor function.
What does that mean?
It means the function that will actually do the work that we're talking about that will request the
data from the database or run a set timeout.
A promise object doesn't actually do any of the work that we've been discussing.
A promise object wraps up the idea of waiting for that work to complete and then figuring out what to
do after the work is completed.
It's up to the coder who's using the promise object to actually write the executor function that does
the work and then give it to the promise, and then the promise will run it.
The first thing a promise needs is its current state.
We'll start that off always as pending.
We're waiting for the work to complete.
Then here's the big important one.
That value that we're waiting for.
It starts off as null, but we know that eventually we'll have some kind of value or perhaps an error
message.
Then we'll deal with one of the first problems we talked about.
Perhaps I want more than one handling function, more than one callback to run when the work is complete.
So I'll have an array of handlers and maybe I need more than one function to handle things if something
goes wrong.
An array of functions that get called if there's an error.
I'll call these catches.
Now we add a very important function we'll call resolve.
That means the work is done and I have a result resulting value.
This function will get called.
By the executor.
So we'll give this function to the executor and that function, the executor function, the function
written by the coder using the promise we'll call the resolve function that's on the promise object
and give it that value that it just received.
Inside the resolve.
I'll do something simple.
I'll stay if.
We aren't pending anymore.
Then I'm not going to resolve.
That means that promises are designed to deal with what's called one and done operations.
Something that's only done once and then it's finished.
So if it's not pending anymore, there's nothing more to resolve.
The value will not change once it's been set, and that helps us make sure that our code works the way
it should.
If, however, we're still in a pending state.
Well, now we'll say because you called resolve.
I assume that the work is done, it's been fulfilled, and I'll set my internal value to whatever result
the executor function gave to me.
So now the work is done and I have a value.
And the last thing is, can you guess?
I need to take all the handlers and run them.
So I'll say for every handler function in the array, I'll execute the handler function and I'll give
each of those handling functions that value that just came back.
So now.
This does the work.
The work is completed.
The promise now has that future value set and all the callbacks are run.
We can do something very similar if there's an error.
I could say I have a reject function that gets an error.
I'll never call it.
If the promise is already finished.
But if the promise hadn't finished yet, I'll say, Well, now you've told me that it's finished.
And I know that it's been rejected.
There's a problem, and I'll set my value maybe to the error message and I'll say catches and I'll call
each of the error handling functions and give it that error message.
Now here's one more function, and this is one you see a lot when using promises dot, then dot then
takes whatever the callback function is and does one of two things.
Here we're going to again solve one of the problems that we talked about.
If we call Dot then and the promise has already been resolved, that means we already know the value,
whether it's fulfilled or rejected.
Then if the state is fulfilled, then we don't have to wait for anything.
So we'll just execute the callback immediately and we'll give it the value that we already know we have.
If on the other hand, we're still waiting, then we'll simply add the callback to the array of callbacks
or handlers that we're going to execute when it's done.
Now, I won't do the work of figuring out what to do if there's an error, but you get the idea.
We're either executing the callback immediately or we're adding it to the array of callbacks which will
be executed when the promise is resolved, when the resolve function is called.
The last thing to do is what always has to be done.
When the promise is created, we run the executor function.
A promise represents a process that's already running.
So when we create the promise that actually starts the work.
The creation of the promise runs the executor function that we give it, and the executor function that
whatever coder is using, the promise object writes should expect a resolve and reject function.
These two functions are passed to the executor function so it can use them when the work is completed
or when an error has returned.
And that's actually enough to demonstrate this first half of what a promise object is meant to do.
Let's try using it.
I'm going to create my actual executor function.
A function that does some work.
I know that I'm going to be given a resolve and a reject function when the promise executes this executor
function that I'm writing.
So now I'm going to do some work.
I could just resolve it right away to some value to say the value is done.
But we want to demonstrate what happens when you're waiting for work to be done.
So I'm going to use set timeout.
I'm going to give set, timeout a function to run after one second.
What that function will do is simply call resolve.
Now, it might do in the real world a bunch of other work in order to get this final value and then
call the resolve function.
Here, I'm just going to call it right away and say Hello world.
So what's happens is when I create the promise.
It will represent some future value.
And I'll give it my executor function.
Now remember what will happen when this promise is created.
I've given it an executor function.
The state will be pending and the value will be null.
Then inside my executor function I call the resolve function that was passed by the promise because
the promise immediately executed my function and gave me the resolve and rejects so that I can call
them.
So I'll call resolve and give it the value.
Hello world, which will end up as the value inside the promise object.
And then every handler that I add using Dot then will be run.
So let's add some handlers.
I can say some text then, because some text is the promise and I'll say, give me the value.
That was resolved.
And I'll just say.
Let's output that to the console.
Now remember, this is adding the function that I passed in to an array of handlers.
So.
I can do this again.
And I could say a second log function.
And remember now I'll just have handlers.
I'll have two of them inside the array and both will be called.
And I could even add another handler after we know the promise has been resolved.
Remember we said that set timeout after one second will resolve the promise.
So I could say after three seconds knowing that that's going to happen after the promise is done to
go ahead.
And do this again.
And this should still work because when that handler is added via, then the state will be fulfilled
and it'll just call it using that hello world value that we've now resolved.
So let's run this and see what we get.
The first set timeout, which resolves then the next set timeout, which adds yet another handler and
all three handlers run successfully using the resolved value.
Why does this work one more time?
We created a function, our executor function that does work and expects these functions from the promise.
We call the resolve when our work is done.
This function is immediately executed by the promise.
When the promise is created.
Every time we call a dot, then we're actually adding a handler to an array.
And so that array is simply used when we actually have a value that we resolve.
Any handlers added after the resolve is complete through this, then function is also simply executed.
But it's executed right at that moment because there's nothing left to wait for.
We already know the value.
I hope this makes sense.
A promise object represents a future value for a process that's already running.
And Dot then lets us add handlers for when that work is complete and we know what that value is.
We haven't added all the error handling and we haven't tried to make this robust, but this is the basic
concept.
It's a better coding approach to dealing with callbacks and with promises in JavaScript.
This coding approach is standardized now inside JavaScript engines.
The included promise object does get a bit more priority than some other external processes, but this
is basically what it's doing the exact same thing.
The second half of what a promise does is where our coding structures get really interesting.
What if I have a sequence of asynchronous processes and I want to avoid that pyramid of doom?
What would be really great if the Dot then function did something really fantastic.
If it returns a promise.
Why is that great?
Because if my callback also does something that requires us to wait for a returned value, I could then
chain a sequence of thens.
I could flatten the pyramid.
All right, let's see what that really looks like by using the actual promise object that comes along
for the ride in JavaScript.
So here's the same idea, but using the promise object that's built in to the JavaScript engine.
I have my executor function that's doing some work.
We know that the promise will run this function and when it does, it will pass in its own resolve and
reject functions that I can then use.
I'm going to set timeout and resolve the promise with the value and the real world.
This could be a success message or some data.
I'm just going to say hello world.
Then I create the new promise, giving it that executor function.
Notice I don't have to do much here.
The promise object is already available to me.
And then I use the dot, then function to add a handler.
And when I run it in the browser.
After a second, the handler executes using the resolved value.
Hello world.
So we understand how this works.
Now what if I had another situation in which I wanted to do another piece of asynchronous work, but
I wanted to do it as a result of the first?
Let's suppose that I have another executor function.
I'll just call it.
Do other work and it will resolve to a different string.
Maybe.
How are you?
But it will do it after three seconds.
Now I want this function to run, but I only want it to run after the first function is complete.
After that, first promise resolves.
So how can I do this?
Well, first we can understand a major important feature of the then function in the built in promise
object.
If my handling function returns a value, I'll return a string here.
What does the dot then?
Function return again?
My function returns a string.
To find out.
Let's set a variable equal to the return value of dot then.
And what you'll see is that I can then do this.
I'm going to go ahead and do a new dot then and I'll output to the console.
The value that's returned.
What do you think?
We'll see.
My function returns the string.
The dot then function returns another promise, which I then attach a dot, then to a different promise.
And there it is.
Both thens ran now because of JavaScript's chaining ability.
I can write this differently.
I don't need to set this value.
I can simply attach the next dot then.
To the return value of this dot then.
But it's the same thing.
Some people get confused when they see this.
They think that two handlers have been attached to the original promise, but it hasn't.
One handler has been attached to the original promise and a new handler has been attached to the new
promise returned from then.
So the built in JavaScript promise object has a feature.
When my handler returns a value, it wraps that value up in a promise so that I can continue this approach
to coding my responses to the asynchronous processes completing.
Even though this value wasn't created asynchronously but even better.
What happens if I return a new promise with that other executer function?
The one that I wanted to execute after the first executor function completed?
What do you think should happen?
The second function executes after three seconds.
So three seconds after the first one completes, that other handler completes and we see both results.
Hello, World and how are you?
What's actually happened is very clever.
My function returned a promise.
The then function always returns a promise.
The promise that it returns in this case is connected to or synced up with the promise that I returned.
In other words, when the promise that I returned resolves this new promise created by then resolves
and will have the same value.
As the promise that I created resolves to.
It effectively acts as if I'm adding a dot then to this new promise.
It's not quite the same because it's always adding to a new promise created by the then function.
But effectively this is what happens.
So inside every dot then I could have a new asynchronous process occur, return a new promise, and
the Promise Objects code will make sure that each dot then is only run after the promise resolves.
So we can have a sequence that works properly without getting into a pyramid of doom, we flattened
the pyramid.
We would simply have a sequence of thens, each dot then attached to the new promise generated from
the previous function's return.
Now, in reality, you're not always going to be calling the resolve function yourself.
Remember the point of having a standardized promise object?
Or one of the points was to be able to have utilities and tools that work using the promise object,
and often you'll be using those utilities and tools which make use of promises.
But this helps you understand what they're doing.
Let's take a look at a slightly more realistic example.
In this example, we'll use a feature called Fetch.
Fetch isn't a part of the JavaScript specification, it's its own specification.
It's meant to be used in JavaScript, but implemented by those systems that embed the JavaScript engine
inside of it like a browser.
Fetch goes out and does the work of going out to the Internet and getting a file or some data or whatever
the case is.
In this case, we've made a little Json file called video.
It's an array with one object in it with a title.
Fetch will go and get this information and fetch returns a promise.
But now we know what that means.
The object built into JavaScript that wraps up a concept of how to deal with asynchronous events and
callbacks.
I'll have a dot then and I'll be able to use a special type of object that comes along with fetch for
handling the response a stream of data.
And on that response I can call dot Json, which parses that Json string and converts it into JavaScript
objects and arrays and memory.
And guess what?
Dot Json returns.
You guessed it, a promise.
Now remember, this is just shorthand here.
Using this arrow function for return response dot Json with this execution.
So the shorthand function is returning the results of response dot Json, which is a promise.
So I can call another dot.
Then when this function is executed, that means that I'll have that final in-memory result when the
Json is parsed and I'll output that to the console.
What does that look like?
Just what you would expect.
An array that has one element, an object that has a property called title.
Notice I haven't had to call resolve.
That all happens inside the fetch feature, but we understand what's going on and how to use it, and
it keeps my coding structure flat and easier to read, understand and deal with.
So is that the end of the story?
No, because JavaScript has another way to code to write, to deal with asynchronous events and callbacks.
It depends on promises.
It relies on them, but it makes your coding life even easier.
And it's called async and await.
So how does that work?
Well, you know, before we do that, I'd like to throw in one other piece of information, a thing
that you hear when you hear promises.
Async await being talked about.
The sounds really strange, but is actually a very simple idea.
We've already seen that one of the points of having a standardized promise object is being able to have
this coding structure of dot, then dot, then then sometimes you hear people talk about Venable objects.
So what is that?
A Venable object.
Big word alert.
Venable in objects that Venable simply means basically an object that has a then function.
And this has to do with coding something that goes beyond just the built in promise.
Let's say that we have a set of our own objects, or we're using a utility that has its own set of objects
that act like promises or use them.
We'd still like to be able to use this same coding structure.
Suppose we have some promise and we add a handler on it using Dot, then we know we can chain these
together.
But let's suppose in reality we're using some custom object that isn't really a promise, but we'd like
to keep using this dot, then, then dot, then structure.
Essentially what we're saying is if that object follows the same pattern of how a dot then function
works, it's Venable.
So we can continue to use that same coding practice and it's really no more complicated than that.
All right.
Now that said, and that out of the way.
What about async and await?
So here's our similar code.
Again, I have two functions that will do work.
They'll resolve a promise in each case.
And I have a new function that I've written called Do All the Work, but we have a new keyword in front
of the keyword function async.
Inside this function, we create our new promise and then await that promise with the keyword, await,
then output the results.
We'll do the same again with the do other work promise.
Await that result and output it.
Then we call this function and output to the console that we're done.
Now the council outputs considering these are asynchronous processes should result in done being seen
first, then after one second hello world, then after another second.
How are you?
If these two promises are resolved in order, if the second promise waits for this first promise to
be done when we run this.
That's exactly what we see.
So what just happened?
Well, we know what just happened.
We could already accomplish using promises and then using a coding structure that we could even make
ourselves.
We certainly couldn't add these new keywords to JavaScript.
So these have been added as part of the JavaScript engine.
Therefore, async and await are something that's called syntactic sugar.
Big word alert.
Syntactic sugar are features designed to make writing code more efficient, clean or understandable.
But in reality, don't let you do things that you couldn't already accomplish before in another way.
So while async and await are new features, new language features, new syntax that we can write, they're
just syntactic sugar.
They're there to help make our lives easier, to help our code, be easier to write and debug and to
understand other people's code.
Now, what's really happening when this code is run?
If we think about our execution stack, the global execution context is executed, then that async function
is called.
And when an async function is called, if we think about what's happening as it's executing it, it's
running through those lines until it reaches the keyword await.
So the keyword async tells the engine that we intend to await at least one thing inside this function.
What are we awaiting?
We're awaiting a promise.
Remember we said that async and await rely on depend on promises as a concept.
And this is why.
Await will rely on what it's awaiting to be a promise.
Now, technically, you could await a different value, but it will still ultimately essentially be
wrapped up in a promise, just like the then function does when the engine reaches this.
Await keyword then.
The execution context is paused.
You can think of it as kind of being set off to the side and regular function, invocation and execution
continues.
And that is going to sit there until the promise being waited for resolves either fulfilled or rejected.
So we imagine perhaps some other function being called and other work happening.
And then eventually the promise that the await keyword told the engine we wanted to wait for.
Finishes its work.
When that happens, that paused execution context goes back on the stack.
And at the point we were awaiting function, execution continues.
Only now we have that value that the promise represents.
And so the rest of the execution of the function can continue.
So when we look at our code here, we can see that we're awaiting this promise to be resolved.
That means that the code after it kind of acts like what's inside the handling function passed to then.
We have another promise that is again awaited.
So this function will pause twice waiting for both of these promises to resolve.
And in the proper order.
So why is this so great?
Because it takes our code that's dealing with asynchronous processes and makes it as simple to look
at and write as synchronous code is to write.
And this as coders, makes our lives easier.
This really is a terrific feature of JavaScript.
Now, I'll put a small caveat here.
That async and await depends on promises.
And that means that any code that you're dealing with that uses async functions and await also need
to be smart in dealing with promises.
So one of the dangers of syntactic sugar is that you can just throw on the keyword and think it will
work just like you expect.
But that's not always true.
So be cautious if you're dealing with some code that uses async and await.
Remember what's actually happening under the hood, that the function execution is being paused and
the workflow continues to the rest of your JavaScript program that can help you deal with some unexpected
behaviors, especially if the rest of your code is not dealing with or waiting on promises.
And which one should you use?
Promises or async await?
Well, the answer is if you're using async await, you are using promises and in some circumstances
you'll use both.
Async await is designed to be much easier to read and much easier to write.
So personally, I lean toward using async and await as much as I can, but understanding they're just
a useful way to write code that deals with promises.
We also haven't touched every single aspect of the Promise object, and there's other useful functions
available as well as dealing with errors via catch or try catches inside an async function.
But I hope this video has helped you get a proper mental model of what promises async and await really
are to help you to write your code and debug your code when you have problems.
And that's it.
Promises async and await in the JavaScript programming language.
This has been don't imitate understand.
And I'm Tony Allison.
If you liked this video, please subscribe and also check out the descriptions in the video to look
for coupons to my full length courses.
Happy coding.

**Perfect! Here's a beginner-friendly explanation of Promises, Async/Await with simple code examples for interview prep.**

***

# 🎯 JavaScript Promises, Async/Await - Interview Ready Guide

## 📚 Foundation: First-Class Functions \& Callbacks

### First-Class Functions

**Functions are objects** - can be passed around like values.[^1][^4]

```javascript
// Function as parameter
function runThis(otherFn) {
  console.log("Doing work...");
  otherFn();  // Execute the passed function
}

// Pass function as callback
runThis(function() {
  console.log("Callback executed!");
});

// Output:
// Doing work...
// Callback executed!
```

**Callback = Function passed to another function** to be executed later.

***

## 🎯 The JavaScript Execution Model

### Call Stack (Synchronous)

```javascript
// JavaScript executes ONE thing at a time
function first() {
  console.log("First");
}

function second() {
  console.log("Second");  
}

first();
second();

// Output (predictable order):
// First
// Second
```

**JavaScript is:**

- **Synchronous** - One thing at a time
- **Single-threaded** - One call stack[^4][^1]

***

### Event Queue (Asynchronous)

**Problem:** Some operations take time (network requests, timers).

```javascript
console.log("Start");

setTimeout(function() {
  console.log("After 1 second");
}, 1000);

console.log("End");

// Output:
// Start
// End
// After 1 second  (after 1 second)
```

**How it works:**

```
Call Stack    →    Event Queue    →    Callback Executed
  |                     |                      |
Execute code      External processes      When complete,
synchronously     (setTimeout, fetch)     callback added to queue
```

**setTimeout isn't JavaScript!** It's provided by the browser/Node.js.[^1][^4]

***

## ⚠️ The Callback Hell Problem

### Nested Callbacks (Pyramid of Doom)

```javascript
// ❌ Hard to read and maintain
setTimeout(function() {
  console.log("Step 1");
  
  getPerson(function(person) {
    console.log("Got person:", person);
    
    getLogs(person, function(logs) {
      console.log("Got logs:", logs);
      
      // Getting deeper and deeper...
      // More nesting = harder to read
    });
  });
}, 1000);
```

**Problems:**

1. Hard to read (sideways pyramid)
2. Hard to debug
3. Can't easily add multiple callbacks for same event
4. Can't add callbacks after event completes

***

## 🎯 Promises: The Solution

**Promise = Object representing a future value**.[^8][^4][^1]

### Three States

```javascript
// 1. PENDING - Waiting for work to complete
// 2. FULFILLED - Work completed successfully (has value)
// 3. REJECTED - Work failed (has error)
```


***

### Creating a Promise

```javascript
// Promise takes an executor function
const myPromise = new Promise(function(resolve, reject) {
  
  // Do asynchronous work
  setTimeout(function() {
    const success = true;
    
    if (success) {
      resolve("Hello World");  // Promise fulfilled
    } else {
      reject("Something went wrong");  // Promise rejected
    }
  }, 1000);
  
});

// Using the promise
myPromise.then(function(value) {
  console.log(value);  // "Hello World"
});
```

**Key parts:**

- **Executor function** - Does the actual work
- **resolve()** - Call when successful (fulfilled)
- **reject()** - Call when error occurs (rejected)
- **.then()** - Add handler for when promise fulfills

***

### Simple Promise Example

```javascript
// Create promise
function wait(ms) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Done!");
    }, ms);
  });
}

// Use promise
wait(2000).then(function(result) {
  console.log(result);  // "Done!" after 2 seconds
});
```


***

## 🎯 Promise Chaining - Flatten the Pyramid

### The Power of .then()

```javascript
// .then() ALWAYS returns a new Promise!

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data"), 1000);
  }, 1000);
}

function processData(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data + " Processed"), 1000);
  });
}

// ✅ Chain them!
getData()
  .then(function(data) {
    console.log(data);  // "Data" after 1 second
    return processData(data);  // Return new promise
  })
  .then(function(processed) {
    console.log(processed);  // "Data Processed" after 2 seconds total
  });
```

**Key:** Each `.then()` can return a new promise, and the next `.then()` waits for it.[^6][^4][^1]

***

### Chaining vs Nesting

```javascript
// ❌ WRONG - Still nested (pyramid)
getData().then(function(data) {
  processData(data).then(function(processed) {
    saveData(processed).then(function(result) {
      console.log(result);
    });
  });
});

// ✅ CORRECT - Flat chain
getData()
  .then(processData)      // Return promise
  .then(saveData)         // Return promise
  .then(function(result) {
    console.log(result);
  });
```


***

### Real Example: Fetch API

```javascript
// Fetch returns a Promise
fetch('data.json')
  .then(function(response) {
    return response.json();  // Returns promise
  })
  .then(function(data) {
    console.log(data);  // Final parsed data
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
```

**Arrow function shorthand:**

```javascript
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```


***

## 🎯 Understanding Promise Mechanics

### How .then() Works Internally

```javascript
// Simplified Promise implementation
function CustomPromise(executor) {
  var state = 'pending';  // pending, fulfilled, rejected
  var value = null;       // Future value
  var handlers = [];      // Array of callbacks
  
  // Called when work is done
  function resolve(result) {
    if (state !== 'pending') return;  // One-time only
    
    state = 'fulfilled';
    value = result;
    
    // Run all handlers
    handlers.forEach(handler => handler(value));
  }
  
  // Add handler
  this.then = function(callback) {
    if (state === 'fulfilled') {
      // Already done? Run immediately
      callback(value);
    } else {
      // Still pending? Add to array
      handlers.push(callback);
    }
  };
  
  // Execute immediately
  executor(resolve);
}

// Usage
var promise = new CustomPromise(function(resolve) {
  setTimeout(() => resolve("Hello"), 1000);
});

promise.then(value => console.log(value));  // "Hello"
promise.then(value => console.log(value + "!"));  // "Hello!"
```

**Key insights:**

- Handlers stored in array (multiple callbacks work!)
- If already resolved, handler runs immediately
- One-time operation (can't resolve twice)

***

## 🎯 Thenable Objects

**Thenable = Object with a `.then()` method**.[^1]

```javascript
// Not a Promise, but acts like one
var thenable = {
  then: function(callback) {
    setTimeout(() => callback("Value"), 1000);
  }
};

// Can use promise-like syntax
thenable.then(value => console.log(value));  // "Value"
```

**Why care?** Some libraries have promise-like objects that work with promise syntax.

***

## 🎯 Async/Await: Syntactic Sugar

**Syntactic Sugar = Easier syntax for something you could already do**.[^2][^3][^4]

### The async Keyword

```javascript
// Normal function
function regularFunction() {
  return "Hello";
}

// Async function (ALWAYS returns Promise)
async function asyncFunction() {
  return "Hello";  // Automatically wrapped in Promise
}

console.log(regularFunction());  // "Hello"
console.log(asyncFunction());    // Promise {<fulfilled>: "Hello"}

// Same as writing:
function asyncFunction() {
  return Promise.resolve("Hello");
}
```

**Key:** `async` makes function return a promise automatically.[^3][^2][^4]

***

### The await Keyword

```javascript
// Create promise
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), ms);
  });
}

// ❌ Can't use await outside async function
// const result = await wait(1000);  // SyntaxError!

// ✅ Must use inside async function
async function doWork() {
  console.log("Start");
  
  const result = await wait(1000);  // Pauses here!
  console.log(result);  // "Done" after 1 second
  
  console.log("End");
}

doWork();

// Output:
// Start
// (1 second pause)
// Done
// End
```

**Key:** `await` **pauses** function execution until promise resolves.[^2][^3][^4][^6]

***

### Promises vs Async/Await

**Same code, different syntax:**

```javascript
// Using Promises (.then)
function getData() {
  return fetch('data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

// Using Async/Await (looks synchronous!)
async function getData() {
  const response = await fetch('data.json');
  const data = await response.json();
  console.log(data);
  return data;
}
```

**Benefit:** Async/await looks like regular synchronous code![^4][^6][^2]

***

### Sequential Execution

```javascript
async function doAllWork() {
  console.log("Start");
  
  // Wait 1 second
  const result1 = await wait(1000);
  console.log(result1);  // After 1 second
  
  // Wait another 1 second
  const result2 = await wait(1000);
  console.log(result2);  // After 2 seconds total
  
  console.log("Done");  // After 2 seconds total
}

doAllWork();

// Output timeline:
// Immediately: "Start"
// After 1s: result1
// After 2s: result2
// After 2s: "Done"
```


***

### Error Handling with try/catch

```javascript
// Promises with .catch()
fetch('data.json')
  .then(response => response.json())
  .catch(error => console.error(error));

// Async/await with try/catch
async function getData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Benefit:** Standard `try/catch` instead of `.catch()`.[^6][^2][^4]

***

## 🎯 How Async/Await Works Under the Hood

### Execution Model

```javascript
async function doWork() {
  console.log("1");
  
  await wait(1000);  // ← Function PAUSES here
  
  console.log("2");  // Continues after promise resolves
}

console.log("Start");
doWork();
console.log("End");

// Output:
// Start
// 1
// End
// (1 second later)
// 2
```

**What happens:**

1. `doWork()` starts executing
2. Hits `await` → Function **pauses**
3. Control returns to caller
4. Other code continues (`console.log("End")`)
5. Promise resolves → Function **resumes**
6. Rest of function executes[^2][^4]

***

### Visual: Call Stack Behavior

```
1. Global context executes
2. doWork() called → Added to stack
3. Hits await → doWork() PAUSED and removed
4. Other code runs
5. Promise resolves → doWork() RESUMED and added back
6. Completes and removed
```


***

## 🎯 Complete Examples

### Example 1: Simple Async/Await

```javascript
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: id, name: "John" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ title: "Post 1" }, { title: "Post 2" }]);
    }, 1000);
  });
}

// Using async/await
async function displayUserPosts(userId) {
  try {
    console.log("Fetching user...");
    const user = await getUser(userId);
    console.log("User:", user.name);
    
    console.log("Fetching posts...");
    const posts = await getPosts(user.id);
    console.log("Posts:", posts);
    
    return posts;
  } catch (error) {
    console.error("Error:", error);
  }
}

displayUserPosts(1);

// Output:
// Fetching user...
// (1 second)
// User: John
// Fetching posts...
// (1 second)
// Posts: [{ title: "Post 1" }, { title: "Post 2" }]
```


***

### Example 2: Parallel vs Sequential

```javascript
// ❌ Sequential (slower - waits for each)
async function sequential() {
  const user1 = await getUser(1);  // 1 second
  const user2 = await getUser(2);  // 1 second
  // Total: 2 seconds
}

// ✅ Parallel (faster - both at once)
async function parallel() {
  const [user1, user2] = await Promise.all([
    getUser(1),
    getUser(2)
  ]);
  // Total: 1 second (both happen simultaneously)
}
```

**Use `Promise.all()` for parallel operations**![^4][^6]

***

## ✅ Interview-Ready Summary

### Key Concepts

**Q: What is a Promise?**

```
An object representing a future value.
Has 3 states: pending, fulfilled, rejected.
Standardized way to handle async operations.
```

**Q: What does .then() do?**

```
Adds a callback for when promise resolves.
ALWAYS returns a new Promise.
Enables chaining (flattens pyramid of doom).
```

**Q: What is async/await?**

```
Syntactic sugar for Promises.
Makes async code look synchronous.
async function returns Promise.
await pauses function until Promise resolves.
```

**Q: Difference between Promises and async/await?**

```
Same thing! Async/await uses Promises underneath.
Async/await is just easier to read/write.
```

**Q: Can you use await outside async function?**

```
❌ NO! SyntaxError.
await only works inside async functions.
(Exception: top-level await in modules)
```


***

### Quick Comparison Table

| Feature | Callbacks | Promises | Async/Await |
| :-- | :-- | :-- | :-- |
| **Readability** | ❌ Poor (pyramid) | ✅ Better (chaining) | ✅✅ Best (like sync code) |
| **Error Handling** | Hard | `.catch()` | `try/catch` |
| **Chaining** | ❌ Nested | ✅ `.then()` chains | ✅ Sequential await |
| **Browser Support** | ✅ All | ✅ Modern | ✅ Modern |


***

### Code Pattern Templates

**Promise Pattern:**

```javascript
function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Do async work
    if (success) resolve(value);
    else reject(error);
  });
}

asyncOperation()
  .then(value => /* handle */)
  .catch(error => /* handle error */);
```

**Async/Await Pattern:**

```javascript
async function asyncOperation() {
  try {
    const result = await somePromise();
    return result;
  } catch (error) {
    console.error(error);
  }
}
```


***

## ⚠️ Important Warnings

### 1. Always understand the underlying JavaScript

```javascript
// This looks simple:
async function getData() {
  const data = await fetch('url');
}

// But you MUST understand:
// - Function pauses at await
// - Other code continues running
// - Promise resolves, function resumes
```


### 2. Don't mix await with .then() unnecessarily

```javascript
// ❌ Confusing
async function bad() {
  const data = await fetch('url').then(r => r.json());
}

// ✅ Clear
async function good() {
  const response = await fetch('url');
  const data = await response.json();
}
```


### 3. Remember async/await needs Promises

```javascript
// ❌ Won't work (not a Promise)
async function bad() {
  const result = await 42;  // Works but pointless
}

// ✅ Correct
async function good() {
  const result = await somePromise();
}
```


***

**You're now interview-ready for Promises and Async/Await! 🚀**
<span style="display:none">[^5][^7][^9]</span>

<div align="center">⁂</div>

[^1]: https://javascript.info/async

[^2]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises

[^3]: https://www.w3schools.com/js/js_async.asp

[^4]: https://javascript.info/async-await

[^5]: https://www.dezlearn.com/javascript-promises-async-awaits-callbacks/

[^6]: https://www.freecodecamp.org/news/javascript-promises-async-await-and-promise-methods/

[^7]: https://www.youtube.com/watch?v=9j1dZwFEJ-c

[^8]: https://www.w3schools.com/js/js_promise.asp

[^9]: https://www.sitepoint.com/javascript-async-await/

