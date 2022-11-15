// find method.
const animals = ["Lion", "Tiger", "Cat", "Dog"];

const fiveChar= animals.find((String)=>{
    return String.length === 5;
})

console.log(animals)
console.log(fiveChar);
// it will just go for first occurence.

const Users= [
    {userId:1, userName:"Gaurav"},
    {userId:2, userName:"Divyansh"},
    {userId:3, userName:"Nain"},
    {userId:4, userName:"Sourav"},
    {userId:5, userName:"Akash"}
];

const Name= Users.find((user)=>{
    return user.userId === 3; 
})

console.log(Name);
