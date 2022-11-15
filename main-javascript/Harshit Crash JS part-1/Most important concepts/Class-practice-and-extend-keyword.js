// class keyword practice
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

// extends keyword
// dog is the sub class of Animal as we can see.

class dog extends Animal{

}
// const animal1 = new Animal("lion", 5);
const Dog= new dog("debuu", 4);
console.log(Dog);
Dog.eat();
