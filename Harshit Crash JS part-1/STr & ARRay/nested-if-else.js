// nested if else 

// Winning number 18

let Winning_number = 18;
let user_guess= prompt("Enter you number");

if(user_guess == Winning_number){
    console.log("Exactly!");
}
else{
    if(user_guess>Winning_number){
        console.log("Your guess is high!");
    }
    if(user_guess<Winning_number){
        console.log("Your guess is low!");
    }
}