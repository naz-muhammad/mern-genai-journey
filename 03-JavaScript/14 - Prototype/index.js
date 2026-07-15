const student1 = {};
const student2 = {};
const student3 = {};

// student1.study = function(){
//     console.log("I am study one");
    
// };
// student2.study = function(){
//     console.log("I am study two");
//     return "done"
// };
// student3.study = function(){
//     console.log("I am study three");
// };

// console.log(student1);
// console.log(student1.study);
// console.log(student2);
// console.log(student2.study());  //When a function doesn't explicitly return anything, JavaScript automatically returns: undefine

                // +++         <<<     ...         ******          ...         >>>         +++

// for every object we need to create a fucntion then It work so it get difficult to adjust and too memory consuming

// Prototype : A prototype is simply another object that stores shared properties and methods.

// Instead, create one shared place.

// Prototype
//  ├── study()

Object.prototype.study = function(){
    console.log('I am a Prototype created by naz m...');
    return "It also accessable to me!"
}

console.log(`Object : ${student1.study()}`)

// Try for array

const arr = [1, 2, 3] ;
console.log(`array : ${arr.study()}`)  // study() : accessable

// Lets try for function  

function func() {
    
}

console.log(`func : ${func.study()}`)