// keypress event 
// mouseover event
const body = document.body;
const learn = document.querySelector(".btn-headline");
// body.addEventListener("keypress", (event)=>{
//     console.log(event.key);
//     // learn.style.width="60vw";
// })

learn.addEventListener("mouseover", (event)=>{
    console.log("mouseover evnet occured");
    // learn.style.width="60vw";
})

learn.addEventListener("mouseleave", (event)=>{
    console.log("mouseover event leaved!");
    // learn.style.width="60vw";
})
