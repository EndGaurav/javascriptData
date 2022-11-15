// Objects : reference type
// Arrays are good but not sufficient
// for real world data
// objects stores key value pairs
// objects don't have index
// key also known as property
// key is string by default
// key is treated as index in object.
// Creatig objects litrals
let person = {
  name: "Gaurav",
  age: 19,
  movies: ["Stranger things", "Money heist", "Game changer"],
};
console.log(person);

// How to access data from object
// console.log(person.name);
console.log(person["name"]);
// console.log(person.age);
console.log(person["age"]);
person.movies.push("Squid game");
console.log(person.movies[3].toUpperCase());

// How to add key value pair in the object
person.gender = "male";
console.log(person);
