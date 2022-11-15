// Prototype is object.
// proto is reference

// const userMethods= {
//     about: function(){
//       console.log (`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`)
//     },
//     isage: function(){
//         console.log(this.age >= 18);
//     },
//     hobby: function(){
//         console.log("My hobby is playing cricket");
//     }
// }

function user_obj(firstName, lastName, age, email, address, favLang) {
  const user = Object.create(user_obj.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  user.address = address;
  user.favLang = favLang;
  return user;
}
console.log(user_obj.prototype);
user_obj.prototype.about = function () {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`
  );
};
user_obj.prototype.isage = function () {
  console.log(this.age >= 18);
};
user_obj.prototype.hobby = function () {
  console.log("My hobby is playing guitar");
};
user_obj.prototype.myFavLang = function () {
  console.log(`My fav lang is ${this.favLang}`)
}

const object1 = user_obj(
  "Gaurav",
  "jethuri",
  19,
  "gauravsinghjethuri2002@gmail.com",
  "Uttrakhand",
  "Javascript"
);
const object2 = user_obj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");
object1.about();
object1.hobby();
object1.myFavLang();
console.log(object1)