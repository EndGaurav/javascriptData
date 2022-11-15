// Traversing DOM tree
// const rootNode= document.getRootNode();
// console.log(rootNode.childNodes[0]);
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNode);
// const headNodeElement = htmlElementNode.childNodes[0]; 
// const textNodeElement = htmlElementNode.childNodes[1]; 
// const bodyNodeElement = htmlElementNode.childNodes[2]; 

// console.log(headNodeElement.nextSibling);
// console.log(headNodeElement.nextElementSibling);  //important
// console.log(textNodeElement);
// console.log(bodyNodeElement);


const h1 = document.querySelector("h1");
const body = h1.parentElement.parentElement;
body.style.backgroundColor= "grey";
const div = h1.parentNode;
div.style.color= "red";
div.style.backgroundColor= "black";

// Some important things 
// we can direct select the body.
const $body = document.body;
console.log($body);

const head = document.head;
console.log(head);

// we can use querySeletor at anyone.
const $h1= $body.querySelector("h1");
// console.log($h1);

console.log($body.querySelector("p"))

// children property
const $div = document.querySelector(".container");
console.log(div.children);
