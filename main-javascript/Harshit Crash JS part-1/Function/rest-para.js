// rest parameter
const $number = (a,b,...c)=> {     
    console.log(`a is ${a}`)    
    console.log(`b is ${b}`)
    console.log(`c is `, c)
}

$number(32,34,4,343,3,2,)

// const _numbers = (...numbers)=> {
//     let sum = 0;
//     for(let number of numbers){
//         sum = sum + number;
//     }
//     console.log(sum);
// }
// _numbers(32,4,3,12,3,3);

let sumOfNumbers = (...numbers)=>{
    let sum = 0;
    for(let number of numbers){
        sum = sum + number; 
    }
    console.log(sum);
}                 

sumOfNumbers(2,3,5,6,7,8,22);