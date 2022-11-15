// Arrow function
// const show = (a, b) => {
    // console.log("hello Javascript!");
//     console.log(a + b)
// }

// show(23,34);

const multiple = (number)=> {
    for(let i = 1; i<=10; i++){
        const table = number * i;
        console.log( `${number} * ${i} = ${table}` );

    }
}
multiple(54);