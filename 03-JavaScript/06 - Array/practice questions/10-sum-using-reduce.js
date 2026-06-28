// 🧠 Question:

// Find the sum of all numbers using reduce.

let arr = [1, 2, 3, 4];

let sumArr = arr.reduce((sum, k) => {
    // console.log(sum)
  return sum + k;

}, 0);

console.log(sumArr)