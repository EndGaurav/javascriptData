// hasOwnProperty

function User_obj (firstName, lastName, age, email, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}
console.log(User_obj.prototype);
User_obj.prototype.about= function(){
    console.log(`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
}
User_obj.prototype.isage= function(){
    console.log(this.age>= 18);
}
User_obj.prototype.hobby= function(){
    console.log("My hobby is playing piano");
}



const object1 = new User_obj("Gaurav", "jethuri", 19, "gauravsinghjethuri2002@gmail.com", "Uttrakhand");
const object2 = new User_obj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");

for(let key in object1){
    // console.log(key);  // through this we will get the prototype key also.
    if(object1.hasOwnProperty(key)){
        console.log(key);
    }
}