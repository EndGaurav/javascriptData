// http methods 
// GET  --> read the data
// POST --> create
// DELETE --> as name
// PATCH ---> improve
// PUT ---> modification
const URL = "https://jsonplaceholder.typicode.com/posts";
const XHR = new XMLHttpRequest();
// console.log(XHR);

// step 1
// console.log(XHR.readyState);
XHR.open("GET", URL);
// console.log(XHR.readyState)
XHR.onreadystatechange = function(){
    // console.log( XHR.readyState);
// readystate 4 is the sign of success.
    if(XHR.readyState === 4){
        console.log(XHR);
        const str = XHR.response;
        const data = JSON.parse(str);
        console.log(data);
    }
} 

// onload method runs only when readystate number is 4.
XHR.onload = function(){
    const response = XHR.response;
    const conversion = JSON.parse(response);
    console.log(conversion);
    console.log(typeof conversion);
    // const str1 = JSON.stringify(conversion);
    // console.log(typeof str1);
}

XHR.send()
