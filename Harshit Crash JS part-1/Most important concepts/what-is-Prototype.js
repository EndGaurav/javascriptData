//Javascript function ==> function + object. 
// we can treat functions as a object also.
// we can add our own property to the function.
// A function gives us the free space that is known as prototype or empty object.
// which we can use for our useCase. 
function hello(){
    console.log("hello world");
}

// only function provide prototype property
hello.prototype.id = 2342;
hello.prototype.fName= "Gaurav singh";
hello.prototype.lName= "jethuri";
hello.prototype.number = function(number, number){
    return number * number
}
// console.log(hello());
console.log(hello.prototype);
console.log(hello.prototype.number(4,4));

function user(firstName,age){
    
}

user('gaurav',23);