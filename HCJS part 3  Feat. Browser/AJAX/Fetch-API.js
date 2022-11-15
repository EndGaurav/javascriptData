// Fetching API's
// fetch is a javascript in built feature 
// fetch always return the promise.
// In fetch : catch method only execute when network error occurred. 
// const URL = "https://jsonplaceholder.typicode.com/posts";
// // fetch method is by default "GET".

// fetch(URL).then((response)=>{
//     console.log(response);
//     if(response.ok){
//         return response.json();
//     }
//     else{
//         console.log("Something went wrong!");
//     }
// }).then((data)=>{
//     console.log(data[10].userId);
// }).catch((error)=>{
//     console.log("inside the catch")
//     console.log(error);
// })

const URL = "https://swapi.dev/api/people/1"
fetch(URL).then(response => response.json()).then(data => console.log(data))