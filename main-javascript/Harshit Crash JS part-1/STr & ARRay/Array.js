// Array :- [Ordered collection of items] 
// reference datatype
// All reference type are object in js

let cricket= ["Virat", "Rohit", "Rahul"];
let obj= {}; // Object literal
console.log(cricket);
cricket[2]= "Siraj";
console.log(cricket);
cricket[3]= "Pant";
console.log(cricket);
console.log(typeof cricket);
console.log(Array.isArray(cricket)); // we use this just for checking that is array or not.
console.log(typeof obj);
console.log(Array.isArray(obj));