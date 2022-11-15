// Map method is also a Array method
// Most important method.
// Rule 1. Always return the value in fuction whiling working with map method, don't do console.log().
// because map method output always come in New Array form. 
const digits =[2,3,5,6,7];

const square = function(number){
    return(number*number);
    // console.log(number*number);
}

// const SquareNumber=  digits.map(square);
// console.log(SquareNumber);
console.log(digits.map(square))
// main ye bhi nahi kehra hoon.
// digits.map(square);

