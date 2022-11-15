// character sets
// ^ == not of
let regex = /^g[a-z]urav/i; //character can be from a to z.
regex = /[^gau]urav/ // Here ^Caret symbol is used for not.
regex = /gaura[v 0-9]/;
regex = /gaura[20-30]/;

// const str = "gaura15 singh";
// console.log("This is source of the literal", regex.source);
// let result = regex.exec(str);
// console.log(result);

// if(regex.test(str)){
//     console.log(`The string ${str} have this ${regex.source}`);
// }else{
//     console.log(`The string ${str} have not this ${regex.source}`);
// }


// Quantifer sets
let regex2 = /gaurav{2}/; //v can occur exactly 2 times.
regex2 = /gaurav{0,2}/;
const str2 = "gaurav";

let result2 = regex2.exec(str2);
console.log(result2);

console.log(str2);

if(regex2.test(str2)){
    console.log(`The string ${str2} have this ${regex2.source}`);
}else{
    console.log(`The string ${str2} have not this ${regex2.source}`);
}