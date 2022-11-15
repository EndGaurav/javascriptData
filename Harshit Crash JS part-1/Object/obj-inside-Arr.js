// objects inside Array
// its very useful in real world programming

const _datas = [
    {userid:22, firstName:"Gaurav", lastName: "Jethuri", rollNumber: 032334},
    {userid:44, firstName:"Sourav", lastName: "Pal", rollNumber: 04343},
    {userid:56, firstName:"Divyansh", lastName: "thakur", rollNumber: 70783}
]

// Note: Mostly we access the data of array through for of loop and traditional for loop.

for(let data of _datas){
    // console.log(data.lastName.toUpperCase());
    console.log(data.userid, data.firstName.toUpperCase());
}   


// for(let i=0; i<_datas.length; i++){
//     console.log(_datas[i].rollNumber);
// }