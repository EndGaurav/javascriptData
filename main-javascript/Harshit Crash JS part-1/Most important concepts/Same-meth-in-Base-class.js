// Same method in base class
// Super keyword
// if we want to add more key value in dog but not in animal.
// there we use super keyword.
class Animal{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    eat(){
        console.log(`${this.name} is eating!`);
    }
    Age(){
        console.log(this.age>= 2);
    }
}

class dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed= speed;
    }
    // first priorty will be this object then others. 
    eat(){
        console.log(`Modified: ${this.name} is eating!`);
    }
    run(){
        console.log(`My dog ${this.name} is run at the speed of ${this.speed}kmph`);
    }
}

const Dog= new dog("debuu", 4, 50);
console.log(Dog);
Dog.eat();
Dog.run()