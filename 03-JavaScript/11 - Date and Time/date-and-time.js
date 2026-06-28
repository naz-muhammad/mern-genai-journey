const date = new Date()

// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());
// console.log(date.toJSON());

let myDate = new Date(2023, 0, 23)
// console.log(myDate.toDateString());

// let myDate = new Date("01-15-2026")
// console.log(myDate.toDateString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);  // in mili second from 1st jan 1970 to now
// console.log(myDate.getTime());  // to milli second for comparision if needed

// console.log(Date.now()/1000);  // to second
// console.log(Math.floor(Date.now()/1000));  // to remove decimal and round off

let newDate = new Date() ;

// console.log(newDate) ;
// console.log(newDate.getDate()) ;
// console.log(newDate.getDay()) ;
// console.log(newDate.getMonth() + 1) ;

// console.log(`On ${newDate.getDate()} and the month ${newDate.getMonth() + 1} and the year ${newDate.getFullYear()}`)

console.log(newDate.toLocaleString('default' , {
    dateStyle: "long"
}));

