// by using default.
// we don't need to use curly braces 
// most important = only once we can use default. 
// not again
// when we declared default export then at import time we can use any other name without using as keyword.
// but which we export without default, those known as named export.
export default class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    about(){
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    }
}


export class person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    about(){
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    }
}
