//Event objects
// jab bhi kisi bhi element pe event listener add hoga. 
// js Engine -----> line by line code execute karta hai.
// browser ------> js Engine + extra features.
// browser ------> js Engine + webAPI.

// jab browser ko pta chala ki user event perform kiya 
// jo hum listen kar rahe hai 
// brower do two work.
// 1) call function jo hai wo js Engine ko dega.
// 2) Callback function ke sath browser jo event listener hua hai uski information bhi dega.
// wo info. browser object ki form m rakhta hai.

// const btn1 = document.querySelector("#one");
// btn1.addEventListener("click", function(event){
//     console.log(event)
// })

const AllBtns = document.querySelectorAll("button");
for(let allBtn of AllBtns){
    allBtn.addEventListener("click", (event)=>{
        // console.log(event.currentTarget)
        console.log(event.target);
    })
}