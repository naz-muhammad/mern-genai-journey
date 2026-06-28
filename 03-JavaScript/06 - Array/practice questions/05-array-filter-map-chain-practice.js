const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 300 }
];

// Create a new array that contains only products with price greater than 50

const newArr = products.filter(product => product.price > 50)
// console.log(newArr);

// 👉 From the original array, create a new array that contains only product names

const productsName = products.map( product => product.name )
// console.log(productsName);

// 👉 First filter products with price > 50
// 👉 Then map only their names

const finalCombo = products.filter(product => product.price > 50).map( product => product.name)
console.log(finalCombo);

