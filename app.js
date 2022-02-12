//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const sharingan = document.querySelector(".sharingan-button");
const body = document.querySelector(".body");

//Event Listeners

todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click', deleteCheck);
sharingan.addEventListener('click',changeColor);

//Functions

function addTodo(event){
    event.preventDefault();

    if (todoInput.value !== "") {

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}
}

function deleteCheck(event){
    const item = event.target;

    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("deleted");
        setTimeout(() => {todo.remove();}, 500);
   


    }

    if (item.classList[0] === 'completed-btn'){

        const todo = item.parentElement;
        todo.classList.toggle("completed");
    

}
}

function changeColor(event){
    body.classList.toggle("changebody");

}