// fetch(URL).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

const URL = "https://jsonplaceholder.typicode.com/posts";

// async always return the promise.
async function getPost() {
    const response = await fetch(URL)
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
}

getPost().then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
