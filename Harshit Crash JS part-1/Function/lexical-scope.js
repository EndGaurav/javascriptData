// lexical scope
let myVar = "value 1";

const myApp = () =>{
    const showUp = ()=>{
        // const myVar = "value 4"
        console.log("Show me on the console!", myVar);
    }

    console.log(myVar);
    showUp();
}
// console.log(myVar);
myApp();


// block scope vs function scope

// let and const are block scope 
// var is function scope

{
    // block 1 
    let _app = "netflix";    
    console.log(_app);
}
{
    // block 2
    let _app = "Stranger things";   
    console.log(_app)
}

// global scope 
let _app = "Money heist";
console.log(_app);

// we can access var from anywhere. 
var _watch = "watch me in global!";
const watch = () =>{
    if(true)
    {
        let _watch = "watch me!";
        console.log(_watch);
    }
    console.log(_watch);
} 
watch();