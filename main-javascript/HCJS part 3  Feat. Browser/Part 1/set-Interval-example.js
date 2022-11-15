const body = document.body;
const btn = document.querySelector("button");
const btn2 = document.querySelector("#btn2");

const intervalId = setInterval(()=>{
    const red = Math.ceil(Math.random()*266);
    const green = Math.ceil(Math.random()*266);
    const blue = Math.ceil(Math.random()*266);
     body.style.backgroundColor= `rgb(${red},${green},${blue})`;
},1000)

// console.log(intervalId)
btn.addEventListener("click", ()=>{
    clearInterval(2);
    btn.textContent= body.style.backgroundColor;
   
})

btn2.addEventListener("click", ()=>{
    setInterval(()=>{
        const red = Math.ceil(Math.random()*266);
        const green = Math.ceil(Math.random()*266);
        const blue = Math.ceil(Math.random()*266);
         body.style.backgroundColor= `rgb(${red},${green},${blue})`;
    },1000)
})

