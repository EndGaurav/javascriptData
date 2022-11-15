// closures 
// jab return function return hota hai tab wo apne local memory ke variables ko 
// sath lekar return hota hai.

// fact 
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
// function myFunction() {
//     a = 4;
//   }
function outerFunction(){
    function innerFunction(){
        // console.log("hello world");
    }
    return innerFunction();
}

outerFunction()

// Example 2 
function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}
const ans = hello("arg");
ans()