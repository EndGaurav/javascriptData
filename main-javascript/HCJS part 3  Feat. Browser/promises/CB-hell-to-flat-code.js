// callback hell to flat code
const head1= document.querySelector(".heading-1");
const head2= document.querySelector(".heading-2");
const head3= document.querySelector(".heading-3");
const head4= document.querySelector(".heading-4");
const head5= document.querySelector(".heading-5");
const head6= document.querySelector(".heading-6");
const head7= document.querySelector(".heading-7");

function changeFormat(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(element){
            element.textContent= text;
            element.style.color= color;
            resolve();
        }else{
            reject("Oops! Something went wrong!!");
        }
            
        }, time);
    })
}

const repeat = changeFormat(head1, "one", "blue",1000);
repeat.then(()=>{
    return changeFormat(head1, "one", "blue",1000);
}).then(()=>{
    return changeFormat(head2, "two", "green",1000);
}).then(()=>{
    return changeFormat(head3, "three", "grey",1000);
}).then(()=>{
    return changeFormat(head4, "four", "pink",1000);
}).then(()=>{
    return changeFormat(head5, "five", "tomato",1000);
}).then(()=>{
    return changeFormat(head6, "six", "cyan",1000);
}).then(()=>{
    return changeFormat(head7, "seven", "red",1000);
}).catch((error)=>{
    alert(error);
})