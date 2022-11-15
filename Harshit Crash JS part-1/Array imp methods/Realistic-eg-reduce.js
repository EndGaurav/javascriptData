// Realistic example of Reduce method.

const numbers = [1,3,4,5,6,345];

const sum = numbers.reduce((initial_number, number)=>{
    return(initial_number + number);
}, 0)

console.log(sum);