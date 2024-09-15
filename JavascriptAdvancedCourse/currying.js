//Currying Function in Javascript

// Currying refers to the process of transforming a function with multiple arity into the same function with less arity. 
// The curried effect is achieved by binding some of the arguments to the first function invoke, 
// so that those values are fixed for the next invocation.

function Addition(a,b,c){
    return a + b + c;
}

let res = Addition(2,3,4);
console.log(res)

function Addition2(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

//Addition(2) returns a function, then to that function we pass 3 and it again returns a function
//Then to the final function we pass 4 and get our result
//It internally utilizes closures concept
let res2 = Addition2(2)(3)(4)
console.log(res2)


let userObj = {
    name: "Nishant",
    age: 39
}

function userInfo(obj){
    return function(val){
        return obj[val]
    }
}
//Process of writing a complex function in a simple way. Rather than writing all the logic in
//one function we return multiple functions and execute them in sequence like this:
let res3 = userInfo(userObj)("name");
console.log(res3);


//Infinite Currying in Javascript
function add(a){
    return function(b){
        return function(c){
            return function(){
                return a + b + c;
            }
        }
    }
}

//Infinite Currying Implementation
//Internally uses recursion
function add2(a){
    return function(b){
        if(b) return add2(a+b);
        return a;
    }
}

console.log(add2(4)(5)(7)())


