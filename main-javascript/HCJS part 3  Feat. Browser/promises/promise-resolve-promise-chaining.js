// promise resolve
// promise chaining
// note:- then always return the promise.

// const pro = new Promise((resolve, rejetct)=>{
//     resolve(5);
// })

// pro.then((value)=>{
//     console.log(value);
// })

function myfun(){
    return new Promise((resolve, reject)=>{
        resolve("chai");
    })
}

// promise chaining
myfun().then((resolve)=>{
    console.log(resolve);
    resolve += " sutta bar";
    return resolve;
}).then(value =>{
    console.log(value);
})
