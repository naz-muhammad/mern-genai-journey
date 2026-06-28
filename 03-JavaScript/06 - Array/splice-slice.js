const arr = [1, 2, 3, 4, 5, 6]

const sliceArr = arr.slice(1,3)

console.log("Original", arr);
console.log("SliceArray", sliceArr); // [ 2, 3 ] , because the last element not included
                                    // and it doesn't effect the orignal array

console.log("Original", arr);

const spliceArr = arr.splice(1, 3)

console.log("spliceArray", spliceArr); // [ 2, 3, 4 ] , because the last element are included
console.log("Original", arr);  //  [ 1, 5, 6 ] , because it manipulate the original array
