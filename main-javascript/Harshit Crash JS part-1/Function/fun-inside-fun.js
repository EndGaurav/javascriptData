// function inside function.
const print = ()=>{
    const sum = (num1 , num2) =>{
        console.log(num1+num2);
        mul(43,3234);
    }
    const mul = (number1, number2) =>{
        console.log(number1 * number2);
    }
    console.log("hello print me!");
    sum(23,43);
    
    const sumup = ( _number) =>{
        let sum = 0;
        for(let i = 0; i<=_number; i++){
            sum = sum + i;
        }
        console.log(sum);
    }
    sumup(1000);
}
print();

