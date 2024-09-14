//Call Apply Bind in Javascript
//Pass the context of "this" parameter in call,apply and bind

//Problem Statement
let userDetails = {
    name: "Nishant Taneja",
    age:39,
    designation:"Software Engineer",
    printDetail: function(){
        console.log(this)
        console.log(this.name,this.age,this.designation)
    }
}

let printDetails2 = function(){
    console.log(this)
    console.log(this.name);
}

let printDetails3 = function(city,state,country){
    console.log(this)
    console.log(this.name,city,state,country);
}


let userDetails2 = {
    name: "Nalin Taneja",
    age:36,
    designation:"Software Engineer 2",
}

//function borrowing
userDetails.printDetail.call(userDetails);

//usage of bind
//makes a copy of existing function but with the context of "this" parameter passed in
//in call and apply we make direct function call, but in bind we make a copy of the function
//and use it whenever we need to use it
var newFunc = printDetails2.bind(userDetails);
newFunc();

//usage of apply
//difference in apply and bind is the way in which we pass parameters
//in apply we can pass arguments as an array list, whereas in call we have to 
//pass arguments one by one
printDetails3.apply(userDetails2,["Chandigarh","Punjab","India"])
