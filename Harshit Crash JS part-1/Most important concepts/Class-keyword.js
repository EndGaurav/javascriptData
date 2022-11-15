//ES6 / 2015
// class keyword
// classes are fake because they do same work as prototype. 
// we cannot accces the class keyword without new keyword.

class UserObj{
    
    constructor(firstName, lastName, age, email, address){
        console.log("constructor called!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about(){
        console.log(`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
    }
    isAge(){
        console.log(this.age>= 18);
    }
    hobby(){
        console.log("My hobby is playing piano");
    }

}

const object1 = new UserObj("Gaurav", "jethuri", 19, "gauravsinghjethuri2002@gmail.com", "Uttrakhand");
const object2 = new UserObj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");
object1.about()
object2.about()
object2.isAge()
object1.isAge()

console.log(Object.getPrototypeOf(object1));


