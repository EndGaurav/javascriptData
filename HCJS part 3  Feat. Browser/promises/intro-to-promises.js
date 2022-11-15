// look on notebook
// pormise always store in microtask queue.
// microtask queue has higher priority then callback queue.
// promise -----> future value 
// value can be anything 
// resolve or reject

const bucket = ["water","coffee", "chips", "vegitables", "salt", "rice"];

// executer function
// produce
// we can pass anything in resolve and reject like array, object and any statement.
const p = new Promise((resolve,reject)=>{
    if(bucket.includes("vegitable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("fried rice");
    }
    else{
        reject("Oops! could not do it!");
    }
})

// consumes
// as a js developer we produce less and consume more.
// variable_name.then(callback functions);
// p.then((resolve)=>{
//     console.log(resolve);
// }, (reject)=>{
//     console.log(reject);
// })

// p.then(undefined, (reject)=>{
//     console.log(reject);
// })

p.then((resolve)=>{
    console.log(resolve);
}).catch((error)=>{
    console.log(error);
})

console.log(typeof p);