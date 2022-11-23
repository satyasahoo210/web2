/*
Input: 5

Output:
*****              i - 5, * - 5
****               i - 4, * - 4
***                i - 3, * - 3
**                 i - 2, * - 2
*                  i - 1, * - 1

*/

let input = 5

// for (let i = 1; i <= input; i++) {
//     let line = ''
//     for (let j = 1; j <= input - i + 1; j++) {
//         line = line + '*'
//     }
//     console.log(line)
// }


for (let i = input; i >= 1; i--) {
    let line = ''
    for (let j = 1; j <= i; j++) {
        line = line + '*'
    }
    console.log(line)
}
