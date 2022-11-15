// How to get the dimension of the element.
const getDim = document.querySelector(".header");
const height= getDim.getBoundingClientRect().height;
console.log(height);