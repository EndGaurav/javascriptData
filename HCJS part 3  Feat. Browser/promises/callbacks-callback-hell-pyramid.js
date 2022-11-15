// callbacks , callback hell and the pyramid of doom.
// ashnchronous programming.
// const head1= document.querySelector(".heading-1");
// const head2= document.querySelector(".heading-2");
// const head3= document.querySelector(".heading-3");
// const head4= document.querySelector(".heading-4");
// const head5= document.querySelector(".heading-5");
// const head6= document.querySelector(".heading-6");
// const head7= document.querySelector(".heading-7");


// setTimeout(() => {
//     head1.textContent= "one"
//     head1.style.color="violet";
//     setTimeout(() => {
//         head2.textContent= "two"
//         head2.style.color="purple";
//     }, 1000);
//     setTimeout(() => {
//         head3.textContent= "three"
//         head3.style.color="red";
//     }, 2000);
//     setTimeout(() => {
//         head4.textContent= "four"
//         head4.style.color="pink";
//     }, 3000);
//     setTimeout(() => {
//         head5.textContent= "five"
//         head5.style.color="green";
//     }, 4000);
//     setTimeout(() => {
//         head6.textContent= "Six"
//         head6.style.color="green";
//     }, 5000);
//     setTimeout(() => {
//         head7.textContent= "Seven"
//         head7.style.color="brown";
//     }, 6000);
// }, 1000);


// callback hell
// this is tough to understad that's why we learn promises 
// setTimeout(() => {
    // head1.textContent= "one"
    // head1.style.color="violet";
//     setTimeout(() => {
//         head2.textContent= "two"
//         head2.style.color="purple";
//         setTimeout(() => {
//             head3.textContent= "three"
//             head3.style.color="blue";
//             setTimeout(() => {
//                 head4.textContent= "four"
//                 head4.style.color="grey";
//                 setTimeout(() => {
//                     head5.textContent= "five"
//                     head5.style.color="green";
//                     setTimeout(() => {
//                         head6.textContent= "six"
//                         head6.style.color="red";
//                         setTimeout(() => {
//                             head7.textContent= "seven"
//                             head7.style.color="tomato";
//                         }, 1000);
//                     }, 2000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

const head1= document.querySelector(".heading-1");
const head2= document.querySelector(".heading-2");
const head3= document.querySelector(".heading-3");
const head4= document.querySelector(".heading-4");
const head5= document.querySelector(".heading-5");
const head6= document.querySelector(".heading-6");
const head7= document.querySelector(".heading-7");
function changeFormat(element, text, color, time, secondText){
    setTimeout(() => {
        if(element){
        element.textContent= text;
        element.style.color= color;
    }
       if(secondText){
        secondText();  
       } 
    }, time);
}

changeFormat(head, "one", "grey", 1000, ()=>{
    setTimeout(() => {
        head2.textContent="two";
        head2.style.color="red";
    }, 2000);
} );