// API request methods 
// get
// put : for changing 
// patch : little-bit change
// post     
// delete

// const URL = "https://jsonplaceholder.typicode.com/posts";
// let xhr = new XMLHttpRequest();

// console.log(xhr);
// xhr.open("GET", URL);
// console.log(xhr);
//     if(xhr.readyState == 4){
//         console.log(xhr.response);
//         console.log(typeof JSON.parse(xhr.response));
//     }
// }

// onload works only when readystate is 4.
// xhr.onload = ()=>{ 
//     console.log(xhr.response);
// }
// xhr.send()
// console.log(xhr);

// -----------------------------------------------------------------------------------------------------------
// Prcticing XHR 
// const URL = "https://jsonplaceholder.typicode.com/posts";
// let xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = ()=>{
//     if(xhr.status==200 && xhr.status<300){
//         let resp = JSON.parse(xhr.response);
//         let id = resp[2].id;
//         let URL2 = `https://jsonplaceholder.typicode.com/posts/${id}`;
//         let xhr2 = new XMLHttpRequest(); 
//         xhr2.open("GET", URL2);
//         xhr2.onload=()=>{
//             console.log(xhr2.response);
//         }
//         xhr2.send();

//     }
// }
// xhr.send();


// ------------------------------------------------------------------------------------
// xhr using promise 
function xhrPromise(method, URL) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, URL);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);

            } else {

                reject("error occured in URL");
            }
        }
        xhr.onerror = ()=>{
            reject(new Error("Something went wrong"));
        }
        xhr.send();
    })
}

xhrPromise("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log(response);
}).catch((response) => {
    console.log(response);
});