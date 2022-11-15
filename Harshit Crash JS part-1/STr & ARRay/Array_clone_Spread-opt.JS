// How to Clone Array
// by deault spread operator store the value in new array.

// How to concatenate two arrays

let $array= [12,23,3];
// let _Array= $array;
// let _Array= [12,23,3]; but this is not a idial way
// let _Array= $array.slice(0)  First way to clone array
// let _Array = [].concat($array);  Second way 

// Spread Operator
let _Array = [...$array] // Third way
// console.log($array===_Array);
$array.unshift(2);
// console.log($array);
// console.log(_Array);

// Question : clone the Array after that and some more array items in it ? 
let num1 = ["Java", "DSA"];
// let num2 = num1.slice(0).concat(["C++", "HTML"]);
// let num2 = [...num1].concat(["HTML", "CSS"]);
let num2 = [...num1, "React", "Angular"];
console.log(num1===num2);
console.log(num2);


