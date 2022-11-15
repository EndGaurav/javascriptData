// event behind the scenes
console.log("start scripting!!!!!");
const AllBtns = document.querySelectorAll(".my-buttons button");
AllBtns.forEach((btn) =>{
    btn.addEventListener("click", (event)=>{
        let num= 0;
        for(let i=0; i<=100000; i++){
            num +=i;
        }
        console.log(event.currentTarget.textContent, num);
    })
} )

let outerNum = 0;
for(let i= 0; i<+10000; i++){
    outerNum += i;
}
console.log("The value of outerNum is:", outerNum);
console.log("end scripting!!!!");