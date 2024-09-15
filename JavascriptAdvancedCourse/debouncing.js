//Avoid unwanted function calls using Debouncing and Throttling
//Take the example of search functionality
//If we search for laptop in flipkart, the suggestions
//dont come immediately, there is a time lag after which
//the results of our search such as laptop is displayed
//This is known as Debouncing
//Make use of setTimeout() to achieve this
//Debouncing is a performance optimization technique to reduce the rate at which events trigger functions.
let counter = 0;
function getData(){
    console.log("Fetching Data ",counter++)
}



const myDebounce = (callback,timeout)=>{
    let timer;
    return  function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
            //Call the required function after a specific interval
            callback();
        },timeout)
    }
}

//It will have 2 parameters: the function to do the computation and the time limit after which it should be called
const debounceFn = myDebounce(getData,1000);