// static list vs live list.
// querySelector always give static list.
// getElementBySometing.... always give you live list.
const list = document.querySelector(".todo-list");
const sixthItem = document.createElement("li");
sixthItem.classList.add("item-class");
sixthItem.textContent= "item 6";
list.append(sixthItem);
const lists = document.getElementsByClassName("item-class");
console.log(lists);