// wheel event. 

// let body = document.body;
// console.log(body);
// window.addEventListener("wheel", (event)=>{
//    if(event.deltaY < 0){
//        console.log("scrolling up");
//        body.style.backgroundColor = "red";
//    } 
//    else if(event.deltaY > 0){
//        console.log("scrolling down");
//        body.style.backgroundColor = "pink";
//    } 
// })

// scroll event.

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 500){
        document.body.style.backgroundColor = "pink";
    }
  else if(window.pageYOffset < 800){
        document.body.style.backgroundColor = "red";
        console.log("heloo");
    }
})