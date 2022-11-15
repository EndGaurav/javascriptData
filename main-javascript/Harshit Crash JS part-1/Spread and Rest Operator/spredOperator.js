// Spread : used for unpack the elements 
// can be used with Array, object and string 
// used for clone, merge, compose


// Clone object
// const obj = {
//     vision: "eye",
//     versionConrtol : "Github",
//     framework: "Angular",
//     names : ["shubham, div"]
// };

// const obj1 = {
//     ...obj,
//     firstName : "Gaurav"
// }

// console.log(obj1);


// Merge object

const obj = {
    vision: "eye",
    versionConrtol1 : "Github",
    something: "Angular",
    names : ["shubham, div"]
};

const obj2 = {
    parts: "eye",
    versionConrtol : "Git",
    framework: "Bootstrap",
    names2 : ["akash, ramesh"]
};

const newObj = {
    ...obj,
    lastName : "Middle item",
    ...obj2
}
// so with same key name it will overwrite the previous one.
// so when you merge. just defined the name uniquely 
console.log(newObj);