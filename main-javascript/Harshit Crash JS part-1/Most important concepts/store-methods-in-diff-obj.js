const userMethods= {
    about: function(){
      console.log (`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`)
    },
    isage: function(){
        console.log(this.age >= 18);
    }
}

function user_obj (firstName, lastName, age, email, address){
    const user= {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about= userMethods.about;
    user.isage= userMethods.isage;

    return user;
}
const object1 = user_obj("Gaurav", "jethuri", 19, "gauravsinghjethuri2002@gmail.com", "Uttrakhand");
const object2 = user_obj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");
object1.about();


// REVISING
const userMethods1 = {
    details: function(){
       console.log(`Name ${this.firstName} ${this.lastName} ${this.number} ${this.id}`);
   },

   aboutIt : function(){
       console.log("This is my about");
   }
}
function objFunc (firstName, lastName, number, id){
    const user1 = {};
    user1.firstName = firstName;
    user1.lastName = lastName;
    user1.number = number;
    user1.id = id;
    user1.details= userMethods1.details;
    user1.aboutIt = userMethods1.aboutIt;

    return user1;
}

const Object1 = objFunc("Gaurav", "Jethuri", "3535795", "01");
console.log(Object1);
Object1.aboutIt();