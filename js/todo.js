const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    paintToDo(newTodo)
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    span.innerText = newTodo
    toDoList.appendChild(li)
}


toDoForm.addEventListener("submit", handleToDoSubmit)