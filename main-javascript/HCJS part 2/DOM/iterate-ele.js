// multiple element using by querySelectorAll.
// multiple element using by className.

// we cannot use for each method to iterate the html collection.
// let elements = document.getElementsByTagName("a"); // htmlColection
// console.log(elements)
// simple for loop
// for of loop

// for( let i=0; i<=elements.length; i++){
//     elements[i].style.color= "blue";
//     elements[i].style.backgroundColor= "black";
//     elements[i].style.fontWeight="bold";
// }

// for(let element of elements){
//     element.style.color= "blue";
//     element.style.backgroundColor= "black";
//     element.style.fontWeight="bold";
// }

// Converting html collection into Array. 
// let Array_elements = Array.from(elements); //important
// console.log(Array_elements);
// Now we can use for each loop.
// Array_elements.forEach((elements)=>{
//     elements.style.color= "blue";
//     elements.style.backgroundColor= "black";
//     elements.style.fontWeight="bold";
// })

const list = document.querySelectorAll("a"); //node list 
console.log(list);
// loops can be use.
// simple for loop
// for of loop
// for each loop

list.forEach((list)=>{
    list.textContent= "for each loop";
    list.style.color= "blue";
    list.style.backgroundColor= "black";
    list.style.fontWeight="bold";   
})

// checking
const isArray = Array.isArray(list);
console.log(isArray);

// converting into Array
const $Array = Array.from(list);
console.log($Array);
const _isArray = Array.isArray($Array);
console.log(_isArray);