// Debouncing takes the function as input 
// and aslo return the fuction
let btn =  document.getElementById("btn");
// console.log(btn);

// leading debouncing leads the function from the front 
const leadingDebouncing = (func, delay)=>{
    let timeoutId;
    return function(...args){
        if(timeoutId === undefined){
            func(this, ...args);
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = undefined;
        }, delay);
    }
}

function handleClick(){
    console.log("Cart Added");
}

let exactLeadingHandle = leadingDebouncing(handleClick, 500);
btn.addEventListener("click", exactLeadingHandle);