// decorator function takes function
// and retun function


// trailing debouncing lead the function from the backward.
function debounce(func1, delay){
    let timeoutId; 
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }       
        timeoutId = setTimeout(() => {
            func1.call(this, ...args);        
        }, delay);
    } 
}

const myInput = document.getElementById("input");

function findSuggestion(e){
    console.log("suggestion for",e.target.value);
}

const exactCall = debounce(findSuggestion, 800);

myInput.addEventListener("input", exactCall);