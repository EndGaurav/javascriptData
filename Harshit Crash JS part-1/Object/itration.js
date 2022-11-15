// How itrate object 
// There is two mathods 
// 1) for in loop
// 2) object.keys

// let person = {name: "Gaurav", age:19,
//             movies: ["Stranger things", "Money heist", "Game changer"]};
let person = {
    1: 1,
    2: 2,
    3: 3
};

// for in loop            
for (let key in person) {
    // console.log(key);
    // console.log(`${key} : ${person[key]}`);
    // console.log(person[key]);

    // console.log(key, ":", person[key]);
}

// object key
Object.keys(person);
Object.values(person);
console.log(Object.keys(person) == Object.values(person));
console.log(Object.values(person));
const _Array = Array.isArray(Object.keys(person))
// console.log(_Array);
// console.log(typeof Object.keys(person));
// console.log(Object.keys(person).length);
for (let check of Object.keys(person)) {
    // console.log(` ${check} : ${person[check]}`)
}
