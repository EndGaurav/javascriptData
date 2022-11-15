// console.log("hello promise")
function myfun(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const error = true;
            if(error){
                console.log("Your promise has been resoloved");
                resolve("Yes i am resolved");
            }
            else{
                console.log("Your promise has not been resolved");
                reject("oops! i m rejected");
            }
        }, 1000);
    })
}

myfun().then((resolve)=>{
    console.log("success", resolve);
}).catch((reject)=>{
    console.log("failed", reject);
})