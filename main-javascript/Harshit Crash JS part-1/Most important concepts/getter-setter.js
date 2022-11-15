// getter and setter
// we can access methods as a property 
// through get keyword
class Animal{
    constructor(firstName, lastName, age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
    }
    get eat(){
        console.log(`${this.name} ${this.lastName} !`);
    }
     get Age(){
        console.log(this.age>= 2);
    }
    set fullName(fullname){
        const [firstName, lastName]= fullname.split(" ");
        this.firstName= firstName;
        this.lastName= lastName;
    }
}

const Animal1= new Animal("debuu", "negi", 4);
// Animla1.eat;
console.log(Animal1);
Animal1.fullName= "Sahil Negi"
console.log(Animal1);

