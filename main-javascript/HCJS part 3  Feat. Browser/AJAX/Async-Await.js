// fetch(URL).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// Notes: async always return the promise.

const URL = "https://jsonplaceholder.typicode.com/posts";

async function myrequest(){
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
}

myrequest().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
