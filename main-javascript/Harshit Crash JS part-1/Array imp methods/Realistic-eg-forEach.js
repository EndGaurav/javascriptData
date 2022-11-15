// Realistic example of forEach loop.
const details= [
    {firstName:"Gaurav", Age: 19},
    {firstName:"Divyansh", Age: 20},
    {firstName:"Sourav", Age: 18},
    {firstName:"Sachin", Age: 20}
];
details.forEach(function(details){
    console.log(details.Age);
})

// Through Arrow function.
// details.forEach((user)=>{
//     console.log(user.firstName);
// })

// Through for of loop.
// for(let detail of details){
//     console.log(detail.Age)
// }