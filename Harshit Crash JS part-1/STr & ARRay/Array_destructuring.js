// Array Destructuring. new ES6 
const player = ["Virat" , "Rahul", "Rohit", "Dhoni"];
let name1 = player[0];
let name2 = player[1];
console.log(name1);
console.log(name2);

let [kohli, KL , ...myNewArray] = player;
Rishabh = "Pant";
// let myNewArray = player.slice(2);
// console.log("Kohli ", kohli);
// console.log("KL", KL);
// console.log(myNewArray);
// its called array destructuring 