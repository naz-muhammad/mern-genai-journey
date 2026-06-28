// 🧠 Question:

// Find the maximum number in the array using reduce.

const arr = [9, 1, 3, 2, 58, 38, 90]

const maxNum = arr.reduce((max, currentValue) => {

    if (currentValue > max) {
        return currentValue;
    }

    return max;
    
}, arr[0]);

console.log(maxNum);


// const maxNum = arr.reduce((max, currentValue) => {
//     return currentValue > max ? currentValue : max;
// }, arr[0]);