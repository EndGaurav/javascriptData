// Methods
// function inside object is known as method.

// {
    // function()
// }

// const person = {
//     firstName: "Divyansh",
//     lastName: "Jethuri",
//     about: function(){                               //this is the future problem.
//         console.log("My name is Gaurav jethuri");
//     }
// }
// person.about();

// Solution
// const information = function(){
//     console.log(`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
// }
// const person1= {
//     firstName : "Divyansh",
//     lastName: "thakur",
//     age: 18,
//     about: information
// };
// const person2= {
//     firstName : "Gaurav",
//     lastName: "jethuri",
//     age: 18,
//     about: information
// };
// const person3= {
//     firstName : "Nain",
//     lastName: "Singh",
//     age: 18,
//     about: information
// };
// const person4= {
//     firstName : "Akash",
//     lastName: "Yadav",
//     age: 18,
//     about: information
// };
// person1.about()
// person2.about()
// person3.about()
// person4.about()

// What is method ?
// creating function inside the object. 


// let user1 = {
//     firstName: "Gaurav",
//     lastName: "jethuri",
//     about: function(){
//         console.log(`My name is ${this.firstName} ${this.lastName}`);
//     }
// }
// console.log(user1);
// user1.about();
console.log(this);
let personal = function(){
    console.log(`my name is ${this.firstName} ${this.lastName}`);
}

let user1 = {
    firstName: "Gaurav",
    lastName: "jethuri",
    about: personal
}
console.log(user1);
user1.about();