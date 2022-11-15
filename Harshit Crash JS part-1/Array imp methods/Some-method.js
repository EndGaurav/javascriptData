// Some method
const products = [
    {productId:1, productName: "mobile", price:10000},
    {productId:2, productName: "laptop", price:10000},
    {productId:3, productName: "TV", price:10000},
    {productId:4, productName: "iphone", price:250000},
];

const Any= products.some((anyProduct)=>anyProduct.price<=200000);
console.log(Any);