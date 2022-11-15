// Sort method.
// its sort the array according to their ascii value.  
// whether it is number or alphabet.
// Ascii - American Standard Code for Information Interchange.

const number= [22,4,44,90,100];
number.sort((a, b)=>{
    return a-b; // for accending order.
    // return b-a // for decending order.
});
console.log(number);

// 22,4
// a - b = if we get positive number then b will render first and a will render after that. 
// vice versa if value get neagtive.
// output Array(5) [ 4, 22, 44, 90, 100 ]

