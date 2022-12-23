const todoUl = document.getElementById("todo-list")

const input = document.getElementById("input-field")
const addButton = document.getElementById("add-todo")

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

    // 5. Clear input value
    input.value = ''
}



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