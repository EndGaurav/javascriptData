// Spread operator in array and object

const Array = [..."2334445"];
console.log(Array);

// Spread operator works same like Array in objects 
const object = {
    name1 : "Gaurav", name2 : "Sourav", name3 : "Sachin"
}

const newobject = {...object, name3 : "Chirag"};
console.log(newobject);

const _newobj = {..."8509450"};
console.log(_newobj);