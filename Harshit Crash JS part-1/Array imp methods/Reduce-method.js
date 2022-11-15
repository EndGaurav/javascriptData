// Reduce method gives  the value. 
// Most important
// Rule 1. Always return the value in fuction whiling working with reduce method, don't do console.log().
// Syntax of reduce method.
// Array.reduce(callback function/Anonymous function, initial value);

const userCart = [
    {productId:1, productName: "mobile", price:10000},
    {productId:2, productName: "laptop", price:10000},
    {productId:3, productName: "TV", price:10000},
];

const total_Price = userCart.reduce((totalprice, curentPrice)=>{
   return totalprice + curentPrice.price;
}, 0);

console.log(total_Price);

