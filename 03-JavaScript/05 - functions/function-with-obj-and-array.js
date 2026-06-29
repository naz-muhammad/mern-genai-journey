// function calculateCartPrice( num1 = 0 ) {
//     return num1 ;
// }

// console.log(calculateCartPrice(6))
// console.log(calculateCartPrice(6, 8, 9))  // just print 6  bcz we have just one parameter that recieve one argument 

// Here we use the spreed operator which we called here rest operator

// SyntaxError: Rest parameter may not have a default initializer  (...num = 0 ) not allowed

// function calculateCartPrice( ...num ) {
//     return num ;
// }

// console.log(calculateCartPrice(6))
// console.log(calculateCartPrice(6, 8, 9))  // It give us the all argument in an array


// function calculateCartPrice( value1 , value2 ,  ...num ) {
//     return num ;
// }


// console.log(calculateCartPrice(6, 9, 2))  // here just print in num is [ 2 ] bcz 6 are took by value1 and 9 by value2 then just 2 is left for num


// ++++++++++++++++++++++++++++++

// const user = {
//     name: "naz muhammad",
//     age: 20, 
//     ph: 923425084356
// }

// function handleObject( anyObj ) {
//     // console.log( anyObj );
//     console.log(`The name of user is ${anyObj.name} and the age is ${anyObj.age} and the phone number is ${anyObj.ph}`);
    
// }

// // handleObject( user )

// // we also pass it direct 

// handleObject({
//     name: "naz muhammad",
//     age: 20, 
//     ph: 923425084356
// })


// +++++++++++++++++++++++++++++++++++++++

const myNewArray = [ 200 , 300 , 400 , 800 ]

function returnSecondValue( anyArray ) {
    return anyArray[1] ;
}

// console.log(returnSecondValue( myNewArray ));

// we are also able to pass directly array as argument 

console.log(returnSecondValue([ 200 , 300 , 400 , 800 ]));

