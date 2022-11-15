let btn = document.querySelector("button");
let body = document.body;
let showColorNumber = document.querySelector("p");
let randomColor = ()=>{
    // rgb(255, 255, 33)
    let red = Math.ceil(Math.random()*266);
    let green = Math.ceil(Math.random()*266);
    let blue = Math.ceil(Math.random()*266);

    let randomNumberColor = (`rgb(${red},${green},${blue})`); 
    return randomNumberColor
}
btn.addEventListener("click", function(e){
    body.style.backgroundColor = randomColor();
    showColorNumber.innerHTML = randomColor();
})