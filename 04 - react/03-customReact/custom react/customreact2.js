// Create element 


// function createElement( tag , attributes , Children ) {

//     const element = document.createElement(tag)
//     // console.log(element); 
//     element.textContent = Children
    
//     for (const key in attributes) {
//         // console.log(key);
//         // console.log(attributes."heading1");
//         // console.log(attributes[key]);
//         // console.log(attributes);

//         element.setAttribute(key , attributes[key])
//     }
    
//     // console.log(element);
//     return element
    
// }

// const h1 = createElement( 'h1' , {id:'heading1' , class:'heading'} , 'I am h1 created first time')
// const h2 = createElement( 'h2' , {id:'heading2' , class:'heading'} , 'I am h1 created first time')
// const div = createElement( 'div' , {id:'heading3' , class:'heading'} , 'I am h1 created first time')

// const root = document.getElementById('root')

// root.appendChild(h1)
// root.appendChild(h2)
// root.appendChild(div)

// console.log(h1);
// console.log(h2);
// console.log(div);

// div.appendChild(h2)
// div.appendChild(h1)

// How the Internally look like not exact but for learning

// {
//     tag: 'h1',
//     attributes: {
//         id: 'heading1',
//         class: 'heading'
//     },
//     Children: 'I am h1 created first time'
// }


// ++++++++++++++++++++++++++++++++++++


const React = {
     createElement: function( tag , attributes , Children ) {

    const element = document.createElement(tag)
    // console.log(element); 
    element.textContent = Children
    
    for (const key in attributes) {
        // console.log(key);
        // console.log(attributes."heading1");
        // console.log(attributes[key]);
        // console.log(attributes);

        element.setAttribute(key , attributes[key])
    }
    
    // console.log(element);
    return element
    
}
}

const h1 = React.createElement( 'h1' , {id:'heading1' , class:'heading'} , 'I am h1 created first time')
const h2 = React.createElement( 'h2' , {id:'heading2' , class:'heading'} , 'I am h1 created first time')
const div = React.createElement( 'div' , {id:'heading3' , class:'heading'} , 'I am h1 created first time')

const root = document.getElementById('root')

// ReactDOM

const ReactDOM = {
    Render: function(parent , child){
        parent.append(child)
    }
}

ReactDOM.Render(root , h1)
ReactDOM.Render(root , h2)
ReactDOM.Render(root , div)



