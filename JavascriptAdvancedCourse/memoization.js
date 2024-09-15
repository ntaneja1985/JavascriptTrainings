//Implementing Memoization in Javascript
//Memoization is an optimization technique that can reduce
//time-consuming calculations by saving previous input to something called cache and
//returning the result from it

//Similar to useMemo

//Use for caching results of functions

let sum = 0;
const calc = (n)=>{
    for(let i = 0;i<=n;i++){
        sum += i;
    }
    return sum;
}

// console.time()
// console.log(calc(5))
// console.timeEnd()


const memoize= ((func)=>{
    //This object will take the form of key value pairs
    let cache = {};
    return function(...args){
        let n = args[0];
        //For calc(5) check if 5 exists as property(or key) in cache, if yes return the value corresponding to the key(which is the result)
        if(n in cache){
            console.log("cache")
            console.log(cache)
            return cache[n];
        }
        else {
            console.log("calculating first time")
            //execute the function calc(5) and get the result for that particular argument(5 in our case)
            let result = func(n);
            //store the key value pair as argument: result which is 5: 15 in our case
            cache[n] = result;
            console.log(cache)
            return result
        }
    }
})


console.time();
const efficient = memoize(calc);
console.log(efficient(5))
console.timeEnd();

console.time();
//since the argument passed is the same as the previous one i.e. 5, so it will get the result from the cache
console.log(efficient(5))
console.timeEnd();

console.time();
//since the argument passed is new one, so it will compute it and put in the cache
console.log(efficient(6))
console.timeEnd();

console.time();
//since the argument passed is the same as the previous one i.e. 6, so it will get the result from the cache
console.log(efficient(6))
console.timeEnd();

