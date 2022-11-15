let body = document.body;
let container = document.querySelector(".container");
let button = document.querySelector("button");

container.addEventListener("click", ()=>{   
    console.log("container is clicked");
}, true)
button.addEventListener("click", ()=>{   
    console.log("button is clicked");
}, true)
body.addEventListener("click", ()=>{   
    console.log("body is clicked");
}, true)