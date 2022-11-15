// inner html
const middle = document.querySelector(".headline");
console.log(middle.innerHTML);
middle.innerHTML= "<h2>I have changed the inner html</h2>";
middle.innerHTML += "<button class= \"btn\">Learn More</button>"
// \" -----------------> "
console.log(middle.innerHTML);