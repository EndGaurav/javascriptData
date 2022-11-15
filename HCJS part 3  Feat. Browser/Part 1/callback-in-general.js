// basically understanding of callbacks.
// function myfun(callback){
    // console.log("This is calling function 1");
    // callback();
// }

// myfun(()=>{
//     console.log("This is callling function 2");
// })

function gettingTwoNumberAndAdd(number1, number2, callback, wronginput ){
    if(typeof number1 === "number" && typeof number2 === "number"){
        callback(number1, number2)
    }
    else{
        wronginput();
    }
}

// function AddNumber(num1, num2){
    // console.log(num1 + num2);
// }

gettingTwoNumberAndAdd(4,6, (num1, num2)=>{
    console.log(num1 + num2)
}, ()=>{
    console.log(`Please pass the only number datatype. Not other datatype!`);
});