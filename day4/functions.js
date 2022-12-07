// /**
//  * Returns the max element from the array
//  * @param {number} arr 
//  * @return number
//  */
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }



// const arr = [1,5,2,7,3,7,1,8,12,56,64,23,76,23]
// console.log(findMax(arr))  // 76



// // find max
// // find min
// // positives, negetives, zeros
// const inp1 = [1]

// function numberRatio(arr) {
//     let totalCount = arr.length
//     let positiveCount = 0
//     let negetiveCount = 0
//     let zeroCount = 0

//     for (const number of arr) {
//         if(number > 0) {
//             positiveCount++
//         } else if(number < 0) {
//             negetiveCount++
//         } else {
//             zeroCount++
//         }
//     }

//     return [positiveCount/totalCount, negetiveCount/totalCount, zeroCount/totalCount]
// }

// console.log(numberRatio(inp1))


let number = 10

function incrementByOne(number) {
    number++
}

console.log('Before Function Call', number)
incrementByOne(number)
console.log('After Function Call', number)

let numbers = [1,2,3,4,5]
function incrementAllByOne(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        numbers[index]++
    }
}

console.log('Before Function Call', numbers)
incrementAllByOne(numbers)
console.log('After Function Call', numbers)


let numberMap = {
    1: 'one',
    2: 'two'
}
function addThree(map) {
    map[3] = 'three'
}

console.log('Before Function Call', numberMap)
addThree(numberMap)
console.log('After Function Call', numberMap)



/**
 * Function call is of 2 types
 * - Call by value
 *   Call by value is done in case of primitive datatypes. In this case, a new copy of the object is created
 * - Call by reference
 *   Call by reference is done in case of complex or heavy datastuctures and objects. 
 *   In this case, an address of the refered object is shared not to over consume memory
 */