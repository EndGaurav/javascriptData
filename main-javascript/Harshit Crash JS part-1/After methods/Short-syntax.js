// const person = {
//     firstName: "Divyansh",
//     lastName: "Jethuri",
//     about: function(){                               
//         console.log(`My name is ${this.firstName} ${this.lastName}`);
//     }
// }
// person.about();

// we can also write without function keyword.

const person = {
    firstName: "Divyansh",
    lastName: "thakur",
    about(){                               
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}
person.about();
