// Question 1: Special Number

// Create a function:

// bool isSpecial(int n);

// A number is special if:

// Sum of its digits is even
// AND the number contains at least one odd digit

function specialDigit(n) {
    let sum = 0;
    let hasOddDigit = false;

    while (n > 0) {
        let digit = n % 10;

        sum += digit;

        if (digit % 2 !== 0) {
            hasOddDigit = true;
        }

        n = Math.floor(n / 10);
    }

    if (sum % 2 === 0 && hasOddDigit === true) {
        return "Special";
    } else {
        return "Not Special";
    }
}

console.log(specialDigit(777))