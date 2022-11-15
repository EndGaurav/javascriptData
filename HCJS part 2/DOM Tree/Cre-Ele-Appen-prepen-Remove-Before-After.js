// document.createElement()
// Append
// prepend
// remove

const newTodolist = document.querySelector(".todo-list");
const newlistItem = document.createElement("li");
newlistItem.textContent = "This element is come from createElement function";
newTodolist.append(newlistItem);
// newTodolist.prepend(newlistItem);
// console.log(newlistItem);

// const todo1 = document.querySelector(".todo-list li ");
// todo1.remove();
// console.log(todo1);

const todo2 = document.querySelector(".todo-list li ");
todo2.remove();

// before
// const todo1 = document.querySelector(".todo-list");
// const newBeforeElement = document.createElement("input"); 
// newBeforeElement.textContent = "gaurav";
// newBeforeElement.setAttribute("type", "number");
// newBeforeElement.classList.add("inputs-random");
// newBeforeElement.classList.remove("inputs-random")
// todo1.before(newBeforeElement);
// newBeforeElement.remove();

// After 
// const todo1 = document.querySelector(".todo-list");
// const newBeforeElement = document.createElement("input"); 
// newBeforeElement.textContent = "gaurav";
// newBeforeElement.setAttribute("type", "number");
// newBeforeElement.classList.add("inputs-random");
// newBeforeElement.classList.remove("inputs-random")
// todo1.after(newBeforeElement);
// newBeforeElement.remove();
