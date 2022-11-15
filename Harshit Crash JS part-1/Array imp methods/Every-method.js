// Every method
// const numbers = [3,1,5,7,10];
const numbers = [12,2,8,4,10];

const ans = numbers.every((Number)=>{
    return Number%2===0;

});

console.log(ans);

// callback function ----> true / false (boolean type return).
// every method -----> true / false (boolean type return).
// provided that every index of the array must be true at condition. 
// then every method throw the true if not then false. 


// Realistic example 
const products = [
    {productId:1, productName:"Mobile", productPrice:1000},
    {productId:2, productName:"laptop", productPrice:5002},
    {productId:3, productName:"Game", productPrice:9554},
    {productId:4, productName:"Apple", productPrice:8902},
    {productId:5, productName:"Watch", productPrice:2300},
    {productId:6, productName:"Computer", productPrice:2500}
];

const yesItIs = products.every((price)=>{
    return price.productPrice>=1000;
})
console.log(yesItIs);