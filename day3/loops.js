// Loops
/**
 * For Loop
 *  - For
 *  - For-of
 *  - For-in
 * 
 * 
 * While Loop
 *  - while
 *  - do-while
 */


// for(let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let number = 21
// // 1,21
// // 3,7

// let number = 64
// // 1,64
// // 2,32
// // 4,16
// // 8,8

// let number = 81
// // 1,81
// // 3,27
// // 9,9

// let number = 100
// // 1,100
// // 2,50
// // 4,25
// // 5,20
// // 10,10

// let number = 25
// // 1,25
// // 5,5

let number = 87
// 1,87
// 3, 29

// let factors = []
// for(let i = 1; i <= Math.sqrt(number); i++) {
//     if(number % i == 0) {
//         factors.push([i, number / i]);
//     }
// }

// console.log(factors)


// 25 = 5
// 64 = 8
// 81 = 9
// 100 = 10
// 121 = 11
// 169 = 13
// 625 = 25
// sqrt


// Fibonacci sequence
// 0,1,1,2,3,5,8,13,.....
let max = 100
let a = 0
let b = 1
let c
while(a <= max) {
    console.log(a)
    c = b
    b = a + b
    a = c
}

// a    b
// 0    1
// 1    1

// print
// 0 1
