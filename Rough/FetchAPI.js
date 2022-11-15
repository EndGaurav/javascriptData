const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch() always return promise.
fetch(URL).then((response)=>{
        return response.json();
    // console.log(response.json());
}).then((data)=>{
    console.log(data)
})
// without error handling catch() just throw error
// when the error is regarding network.


// error handling fetch API
// fetch(URL).then((response)=>{
//     if(response.ok){
//         return response.json();
//     }
//     else{
//         throw new Error("something went wrong!");
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// fetch(URL).then((jawab)=>{
//     return jawab.json();
// }).then((data)=>{
//     console.log(data[2]);
// })