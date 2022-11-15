// Regular expression also known as Regex.
// regular expression literal below.
// /statement/  this is a regex litrals
// flag : when 2 or more similar words come along. then we use flag.
// Using flag : it gives the different index for same words.  

// let reg = /gaurav and sourav/;
// reg = /gaurav and sourav/g; // g means global and we do this for the flag.
// reg = /sourav and gaurav/i; // i for case insensitive.
// console.log(reg);
// console.log(typeof reg);

// .source woh detail deta hai jo humne literal ke andar daali hoti hai 
// console.log(reg.source);

// let sentance = "we are leaning javacript by Manish Rawat and who we are is gaurav and sourav and gaurav and sourav play with memes also";
// IMPORTANT
// Function to match the expression
// 1). exec() - it returns array for a match and null for no match.
// console.log(reg.exec(sentance)); 
// console.log(reg.exec(sentance)); 

// 2). test() - retruns true or false 
// console.log(reg.test(sentance));

// 3). match() - return array of results or null
// main baat -- ye ulta chlta hai
// console.log(reg.match(sentance));  // this is wrong way
// console.log(sentance.match(reg));

// 4). search() - returns index of first match else -1.
// same like match function
// console.log(sentance.search(reg));

// 5). replace() -- returns new replaced string with all the replacement 
// console.log(sentance.replace(reg, "Akash and Suryansh"));


// Revise 
let regex = /you/g; // g means global 
// regex = /You/i;  // i for case insensitive
let song = "happy birthday to you and happy birthday to you";

// 1). exce() returns array for match and null for no match
// console.log(regex.exec(song));
// console.log(regex.exec(song));
// console.log(regex.exec(song));

// 2). test() - returns true and false 
// console.log(regex.test(song));

// 3). match() -- returns array or null
// console.log(song.match(regex));

// 4). search() -- returns index number or -1 for no match
// console.log(song.search(regex));

// 5). replace() -- returns new replaced string with all the replacement
// console.log(song.replace(regex, "sourav"))