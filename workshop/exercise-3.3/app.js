//MAKING THE BUTTON
let theButton = document.createElement("button");
let inside = document.createTextNode("Click me!");
theButton.appendChild(inside);
let buttonContainer = document.querySelector(".button-container");
buttonContainer.appendChild(theButton);
//STYLE CENTER & MIDDLE theButton

//MAKING theButton MAKE 20 BUTTONS RANDOMLY PLACED
function make20() {
  for (let i = 0; i < 20; i++) {
    let aNewButton = document.createElement("button");
    aNewButton.innerText = "I'm New!";
    aNewButton.style.position = 'fixed';
    aNewButton.style.top = `${Math.floor(Math.random() * 100)}%`;
    aNewButton.style.left = `${Math.floor(Math.random() * 100)}%`;
    buttonContainer.appendChild(aNewButton);
    //ADDING COLOUR CHANGES
    aNewButton.addEventListener('click', () => {
        if (aNewButton.style.backgroundColor === 'green') {
            aNewButton.style.backgroundColor = 'red';
        } else {
            aNewButton.style.backgroundColor = 'green';
        }
    })
  }
}

//CALLING THE FUNCTION
theButton.addEventListener('click', () => {
    make20();
    //ADDING COLOUR CHANGES
    if (theButton.style.backgroundColor === 'green') {
        theButton.style.backgroundColor = 'red';
    } else {
        theButton.style.backgroundColor = 'green';
    }
})


//_____________________________________________________________________


//STYLING
let body = document.querySelector('body');
body.style.width = '100vw';
body.style.height = '100vh';
body.style.margin = '0';
body.style.padding = '0';

buttonContainer.style.minWidth = '100%';
buttonContainer.style.minHeight = '100%';
buttonContainer.style.margin = 'auto';

let tb = theButton.style;
tb.width = '100px';
tb.height = '50px';
tb.position = 'absolute';
tb.left = '0';
tb.right = '0';
tb.top = '0';
tb.bottom = '0';
tb.margin = 'auto';

tb.borderRadius = '4px';
tb.border = 'none';
tb.backgroundColor = 'grey';
tb.color = 'blue';

theButton.style.zIndex = '1';