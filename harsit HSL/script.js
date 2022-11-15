const btn = document.querySelector("button");
const body = document.body;
// console.log(body);
btn.addEventListener("click", ()=>{
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        btn.textContent="Dark Mode";
    }
    else{
        body.classList.add("dark-mode");
        btn.textContent="Light Mode";
    }
})