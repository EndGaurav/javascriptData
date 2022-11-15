// use const for creating array

// Heap  momory = ["Java", "Javascript"]

const language = ["Java", "Javascript"];
language.push("CSS", "python");
language.pop();    
language.shift();
language.unshift("HTML");
console.log(language);

// note: 90% Devloper used const for creating the array because it is safe. 

// rendering Array using while loop  
const _language =["Java", "Javascript", "HTML", "CSS"];
const programming=[];
let i = 0;
while(i<_language.length){
    // console.log(_language[i].toLocaleUpperCase());
    programming.push(_language[i].toUpperCase());
    i++;
}
console.log(programming);