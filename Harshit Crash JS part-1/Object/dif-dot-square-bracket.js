// difference between dot and bracket notation
const key = "gmail";
const key2 = "gmail";
const key3 = "number";
let person = {
  name: "Gaurav",
  age: 19,
  "movies name": ["Stranger things", "Money heist", "Game changer"],
};

console.log(person["movies name"]);
// the diff is we cannot accnes two words name
// so that's why we use square brackets

person[key] = "gauravsinghjethuri2002@gmail.com";
person[key2] = "singhnain1608@gmail.com";
person[key3] = 82493395893;
console.log(person);
