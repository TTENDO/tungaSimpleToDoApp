//variables
const inputEl = document.querySelector(".inputEl");
const todos = document.querySelector(".todos");
const todolist = [];

//create Todo

function createTodo() {
  todolist.push(inputEl.value);
  const singleTodo = document.createElement("p");

  todolist.forEach(function (todoitem) {
    singleTodo.innerText = todoitem;
    console.log(todolist);
  });
  todos.appendChild(singleTodo); //inject each todo within the div of class todos
}
inputEl.onchange = createTodo;

//?CRUD - Create Read Update Delete

//TODO delete Todo
//TODO update Todo
//TODO design.
