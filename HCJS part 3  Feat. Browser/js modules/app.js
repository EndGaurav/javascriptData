// console.log("hello world");
// as keyword is to assign different name of the variable.
import {firstName as fname} from "./utils/fname.js";
import age from "./utils/age.js";
import user, {person2} from "./utils/person.js"; 

console.log(fname);
console.log(age);

const obj1 = new user("Gaurav", "jethuri", 21);
console.log(obj1);
obj1.about();

import { age2 } from "./utils/age.js";
console.log(age2);

const obj2 = new person2("Divyansh", "thakur", 22); 
console.log(obj2);
obj2.about();

