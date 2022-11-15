let Programming= ["Python", "Javascript", "Java"];
Programming.push("C++")
// console.log(Programming)
let thing =  Programming.pop("Javascript");
// console.log(thing);
// console.log(Programming)

Programming.unshift("C", "Ruby");
console.log(Programming);
let some = Programming.shift();
console.log("The first ele is this", some);
console.log(Programming);

//Push and Pop is fast as compare to Shift and unshift