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

//async await are syntatic sugar over promises
async function doAllTheWork(){
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1)

    const otherText = new Promise(doOtherWork);
    const text2 = await otherText;
    console.log(text2)
}

const work = doAllTheWork();
work.then(()=>{
    console.log("Done")
})