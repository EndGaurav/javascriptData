// metecharacter 
// ^ (caret)= means starts with 
// $ = means ends with
// . = matches any one character
let regex = /^gaunjvf/;
regex = /gh$/
regex = /g.urav/ //matches any one character.
regex = /g*urav/ // * means matches 0 or more characters. 
regex = /gau?rav?m?/ // ? after character means that character is 
regex = /gaurav\*/
let names = "gaurav* singh";

let result = regex.exec(names);
console.log(result);

if(regex.test(names)){
    console.log(`The string ${names} have ${regex.source}`);
}
else{
    console.log(`The string ${names} have not ${regex.source}`);
}


// More Metacharacters
let regex2 = /\w/;
const song = "Give 100";

console.log(regex2.exec(song));
let result3 = song.match(regex2);
console.log(result3);
console.log(song.match(regex2));

// let text = "Give 100%!"; 
// let pattern = /\D/g;
// let result3 = text.match(pattern);
// console.log(result3);