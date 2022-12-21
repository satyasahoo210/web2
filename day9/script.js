const todoUl = document.getElementById("todo-list")
const input = document.getElementById("input")
const addButton = document.getElementById("add-todo")

function addToTodoList() {
    let data = input.value
    
    let listItem = document.createElement('li')
    listItem.textContent = data

    todoUl.appendChild(listItem)

    input.value = ''
}

addButton.addEventListener('click', addToTodoList)



