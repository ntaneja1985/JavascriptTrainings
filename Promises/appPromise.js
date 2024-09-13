const doWork = (resolve,reject) =>{
    setTimeout(()=> {
        resolve("Hello World")
    },1000)
};

//want this function to run after doWork has run or the first promise has resolved
const doOtherWork = (resolve,reject) =>{
    setTimeout(()=> {
        resolve("How are you?")
    },3000)
};


let someText = new Promise(doWork);

// //returns another promise
// let SomeOtherText = someText.then((val)=>{
//     console.log("1st Log: " + val);
//     return "How are you"
// })

// SomeOtherText.then((val)=>{
//     console.log(val)
// })

//chain the promises
//when the handler returns a value, it wraps up that value inside a promise
someText.then((val)=>{
        console.log("1st Log: " + val);
        //return "How are you"
        return new Promise(doOtherWork)
    }).then((val)=>{
        console.log(val)
    })

