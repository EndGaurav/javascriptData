// classList add and remove , toggle classes.
const section_Todo = document.querySelector(".todo-section");
console.log(section_Todo.classList);
section_Todo.classList.add("bg-black");
section_Todo.classList.remove("bg-black");
const exist = section_Todo.classList.contains("form-todo");
console.log(exist);

// toggle
// if that class is present then toggle will remove it and if not then vice versa. 
section_Todo.classList.toggle("bg-black"); 