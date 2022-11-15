// event bubbling / event propagation
// event capturing
const grand = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;

// event capturing 
child.addEventListener("click", ()=>{
    console.log("Capturing !!! child");
}, true)

parent.addEventListener("click", ()=>{
    console.log("Capturing !!! parent");
}, true)

grand.addEventListener("click", ()=>{
    console.log("Capturing !!! grand");
}, true)

body.addEventListener("click", ()=>{
    console.log("Capturing !!! body");
}, true)


// event bubbling
// child.addEventListener("click", ()=>{
//     console.log("bubbling !!! child");
// })

// parent.addEventListener("click", ()=>{
//     console.log("bubbling !!! parent");
// })

// grand.addEventListener("click", ()=>{
//     console.log("bubbling !!! grand");
// })

// body.addEventListener("click", ()=>{
//     console.log("bubbling !!! body");
// })

// event delegation
// const grand = document.querySelector(".grandparent");
// const body = document.body;
// body.addEventListener("click", (event)=>{
//     console.log(event.target);
// })
