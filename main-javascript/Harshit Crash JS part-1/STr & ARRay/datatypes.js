// undefined
let _un 
console.log(typeof _un);
_un = 23;
// _un = "This is a strig one also"
console.log(typeof _un, _un)

// null
let _some = null;
console.log(_some);
console.log(typeof _some);

// bigInt
// We can define BigInt as bigint(86) and 86n
let $num = BigInt(79247679469869862946269646);
let _num = 243n;
// console.log($num.Max_Safe_Integer);
console.log(Number.MAX_SAFE_INTEGER);


let num1 = 3;
let num2 = "3";
console.log(num1 !== num2);