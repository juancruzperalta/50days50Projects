const inputTodo = document.querySelector("#input-todo"),
  list = document.querySelector(".list"),
  form = document.querySelector("form");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => insertarTodo(todo));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  insertarTodo();
});

function insertarTodo(todo) {
  let todoText = inputTodo.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement("li");
    if (todo && todo.completed) {
      li.classList.add("completed");
    }
    li.innerText = todoText;
    li.addEventListener("click", (e) => {
      li.classList.toggle("completed");
      obtenerLocalStorage();
    });
    li.addEventListener("contextmenu", (e) => {
      li.remove();
      obtenerLocalStorage();
    });
    list.appendChild(li);
    obtenerLocalStorage();
  }
}

function obtenerLocalStorage() {
  const li = document.querySelectorAll("li");

  const todos = [];

  li.forEach((push) => {
    todos.push({
      text: push.textContent,
      completed: push.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
