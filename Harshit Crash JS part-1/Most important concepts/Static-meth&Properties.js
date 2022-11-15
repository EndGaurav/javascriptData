// static methods and properties.
// static keyword is directly related to class.
// we just call them through class name.
// we don't need object name. 
// we can make property also through static keyword.
// same principle applicable on property.
class Animal{
    constructor(firstName, lastName, age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
    }
    static myName(){
        return  ("I am static keyword!");
    }

    sleep(){
        return ("I am sleep function!");
    }
    
    static userId= 2325;

    get eat(){
        console.log(`${this.name} ${this.lastName} !`);
    }
     get Age(){
        console.log(this.age>= 2);
    }
    set fullName(fullname){
        const [firstName, lastName]= fullname.split("@");
        this.firstName= firstName;
        this.lastName= lastName;
    }
}
const animal= new Animal("Gaurav", "sharma", 23);
// console.log(Animal.eat);
// console.log(animal.sleep());
console.log(Animal.myName());
// console.log(animal.myName());
// -----------------------------------------------------------------------------------
console.log(Animal.userId);