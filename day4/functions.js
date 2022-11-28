/**
 * Returns the max element from the array
 * @param {number} arr 
 * @return number
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}



const arr = [1,5,2,7,3,7,1,8,12,56,64,23,76,23]
console.log(findMax(arr))  // 76



// find max
// find min
// positives, negetives, zeros
const q1 = {
    input: [
        [1,2,3,4,0,-1,-4,-2,0,1,5,-1],
        [1],
        [0],
        [-1,-2,-3,0]
    ],
    output: [
        // 1, -1, 0
        [1/2, 1/3, 1/6],
        [1, 0, 0],
        [0, 0, 1],
        [0, 3/4, 1/4]
    ]
}
