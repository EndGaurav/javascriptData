// lets have a look on array for some points 
let arr = [1,23,43];
// arr.every() // like every method we can use many more like this 
// question is that from where it get those method internally ?
// so internally our array asign like following 
let arr1 = new Array([1,23,4,5])
console.log(arr1);

// now we that new keyword is object and array is a function internally 
// And every function is collection of function + prototype/free space
// so we can the prototype of the array function
console.log(Array.prototype)
// so in array prototype we get those methods.
// that's how array works
