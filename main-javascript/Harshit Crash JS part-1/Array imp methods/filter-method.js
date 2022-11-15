// Filter method 
// Useful
// Rule 1. filter function must always return a boolean value(True/false).
// it also provide the output in New Array.

const numbers = [1,3,4,5,23,22,18];

  
let even_number= numbers.filter((even)=>{
    return even%2==0;
});

console.log(even_number);