//Async JS Programming
//Callbacks, Promises, Async and Await

const datas = [
    {
        name: "Nishant",
        profession:"Software Engineer"
    },
    {
        name: "Nalin",
        profession:"Software Engineer"
    }
]

function getDatas(){
    setTimeout(()=>{
        let output = "";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

//Technique 1: Use Callback, here getdatas is provided as a callback
function createData(newData,callback){
    setTimeout(()=>{
        datas.push(newData);
        //run the callback
        callback();
    },2000)
}
//Pass the getDatas function as a callback
//createData({name:"Vivek",profession:"Software Engineer"},getDatas)


//Promises
function createData2(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData);
            let error = false;
            if(!error){
                resolve();
                console.log("Promise resolved")
            } else{
                reject("Some error occurred")
            }
        },2000)
    })
}

// createData2({name:"Vivek",profession:"Software Engineer"})
// .then(getDatas)
// .catch((err)=>console.log(err))

//using async await
async function start(){
    await createData2({name:"Vivek",profession:"Software Engineer"});
    //Run after createData2 promise has resolved
    console.log("Getting all the data")
    getDatas();
}
start();


