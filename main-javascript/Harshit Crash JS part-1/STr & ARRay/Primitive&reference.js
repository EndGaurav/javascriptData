//Primitive type v/s Reference type
let num1 = 32;
let num2 = num1 ;
console.log(num1);
console.log(num2);
num1++;
console.log("After increamenting the num1 value");
console.log(num1);
console.log(num2);

//Stack memory: The values are partly dived. Individual has their own value.

let _sting = ("Singh");
let $string = _sting;
console.log(_sting);
console.log($string);
_sting= "jethrui";
console.log("After changing String value");
console.log(_sting);
console.log($string);

// Here is only stack memory which has individual values


// Reference type
let _Array = [1, 2, 4];
let otherArray= _Array;
console.log(_Array);
console.log(otherArray);
_Array.unshift(8,3);
_Array.shift();
console.log("Array after change");
console.log(_Array);
console.log(otherArray);

// In reference types there is two memory 
// 1. Heap memory
// 2. Stack memory
// There is also a pointer which is in stack memory 

