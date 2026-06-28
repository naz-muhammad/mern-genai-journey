const students = [
  {
    id: 1,
    name: "Ali",
    marks: 85,
    passed: true,
  },
  {
    id: 2,
    name: "Ahmed",
    marks: 42,
    passed: false,
  },
  {
    id: 3,
    name: "Sara",
    marks: 91,
    passed: true,
  },
  {
    id: 4,
    name: "Fatima",
    marks: 67,
    passed: true,
  },
  {
    id: 5,
    name: "Usman",
    marks: 35,
    passed: false,
  },
];

// Q1   Create an array containing only student names.

// const studentNames = students.map(student => student.name)
// console.log(studentNames);

// Q2  Get all students with marks greater than 60.

// const filterMarks = students.filter( student => student.marks > 60 )
// console.log(filterMarks);

// Q3  Find the student whose id is 3.

// const userId = students.find( student => student.id === 3)  //// Returns an object, NOT an array
// console.log(userId);

// // Q4   Calculate total marks of all students.

// const allMarks = students.reduce( ( totalMark , student ) => {

//     return totalMark + student.marks ;

// }, 0)
// console.log(`All Students Marks: ${allMarks}`);

// Q5  Calculate average marks.


// const totalMarks = students.reduce( ( sum , student ) => {

//     return sum + student.marks ;

// }, 0)

// const averageMarks = totalMarks / students.length
// console.log(averageMarks);

// Q6  Check if at least one student failed.

// const failStd = students.find( student => student.passed === false )
// console.log(failStd);


// Q7   Check if all students passed.

// const passedStd = students.every( student => student.passed === true )
// console.log(passedStd);

// Q8  Sort students by marks from highest to lowest.

const sortHtoL = students.sort(( a , b ) => b.marks - a.marks )
console.log(sortHtoL);
