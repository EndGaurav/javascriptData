// clone nodes.
// const todoList = document.querySelector(".todo-list");
// const newListItem = document.createElement("li");
// newListItem.textContent= "New list";
// todoList.append(newListItem);
// const newListItem2 = newListItem.cloneNode(true);
// todoList.prepend(newListItem2);

// appendchild
const olditem = document.querySelector(".todo-list");
const oldMethod = document.createElement("li");
oldMethod.textContent="This append child method is old";
olditem.appendChild(oldMethod);

// insertBefore 
const olditem1 = document.querySelector(".todo-list");
const oldMethod1 = document.createElement("li");
oldMethod1.textContent = "Insert this element before the local one";
const beforeThis = document.querySelector(".todo-list li");
olditem1.insertBefore(oldMethod1, beforeThis);
