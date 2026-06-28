// Given an array:
// 👉 Store only numbers that are greater than 10

const arr = [3, 5, 7, 9, 11, 15, 18]
const filteredArray = []

for (let i = 0; i < arr.length; i++) {
    
    if ( arr[i] > 10 ) {
        filteredArray.push(arr[i])
    }
    
}
// console.log(`filtered array: ${filteredArray}`);
console.log(filteredArray);
    