// look on notebook
// Synchronous programming vs Asynchronous programming.
// js is synchronous programming.
// Synchronous programming single threaded.
// step by step execution known as synchronous.

// console.log("Script Start");
// for(let i =1; i<=10000; i++){
//     console.log("number are rendering!");
// }

// console.log("Script End");

console.log("Start script");
function myTime(){
for(let i = 1; i<=20; i++){
    console.log(i);
    }
}
const id = setTimeout(myTime, 1);
// console.log("The id is:", id);
// clearTimeout(id);
for(var i=0; i<+100; i++){
    console.log(i);
}
// we can assign anonymous function also. 
console.log("Script end");