// cloning using Object.assign

const object1 = {
    firstName:"Gaurav",
    LastName: "Jethuri"
}

const object2 ={...object1}; //this is es6 feature
const object3 = Object.assign({}, object1); // javascript old cloning method. 
object1.number= 3435436;
console.log(object1);
console.log(object2);
console.log(object3);