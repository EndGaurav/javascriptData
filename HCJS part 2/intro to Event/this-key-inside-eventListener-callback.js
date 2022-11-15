// this keyword inside eventlistenner callback
// this keyword

const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    console.log(this);
})