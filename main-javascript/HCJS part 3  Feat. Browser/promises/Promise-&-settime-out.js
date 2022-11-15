// promise and set time out.
function funPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if("9"){
                resolve("Success");
            }
            else{
                reject("failed");
            }
            
        }, 2000);
    })
}

funPromise().then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
})