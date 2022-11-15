// click event on multiple button.
const AllBtn = document.querySelectorAll("button");
// console.log(AllBtn);
// for(let i =0; i<AllBtn.length; i++){
//     AllBtn[i].addEventListener("click", function(){
//         console.log(this.textContent)
//     })
// }

// for(let btn of AllBtn){
//     btn.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

AllBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
                console.log(this.textContent);
            })
})