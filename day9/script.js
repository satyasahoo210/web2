const todoUl = document.getElementById("todo-list")

const input = document.getElementById("input-field")
const addButton = document.getElementById("add-todo")

const todos = []

addButton.addEventListener('click', addToTodoList)

function addToTodoList() {
    // 1. Get value from `input` box
    let data = input.value
    
    // 2. Create `li` element
    let listItem = document.createElement('li')
    // 3. Add textContent
    listItem.textContent = data

    // 4. Add the `li` element to `ul`
    todoUl.appendChild(listItem)
    todos.push(data)

    // 5. Clear input value
    input.value = ''
}

function addToTodoListFromArray() {
    for(let todo of todos) {
        let listItem = document.createElement('li')
        listItem.textContent = todo

        todoUl.appendChild(listItem)
    }
}

function main() {
    // Fetch TODOs
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(function(json) {
            for(let data of json) {
                todos.push(data.title)
            }
        })
        .then(addToTodoListFromArray)
}


window.onload = main




/**
 * document API
 * ------------
 * - addEventListener
 * - append
 * - appendChild
 * - createElement
 * - getElementById
 * - getElementsByClassName
 * - getElementsByTagName
 * - getElementsByName
 * - querySelecotr
 * - querySelectorAll
 */


// Create (INSERT) - POST
// Read   (SELECT) - GET
// Update (UPDATE) - PUT / PATCH
// Delete (DELETE) - DELETE