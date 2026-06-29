/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let faultyCalculator = (num1 , num2 , op) => {

    let randomNumber = Math.random()

    if ( randomNumber < 0.1 ) {
        
        if ( op === '+') {
            console.log("Random Number: " , randomNumber);
            
            return num1 - num2
        }

        else if ( op === '*') {
            console.log("Random Number: " , randomNumber);
            
            return num1 + num2
        }

        else if ( op === '-') {
            console.log("Random Number: " , randomNumber);
            
            return num1 / num2
        }

        else if ( op === '/') {
            console.log("Random Number: " , randomNumber);
            
            return num1 ** num2
        }
        else {
            return "Invalid operator"
        }
    }
    else  {
        if ( op === '+') {
            return num1 + num2
        }

        else if ( op === '*') {
            return num1 * num2
        }

        else if ( op === '-') {
            return num1 - num2
        }

        else if ( op === '/') {
            return num1 / num2
        }
        else {
            return "Invalid operator"
        }
    }
}

let result = faultyCalculator(22,11,'+')
console.log(`Result: ${result}`)