// function sum(a , b) {
//     console.log( a + b )
// }

// sum // it is just a reference that the point toward specific  function
// sum()  //   it is the function calling or invoke the function

// const result = sum( 2, 5)  //  7 

// console.log(result)  // show undefined bcz we are just printing the valule on console so we are not getting back any value from the function, in other words we need to return a value or result from the function 

// function sum(a , b) {
//     return a + b ;
// }

// sum( 6 , 90 ) // not printing anything on console bcz we are just returning the value from function not printing yet on console , for printing we need to store the value in a variable and then console or direct console the function callint.

// console.log(sum(6 , 90));

// default user name

function greetUser( username = "User") {
    // string interpolation
    return `${username} Assalamu alaikom brother...`
}

console.log(greetUser())
console.log(greetUser("Naz Muhammad"))