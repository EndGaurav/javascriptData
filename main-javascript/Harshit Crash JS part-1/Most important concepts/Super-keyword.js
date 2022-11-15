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
    howling(){
        console.log(`My pet ${this.name} howl so much`);
    }
}

class dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed= speed;
    }
    run(){
        console.log(`My dog ${this.name} is run at the speed of ${this.speed}kmph`);
    }
}

const Dog= new dog("debuu", 4, 50);
const myAnimal = new Animal("cat", 12, 80);
console.log(Dog);
Dog.eat();
Dog.run()
console.log(myAnimal);
myAnimal.howling();