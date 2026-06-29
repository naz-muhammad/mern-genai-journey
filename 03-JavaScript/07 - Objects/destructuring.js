const students = {
    name: "naz muhammad", 
    age: 20, 
    isMariad:  false, 
    studentId: 25
}

// console.log(students.studentId); 
// console.log(students.studentId); 
// console.log(students.studentId);

// another way of  accesccing the value of key in obj is destructuring

const {name , isMariad} = students ; // here we doesn't need repeatedly writing students.studentId

console.log(name);
console.log(isMariad);

const {name : n , isMariad : im} = students ;  // We can make the shorthand of any key

console.log(n);
console.log(im);

console.log(n,im);
