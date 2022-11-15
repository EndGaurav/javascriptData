const userMethods= {
    about: function(){
      console.log (`My name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`)
    },
    isage: function(){
        console.log(this.age >= 18);
    },
    hobby: function(){
        console.log("My hobby is playing cricket");
    }
}

function user_obj (firstName, lastName, age, email, address){
    const user= Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
  
    return user;
}
const object1 = user_obj("Gaurav", "jethuri", 19, "gauravsinghjethuri2002@gmail.com", "Uttrakhand");
const object2 = user_obj("Div", "thakur", 20, "thakurdiv2000@gmail.com", "UP");
object1.about();
object1.hobby();