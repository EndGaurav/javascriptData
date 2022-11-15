// default parameter 

// console.log(324 + undefined);
// following happens before ES6 (2015)
const add =(a, b) => {
    if(typeof b=== "undefined"){
        b = 2;
    }
    console.log(a + b);
}
add(8);

// After ES6
// this is how we declare the default parameter.
const _add = (a, b=6)=>{
    console.log(a + b);
}
_add(34);