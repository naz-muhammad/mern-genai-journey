const students = ["Abubakar" , "Umer" , "Osman" , "Ali"];

// const filteredStd = students.filter((student) => {

//     if( student[0] === "A" ) {
//         return student;
//     }

// })

// 

// shortcut of the above

// const filteredStd = students.filter((student) => {

//     return student[0] === "A"

// })

// console.log(filteredStd);

// shortcut of the above

const filteredStd = students.filter(student => student[0] === "A")

console.log(filteredStd);