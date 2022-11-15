// console.log("Good morning");
let store = ["salt", "rice", "veggi"];
let task = new Promise((resolve, reject) => {
    if (store.includes("salt") && store.includes("rice") && store.includes("veggi")) {
        resolve("dinner ready");
    } else {
        reject("sorry not completed");
    }
})

task.then((response) => {
    console.log("Response:", response);
}
).catch((error) => {
    console.log("Response:", error);
})
// console.log("Good morning");
// console.log("Good night");


// -------------------------------------------------------------------------------------------------------------
// function returning promise   
function promiseFunc() {
    return new Promise((resolve, reject) => {
        if (store.includes("salt") && store.includes("rice") && store.includes("veggi")) {
            resolve("dinner ready");
        } else {
            reject("sorry not completed");
        }
    })
}

promiseFunc().then((response) => {
    console.log("Response:", response);
}
).catch((error) => {
    console.log("Response:", error);
})

// ---------------------------------------------------------------------------------------------------------------
// promise using setTime out 
function setPromise() {
    return new Promise((resolve, reject) => {
        value = true;
        setTimeout(() => {
            if (value) {
                resolve();
            }
            else {
                reject();
            }
        }, 2000);
    })
}
setPromise().then(() => {
    console.log("Response:", "resolved");
}).catch(() => {
    console.log("Response:", "rejected");
})

// ------------------------------------------------------------------------------------------------------------------
// promise chaining.
// then() always return the promise
function chainPro() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

chainPro().then((value) => {
    console.log(value);
    value += "bar";
    return value;
}).then((value) => {
    console.log(value);
    value += "baaz";
    return value;
})


// -----------------------------------------------------------------------------------------------------------------------------
let head1 = document.querySelector(".heading1");
let head2 = document.querySelector(".heading2");
let head3 = document.querySelector(".heading3");
let head4 = document.querySelector(".heading4");
let head5 = document.querySelector(".heading5");
let head6 = document.querySelector(".heading6");
let head7 = document.querySelector(".heading7");
let head8 = document.querySelector(".heading8");

function changeColorPro(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.style.color = color;
                element.innerText = text;
                resolve();
            } else {
                reject();
            }
        }, time);
    })
}

changeColorPro(head1, "One", "red", 1000)
.then(() => {  return changeColorPro(head2, "two", "pink", 1000);})
.then(() => {  return changeColorPro(head3, "two", "pink", 1000);})
.then(() => {  return changeColorPro(head4, "two", "pink", 1000);})
.then(() => {  return changeColorPro(head5, "two", "pink", 1000);})
.then(() => {  return changeColorPro(head6, "two", "pink", 1000);})
.then(() => {  return changeColorPro(head7, "two", "pink", 1000);})
.then(() => {  return changeColorPro(head8, "two", "pink", 1000);})
