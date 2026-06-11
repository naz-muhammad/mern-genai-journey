// starting point => 3
// ending point => 89
// if number is divisible by 5 ( you have to add 2 in it)
// if number is divisible by 7 ( you have to subtract 2 from num)


for(let i = 3; i <= 89; i++){
    if(i % 5 == 0){
       i += 2
       console.log(i);
    }if(i % 7 == 0){
        i -= 2;
        console.log(i);
    }
}