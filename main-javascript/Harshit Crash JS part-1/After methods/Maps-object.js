// Maps
// maps is an iterables
// Store data in ordered fashion.

// Store key value pairs like object.
// duplicate key are not allowed like object.

// difference between map and object.
// object can only have string and symbols as a key.

// in map use can use anything as a key. 
// like object, array, number and string.



// Object litrals
// key --> String. 99% in strings
// key --> symbols. 0.9% in symbols
const person= {
    firstName: "Gaurav",
    lastName: "jethuri",
    1: "one"
}
// console.log(person[1]);

// --------------------------------------------------------------------------------
// In map object their is also a key value pair.
// In this we access the key's value thorugh get method.
// set / get
// we can set any type of key in map object.
const MapObj= new Map();
MapObj.set("firstName", "Gaurav");
MapObj.set("lastName" , "Jethuri");
MapObj.set(1,"itz hustle");
MapObj.set([1,2],"itz hustle");
// console.log(MapObj.get(Array));
// console.log(MapObj);
// console.log(MapObj.get(1));
// console.log(MapObj.get("firstName"));
// console.log(MapObj.get("lastName"));


// console.log(MapObj.keys());
// for(let key of MapObj.keys()){
    // console.log(key,  typeof key);
// }

for(let [key,value] of MapObj){
    // console.log(Array.isArray(key));
    // console.log(key, value);
}

// Adding direct Array in map function
const adding= new Map([["firstName", "Divyansh"], ["lastName", "Thakur"], ["Nain", "Singh"]]);
// console.log(adding);

// Object 
const $person= {
    firstName:"Sourav",
    lastName: "Pal"
}

const Div= {
    firstName:"Divyansh",
    lastName: "Thakur"
}
const user_info = new Map();
user_info.set($person, {number: 93578658, residence: "bhajanpura"});
user_info.set(Div, {number: 12344455, residence: "Sonia Vihar"});
// console.log(user_info);

// Accessing the map's key value 

// console.log(user_info.get($person).residence);
// console.log(user_info.get(Div).number);

