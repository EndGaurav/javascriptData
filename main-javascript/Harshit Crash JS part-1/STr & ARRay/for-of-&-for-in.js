// for of loop in array
let languages= ["HTML", "CSS", "Javascript"];
let pro =[];
for(let language of languages){
    // console.log(language.toLowerCase());
    pro.push(language.toUpperCase())
}
// console.log(pro);

// for in - where (in stands for index) loop in array 
let _languages= ["HTML", "CSS", "Javascript", "React", "Bootstrap"];
for(let index in _languages){
    // console.log(index);
    console.log(_languages[index].toUpperCase());
}

// USED: Mostly we use for of and simple for loop. 