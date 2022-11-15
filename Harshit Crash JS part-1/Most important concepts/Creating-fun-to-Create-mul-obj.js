// Crating function to create multiple object.
// known as proto, prototype



function user_obj (firstName, lastName, age, email, address){
    const user= {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about= function(){
       return(`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
    };
    user.isage= function(){
        return this.age >= 18;
    };
    // console.log(user1);
    return user;
}

let sauObj = user_obj("Saurabh", "pal", 20, "fnfvjvnfkv", 908349);
console.log(sauObj);
const object1 = user_obj("Gaurav", "jethuri", 19, "gauravsinghjethuri2002@gmail.com", "Uttrakhand");
console.log(object1);
const about = object1.about();
console.log(about);
const isage = object1.isage();
console.log(isage);



// const object2 = user_obj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");
// console.log(object2);
// const about2= object2.about();
// console.log(about2);
// const isAge = object2.isage();
// console.log(isAge);


// REVISING 
function objFunc (firstName, lastName, number, id){
    const user1 = {};
    user1.firstName = firstName;
    user1.lastName = lastName;
    user1.number = number;
    user1.id = id;
    user1.details= function(){
        return(`Name is ${this.firstName} ${this.lastName} Number is ${this.number} and id ${this.id}`);
    }   
    return user1;
}

const Object1 = objFunc("Gaurav", "Jethuri", 3535795, "01");
console.log(Object1);
let objFuncCall = Object1.details();
console.log(objFuncCall);