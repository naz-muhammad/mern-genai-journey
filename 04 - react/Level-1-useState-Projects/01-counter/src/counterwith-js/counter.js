const root = document.getElementById('root')

const incButton = document.createElement('button')
const decButton = document.createElement('button')
let para = document.createElement('p')

// console.dir(incButton);

incButton.textContent = 'Add'
decButton.textContent = 'Remove'
// console.log(incButton);

root.append(incButton , decButton , para)

let counter = 1

para.innerText = `${counter}`

incButton.addEventListener('click' , handleCounter)


function handleCounter(){
    
    para.innerText = `${++counter}`
    // console.log(counter);
}

