let marks = Number(prompt("Please enter your marks:"));

if(marks > 100 || marks < 0){
    console.log("invalid marks");
}
else if(marks >= 85){
    console.log("A")
}
else if(marks >= 75){
    console.log("B")
}
else if(marks >= 65){
    console.log("C")
}
else if(marks >= 50){
    console.log("D")
}
else{
    console.log("fail")
}
