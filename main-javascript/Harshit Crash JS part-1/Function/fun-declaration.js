// function declaration
function sum(a, b){
    // console.log(a + b);
}

sum(3,4);
sum(77878, 676)


function firstChar(word){
    return word[0].toLowerCase();
}

// console.log(firstChar("Divyansh"));

// function
// input : Array, target(number)
// output: index of target if target is present in Array.
// if not then return -1. 

// function findTarget(Array, target){
//     for(let Find of Array)
//     {
//         if(Array[Find]=== target){
//             return Array[Find];
//         }
//         else{
//              return -1;
//         }
//     }
// }
const _arr = [22,24,12,343];
console.log(findTarget(_arr, 12));

// function findTarget(Array, target){
//     for(let i =0; i<Array.length; i++){
//         if(Array[i]===target){
//             return i;
//         }
        
//     }
//     return -1
// }
// const arr = [23,43,2,55];
// let sol = findTarget(arr, 55);
// console.log(findTarget(arr,55));
// console.log(sol);
