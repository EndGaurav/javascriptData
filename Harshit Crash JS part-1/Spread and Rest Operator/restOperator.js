// packs the elements
// mostly uses in function
// In Object destructuring
// when we don't have a idea of how many arguments can be passed for a particular operation
// there we use ...rest operator 
// default value of this is Array[].
// rest parameter will always be last parameter of the function. 
function sum(num1, ...numbers , num2) {
    for(let num of numbers) {
        return num;
    }
}

console.log(sum(1,2,3,4));