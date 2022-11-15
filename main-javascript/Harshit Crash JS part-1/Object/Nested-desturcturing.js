// nested destructuring

const _datas = [
    {userid:22, firstName:"Gaurav", lastName: "Jethuri", rollNumber: 6775},
    {userid:44, firstName:"Sourav", lastName: "Pal", rollNumber: 04343},
    {userid:56, firstName:"Divyansh", lastName: "thakur", rollNumber: 70783}
]

// we can keep variable name by our choice apart from key name.
const [{rollNumber,firstName, lastName }, , {lastName:lname}] = _datas;
console.log(rollNumber);
console.log(firstName);
console.log(lastName);
console.log(lname);