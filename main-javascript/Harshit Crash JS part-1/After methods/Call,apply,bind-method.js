// Call, apply and bind method
// Apply is also same as call.
// but apply takes the extra argument in the form of Array.
// but call takes individual.
// bind :- it keeps the value as function
// then we can call it whenever we want. 
function about(favourite_game, Singer){
    console.log(`My name is ${this.fName} ${this.lName} and favourite game is ${favourite_game} and singer is ${Singer}`);
}

const person1= {
    fName: "Divyansh",
    lName: "Thakur",

}

const person2= {
    fName: "Akash",
    lName: "Yadav",
}

const _bind = {
    fName: "Gaurav",
    lName: "Jethuri"
}

// about.call(person2, "BGMI", "Arijit Singh");
// about.call(person1, "clash of clan", "Karan aujla");
// So the call function is used for borrow not copy. 

// Apply
// about.apply(person2,[ "BGMI", "Arijit Singh"]);
// about.apply(person1, ["clash of clan", "Karan aujla"]);

// bind 
const $function= about.bind(_bind, "Guitar", "chainsmokers");
const callMeLater = about.bind(person2, "'playing with hearts'", '"The Nightmare"'); 
callMeLater();
$function();


// rough 
// const some= {
//     fName: "Divyansh",
//     lName: "Thakur",
//     about: ()=> {
//         console.log(this.fName, this.lName);
//     }
// }

// some.about.call(some);
