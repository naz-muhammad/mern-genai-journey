

const mainContainer = document.getElementById('root')

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me'

}

const customRender = (reactElement , container) => {
    // console.log(document.createElement(reactElement.type))
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    /*
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    console.log(domElement);
    container.appendChild(domElement)
    console.log(container);
    */

    for (const prop in reactElement.props) {
        // if (prop === 'children') continue;
        // console.log(reactElement.props ); // obj of attributes
        // console.log(prop); // give us key 
        // console.log(reactElement.props[prop]) // value
        // console.log(reactElement.props.prop) // undefine bcz the prop is variable

        domElement.setAttribute(prop, reactElement.props.prop)
    }
    
    container.appendChild(domElement)
}

customRender(reactElement , mainContainer)