// Logical Operators
// -----------------
// or - ||
// and - &&
// not - !
// Bit-wise Operator
// -----------------
// bitwise or - |
// bitwise and - &
// xor - ^
// left shift - <<
// right shift - >>



let number = 3

if (number % 2 == 0) {
    console.log(number, 'is even')
} else {
    console.log(number, 'is not even')
}

if (number & 1 == 0) {
    console.log(number, 'is even')
} else {
    console.log(number, 'is not even')
}


/**
 * Given an array of numbers ( integers ) 
 *  - print 'F' if it is divisible by 3
 *  - print 'B' if it is divisible by 5
 *  - print 'FB' if it is divisible by 3 and 5
 *  - print the number otherwise
 */

let numbers = [1, 3, 5, 6, 9, 15, 23, 30, 12]
let output = [1, 'F', 'B', 'F', 'F', 'FB', 23, 'FB', 'F']

console.log('Priya\'s Output')
// Priya
for (const number of numbers) { // number - 15
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FB")
    }
    else if (number % 3 == 0) {
        console.log("F")
    }
    else if (number % 5 == 0) {
        console.log("B")
    }
    else
        console.log(number)

}



/**
 * AND
 * ----
 * 
 * TRUE TRUE -- TRUE
 * FALSE TRUE -- FALSE
 * TRUE FALSE -- FALSE
 * FALSE FALSE -- FALSE
 */



console.log('Ankit\'s Output')
// Ankit
for (const number of numbers) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log('FB')
    }
    else if (number % 3 == 0) {
        console.log('F')
    }
    else if (number % 5 == 0) {
        console.log('B')
    }

    else
        console.log(number)
}
