//Promise Object represent a value that we will have in future
//after work is completed

//Three States for the work that we need to do
//Promise will be one of these states
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor){
    //initial state
    let state = PENDING;
    //value we are waiting for
    let value = null
    //when the work is complete, we may need to run more than one function or handlers
    let handlers = [];
    //more than one function that handle when something goes wrong
    let catches = [];

    //executor function will give resolve function the value it will receive after doing the work
    function resolve(result){
        //If the state is no longer pending, that means executor has done its work, nothing is required from this function
        if(state !== PENDING) return;
        //if the executor calls resolve function, this means now the state is fulfilled and executor has done its work
        state = FULFILLED;
        //set the value to whatever result the executor has provided
        value = result;
        //execute all the handlers and pass the value to them since executor has completed its work
        handlers.forEach((handler)=>{
            handler(value)
        })
    }

    function reject(err){
        //If the state is no longer pending, that means executor has done its work, nothing is required from this function
        if(state !== PENDING) return;
        //if the executor calls reject function, this means now the state is rejected and executor has done its work and found some error
        state = REJECTED;
           //set the value to whatever error the executor has provided
        value = err;
        //execute all the catches and pass the value to them since executor has completed its work and found errors
       catches.forEach((catchFn)=>{
        catchFn(value)
       })

    }

    //Then function accepts a callback
    //If the promise has resolved, execute the callback immediately, otherwise, push it to the list of handlers(callbacks)
    this.then = function(callback){
        if(state === FULFILLED){
            callback(value)
        } else {
            handlers.push(callback)
        }

        //returns a Promise! helps in chaining the sequence of events
    }

    //Start the executor function and pass it the parameters of what to do if the work is done successfully or there is an error
    executor(resolve,reject);
}


//Executor function that does some work and expects 2 functions to be provided
//as to handle the resolve and reject cases
const doWork = (res,rej) =>{
    setTimeout(()=>{
        //Hello world is what we get back after the executor function is run and we provide it to the resolve function
        res("Hello world")
    },1000)
}

//Call the custom promise and pass the executor function
let someText = new CustomPromise(doWork);

//Add the handler as to what to do when the promise is resolved
someText.then((val)=>{
    console.log("1st log: "+ val);
})

//Add second handler
someText.then((val)=>{
    console.log("2nd log: "+ val);
})


//Add the third handler after some time
setTimeout(()=>{
    someText.then((val)=>{
        console.log("3rd log: "+ val);
    })
},3000)


