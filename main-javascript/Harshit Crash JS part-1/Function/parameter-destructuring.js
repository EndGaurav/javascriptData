// Parameter destructuring
const person1 = {
    firstName : "Gaurav",
    lastName : "Jethuri",
    rollNumber : 2433536
}

const person2 = {
    _firstName : "sourav",
    _lastName : "pal",
    _rollNumber : 123456
}
// following is the parameter destructuring
const details = ({firstName,rollNumber, lastName}, {_firstName,_lastName, _rollNumber})=>{
    console.log(firstName);
    console.log(lastName);
    console.log(rollNumber); 
    console.log(_firstName);
    console.log(_lastName);
    console.log(_rollNumber); 
}

// const details = (object) =>{
//     console.log(object.firstName);
//     console.log(object.lastName);
//     console.log(object.rollNumber);
// }

details(person1,person2);
