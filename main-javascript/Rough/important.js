// Note:
// The comma operator evaluates each of the oprands (from left to right) 
// and returns the value of the last operands.
const getA = ()=> 1;
const getB = ()=> 2;
const getC = ()=> 3;
const result = (getA(),getB(),getC());
console.log(result);