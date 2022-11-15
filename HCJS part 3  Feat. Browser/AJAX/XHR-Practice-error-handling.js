const URL = "https://jsonplaceholder.typicode.com/posts";
const XHR = new XMLHttpRequest();

XHR.open("GET", URL);

XHR.onload = ()=>{
    if(XHR.status >= 200 && XHR.status < 300){
        const data = JSON.parse(XHR.response);
        // console.log(data);
        const id = data[3].id;
        const XHR2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        XHR2.open("GET", URL2);
        XHR2.onload = ()=>{
            const data4 = JSON.parse(XHR2.response);
            console.log(data4);

        }
        XHR2.send();
        
    }
    else{
        console.log("Some error occurred");
    }
}

XHR.onerror= ()=>{
    console.log("network error occured");
}
XHR.send();