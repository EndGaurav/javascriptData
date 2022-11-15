// this keyword isn't work with arrow function.
// it takes the value of this one step above from the function.

const user= {
    firstName: "Shubham",
    lastName: "kotiyal",
    about: ()=>{
        // console.log(this) // this is eg of one step above value.
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}
user.about();

