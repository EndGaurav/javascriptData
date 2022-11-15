// lexical environment and scope chain.

const lname = "thakur";

const myfun = function(){
    const fname= "Divyansh";
    console.log(fname);
    console.log(lname);
}

myfun()