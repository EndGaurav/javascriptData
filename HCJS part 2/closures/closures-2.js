function  number(square){
    return function(number){
        console.log(number**square);
    }
}
const ans = number(2);
ans(3)
ans(4)