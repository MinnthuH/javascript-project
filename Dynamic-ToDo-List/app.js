const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", () => {
  const newtodoText = newToDoInput.value;

  if (newToDoInput !== "") {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newtodoText;

    // delete button create
    const deletetodoBtn = document.createElement("button");
    deletetodoBtn.innerText = "Delete";

    // delete todo
    deletetodoBtn.classList.add("deleteBtn");
    deletetodoBtn.addEventListener("click", () => {
      newTodoItem.remove();
    });

    // create todo list
    newTodoItem.appendChild(deletetodoBtn);
    todoList.appendChild(newTodoItem);
    newToDoInput.value = "";
  }
});
