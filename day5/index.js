const output = document.getElementById('output')

function print(msg) {
    output.textContent += msg
    output.textContent += '\n'
}

// console.log = print

// -------------------------------------------

// const h1 = document.getElementById('heading')
// console.log(h1)
// console.log(h1.textContent)

// const h2 = document.getElementsByClassName('head2')[0]
// console.log(h2)
// console.log(h2.textContent)

// const span = document.getElementsByTagName('span')[0]
// console.log(span)
// console.log(span.textContent)

// const div = document.getElementsByTagName('div')[0]
// console.log(div)
// console.log(div.textContent)


const element = document.querySelectorAll('div.head2 > *')
console.log(element)
console.log(element.textContent)

/**
 * Selectors
 * ---------
 * `universal` selector - *
 * `id` selector - #id
 * `class` selector - .className
 * `attribute` selector = [attribute-name="value"]
 */