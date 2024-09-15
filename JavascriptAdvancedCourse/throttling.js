
//Throttling is a performance optimization technique ot prevent rapid clicks by the user
//When the user clicks on a submit button, we introduce a delay before which the function to process the click event is invoked
//This is done with help of setTimeout function
//Similar to debouncing

const myThrottle = (callback,timeInterval) =>{
    return function(...args){
        document.getElementById("myId").disabled = true;
        setTimeout(()=>{
            callback()
        },timeInterval)
    }
}

const newFunc = myThrottle(()=>{
    document.getElementById("myId").disabled = false;
    console.log("User Clicked...")
},2000)
