
// Ankit
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// Priya
function findMax(arr) {
    let max =arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }

    }
    return max;
    
}


const arr = [1, 5, 2, 7, 3, 7, 1, 8, 12, 56, 64, 23, 76, 23]
console.log(findMax(arr))