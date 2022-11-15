// look at the note book
let sing = "lalalala";
console.log(sing);
function getFullName(firstName, LastName){
    console.log(arguments);
    let myvar = "This is my var";
    console.log(myvar);
    const fullName = firstName + " " + LastName;
    return fullName; 
}

const personName = getFullName("Gaurav", "jethuri");
console.log(personName);





// function getFullName(firstName, LastName){
//         console.log(arguments);
//         console.log(arguments.length)
//         console.log(arguments[1]);
// }
// getFullName("Divyansh", "thakur");