// function returning promise.
const bucket = ["water","coffee", "chips", "vegitable", "salt", "rice"];
function friedFunction(){

    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegitable") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("fried rice");
        }
        else{
            reject("Oops! could not do it!");
        }
    })
}

friedFunction().then((resolve)=>{
    console.log(resolve);
}).catch((error)=>{
    console.log(error);
})

