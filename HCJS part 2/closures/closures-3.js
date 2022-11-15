function myfunc(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("You have called me!");
            counter++;
        }
        else{
            console.log("You have already called me!")
        }
    }
}

const myfunction = myfunc(); 
myfunction()
myfunction()
myfunction()
