// changing background color
const btn = document.querySelector("button");
const body = document.body;
const span = document.querySelector(".current-color");
function genrateRandomColor(){
    const red = Math.ceil(Math.random()*266);
    const green = Math.ceil(Math.random()*266);
    const blue = Math.ceil(Math.random()*266);
     randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}   

btn.addEventListener("click", ()=>{
  // span.textContent= genrateRandomColor();  
  body.style.backgroundColor=genrateRandomColor();
})