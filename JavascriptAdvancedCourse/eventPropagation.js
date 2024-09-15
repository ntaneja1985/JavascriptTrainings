//Event Bubbling & Capturing
//Stop Propagation, Immediate Propagation & Prevent Default

var div = document.querySelector("div");
var button = document.querySelector("button")


//Event Bubbling
//Here we are registering the event listener on the div
//There is no event listener on the button inside the div
//But the event bubbled up from the child button to the parent div
//Inside the parent div, it found an event listener and then that event listener was executed

div.addEventListener("click",()=>{
    console.log("div")
})

button.addEventListener("click",(event)=>{
    //event.stopPropagation()//this will stop the propagation and will print button only,event will not be bubbled up
    console.log("button")
})
//Output is button, div

//Event Capturing happens from parent to child
// div.addEventListener("click",()=>{
//     console.log("div")
// },true)


button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation()
    //event.stopPropagation()//this will stop the propagation and will print button only,event will not be bubbled up
    console.log("button1")
})

//Stop Propagation stops the propagation of events from child to parent
//Stop Immediate Propagation is useful in scenarios where we have 2 event listeners on the same element
//Stop Immediate Propagation ensures that when the 2 event listeners on same event listener have executed, then event propagation is stopped


//Prevent Default helps us to skip the default behaviour of certain elements
//For example, clicking on anchor tag,takes us to a new page pointed to by it's href
//If we do event.preventDefault() we stop its default behaviour.
var anchor = document.querySelector("a");
anchor.addEventListener("click",(event)=>{
    console.log("Prevent the anchor tag from going to new page")
    event.preventDefault();
})