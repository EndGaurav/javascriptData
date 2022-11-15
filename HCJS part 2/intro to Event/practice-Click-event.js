// practicing click event.
const btn = document.querySelectorAll(".my-buttons button");
btn.forEach(button  => {
     button.addEventListener("click", (event)=>{
         event.target.style.backgroundColor="grey";
         event.target.style.color= "black";
         event.target.style.fontSize= "400" ; 
         event.target.style.width= "8rem";
         event.target.style.height= "3rem";
         event.target.style.fontWeight= "bold";
     })
})