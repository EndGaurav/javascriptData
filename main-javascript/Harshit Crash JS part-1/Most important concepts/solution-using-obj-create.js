// --------------------------------------------------------------------------------
// Two ways to create empty object.
// const object_1 = {}
// const object_2 = object.create();
// ---------------------------------------------------------------------------------

// Solution using object create 
//__proto__ and [[prototype]] both are same.
// but 
// prototype is totally different.
// const obj3 ={
//     key5: "value5"
// } 
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = {
//     key3: "value3"
// }

// const obj2 = Object.create(obj3) //{}
// there is one more way to create empty object
// obj2.key3 = "value3";
// obj2.key2 = "value 2 in obj2"; 
// console.log(obj2.key5);


// setting the __proto__
const userMethods1 = {
    details: function(){
       console.log(`Name ${this.firstName} ${this.lastName} ${this.number} ${this.id}`);
   },

   aboutIt : function(){
       console.log("This is my about");
   }
}
const userMethods = {
    help: function(){
       console.log("i am help");
   },

   tellUs : function(){
       console.log("This is tell us");
   }
}
// function objFunc (firstName, lastName, number, id){
//     const user1 = Object.create(userMethods1, userMethods);
//     user1.firstName = firstName;
//     user1.lastName = lastName;
//     user1.number = number;
//     user1.id = id;
    
//     return user1;
// }
function objFunc (firstName, lastName, number, id){
    // const user1 = Object.create(userMethods1, userMethods);
    // const user1 = new objFunc(userMethods);
    user1.firstName = firstName;
    user1.lastName = lastName;
    user1.number = number;
    user1.id = id;
    
    return user1;
}

const Object1 = new  objFunc("Gaurav", "Jethuri", "3535795", "01");
console.log(Object1);
// Object1.aboutIt();
// Object1.aboutIt();

// object1
// 




