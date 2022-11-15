// xhr using promise
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const XHR = new XMLHttpRequest();
        XHR.open(method, url);
        XHR.onload = ()=>{
            if(XHR.status >=200 && XHR.status < 300){
                const data = JSON.parse(XHR.response);
                // console.log(data[0].title);
                resolve(data);
            }
            else{
                // console.log("Some error has been occurred");
                reject();
            }
        }
        XHR.onerror= ()=>{
            console.log("Network error has been occurred");
        }
        XHR.send();
    })
}

sendRequest("GET", URL).then((resolve)=>{
    const id = resolve[5].id;
    return id;
}).then((id)=>{
    const URL2 = `${URL}/${id}`
    // console.log(URL2);
     const specific = sendRequest("GET", URL2)
     return specific;
}).then((specific)=>{
    console.log(specific.body);
}).catch((reject)=>{
    console.log("Some error has been occurred in request!");
})