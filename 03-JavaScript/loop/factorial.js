
let num = Number(prompt("Enter a num: "))
let factorial = 1

for (let i = num; i >= 1; i--) {
    console.log(`${i} X ${factorial} = ${factorial * i}`);

    factorial *= i

}
console.log(" ");

console.log(`factorial: ${factorial}`);
