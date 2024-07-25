const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        traget: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

function customRender(reactElement, container){
   /*
    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;
    domElem.setAttribute('href', reactElement.props.href);
    domElem.setAttribute('traget', reactElement.props.traget);

    container.appendChild(domElem);
    */
   const domElem = document.createElement(reactElement.type);
   domElem.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElem.setAttribute(prop, reactElement.props[prop])
   }

   container.appendChild(domElem);
}

customRender(reactElement, mainContainer)