fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        fName: "Gaurav",
        lName: "jethrui",
        id: 1
    }), 
    headers: {
        "conten-type": "application/json; charset=UTF-8",
    },
}).then((response)=>{
        return response.json();

}).then((data)=>{
    console.log(data);
})


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'saurav',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));