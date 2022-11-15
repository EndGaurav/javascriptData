// callback functions.


const showme = (name)=>{
    // let name = "Gaurav singh jethuri";
    console.log("i am a call back function!");
    console.log(`My name is ${name}`);
}

const watch = (callback)=>{
    console.log("I am a first function!");
    callback("Gaurav singh jethuri");
}

watch(showme);

// Taking function as a input and call them back its called callback function.