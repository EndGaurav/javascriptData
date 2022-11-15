// Realistic example of map method.

const details = [
    {fistName:"Gaurav", Age:12},
    {fistName:"Divyansh", Age:14},
    {fistName:"Nain", Age:12},
    {fistName:"Sourav", Age:14}
];

const mapping = details.map(function(detail){
    return detail.fistName;
});

console.log(mapping);