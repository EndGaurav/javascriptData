// Adding HTML element through javascript.
const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
todoList.innerHTML += "<li>New Todo</li>";
todoList.innerHTML += "<li>The new paragraph</li>"

// when you should use it or when you should not. 
// more importantly we should not use it to create element.
// we should use it just for modify the previous element.