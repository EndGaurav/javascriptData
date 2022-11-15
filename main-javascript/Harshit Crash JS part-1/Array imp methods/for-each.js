// for each method
// const Number= [33,44,2,5,4];
// function multiply(number, index){
//     console.log(`The multiplication of ${index} index value is ${number*2}`);
// }

// // In this forEach is passing the arguments.
// Number.forEach(multiply);

// Sometimes we use the anonymous functon inside the forEach.
// function without the name is known as anonymous function.
// lets see example.
// Number.forEach(function(number, index){
    // console.log(`The index is ${index} and the value at this ${index} is ${number}`);
// });

// while declareing function we pass the parameter.
// while calling the function we pass the arguments.

// Now multipling Arrays value by 2. 
// Number.forEach(function(number, index){
    // console.log(`The index is ${index} and the value at this ${index} is ${number}`);
    // console.log(`The muliplication of ${index} is ${number*2}`);
// });

let num = 1; 
while(num<=10){
    if(num == 4){
        // console.log(num);
        // console.log("i am 4");
        continue;
        console.log("i skiiped");
    }
    console.log(num);
    num++;  
}
console.log(outside);

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   console.log(i);
// }