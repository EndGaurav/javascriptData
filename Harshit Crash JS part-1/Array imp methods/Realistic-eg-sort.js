// Sorting price.
// Price high to low , low to high
const products = [
    {productId:1, productName:"Mobile", productPrice:1000},
    {productId:2, productName:"laptop", productPrice:502},
    {productId:3, productName:"Game", productPrice:9554},
    {productId:4, productName:"Apple", productPrice:892},
    {productId:5, productName:"Watch", productPrice:2300},
    {productId:6, productName:"Computer", productPrice:2500}
];
const Product = {...products};
const highToLow= products.sort((a, b)=>{
    return b.productPrice - a.productPrice;
});

const lowToHigh = products.sort((a,b)=>{
    return a.productPrice - b.productPrice;
})

console.log(Product);
console.log(highToLow);
console.log(lowToHigh);