// New keyword
// 1. create empty object {} which keeps equal to this.    
// 2. return this. 
// 3. create __proto__ chain from prototype by default.
function createInfo(firstName, lastName, Age){
    this.firstName= firstName;
    this.lastName= lastName;
    this.Age= Age;
}
createInfo.prototype.Name= function(){
   console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${this.Age}`)
}
const newObject= new createInfo("Gaurav", "Jethuri", 18);
console.log(newObject);
newObject.Name();


// ------------------------------------------------------------------------------------

// it is also known as constructor function
// in this we start the function name with CAPITAL letter
function User_obj(firstName, lastName, age, email, address, FavTeam) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    this.FavTeam = FavTeam;
  
    // return user;  new keyword do this by default. 
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
User_obj.prototype.myFavTeam = function(){
    console.log(`${this.firstName} ${this.lastName} favourite team is ${this.FavTeam}`);
}


const object1 = new User_obj("Gaurav", "jethuri", 19, "gauravsinghjethuri2002@gmail.com", "Uttrakhand");
const object2 = new User_obj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");
const object3 = new User_obj("Akash", "Yadav", "22", "akash.ky01@gmail.com", "UP", "CSK")
object1.about();
object1.hobby();
console.log(object3);
object3.myFavTeam();

// check the sum zero -probelm 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input