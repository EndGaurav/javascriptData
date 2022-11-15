// note
// preventDefault() ------> not refresh the page.
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoUl = document.querySelector(".todo-list");

console.log(todoInput);
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const NewTodoValue = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
                                 <span class="text">${NewTodoValue}</span>
                                <div class="todo-btns">
                                    <button class="btn-class done">Done</button>
                                    <button class="btn-class remove">Remove</button>
                                </div>
                             `;
  newLi.innerHTML = newLiInnerHtml;
  todoUl.append(newLi);
  todoInput.value = "";
});

todoUl.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("done")) {
    // console.log("You have done it!!!!");
    const liTextDone = e.target.parentNode.previousElementSibling;
    liTextDone.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    // console.log("You have not done it yet!!");
    const liRemove = e.target.parentNode.parentNode;
    // liRemove.remove();
    console.log(liRemove);
  }
});
