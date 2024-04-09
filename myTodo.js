let todos = [];

function rendered() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = " ";

  todos.forEach((item, index) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
    <p id="texts">${item}</p>
    <button onclick="removeTodo(${index})" class="btn">Delete</button>
    <button onclick="editTodo(${index})" class="btn">Edit</button>
    `;
    todoList.appendChild(todoItem);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (todoText) {
    todos.push(todoText);
    todoInput.value = "";
    rendered();
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  rendered();
}

function editTodo(index) {
  const newValue = prompt("Tahrirlang:", todos[index]);
  if (newValue !== null) {
    todos[index] = newValue.trim();
    rendered();
  }
}

function clearTodo() {
  if (todos.length === 0) {
    alert("Qo'ymisiz hech nima yo'qku o'zi!");
  } else {
    alert("Barcha xabarlar o'chiriladi");
    todos = [];
    rendered();
  }
}
