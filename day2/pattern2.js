/*
Input: 5

Output:
*        L-1*
**       L-2**
***      L-3***
****     L-4****
*****    L-5*****

*/

let input = 5

for (let i = 1; i <= input; i++) {
    let line = ''
    for (let j = 1; j <= i; j++) {
        line = line + '*'
    }
    console.log(line)
}


// for (let i = input; i >= 1; i--) {
//     let line = ''
//     for (let j = 1; j <= i; j++) {
//         line = line + '*'
//     }
//     console.log(line)
// }
