//same as last but clicking any green button changes them back to red.

//CREATING A BUTTON

let theButton = document.createElement('button');
let inner = document.createTextNode('Press Me!');
theButton.appendChild(inner);

let buttonContainer = document.querySelector('.button-container');
buttonContainer.appendChild(theButton);

//MAKING theButton CREATE 20 OTHER BUTTONS
function make20() {
    let i=0;
    while (i<20) {
        let newButton = document.createElement('button');
        newButton.innerText = "Merry Christmas!";
        buttonContainer.appendChild(newButton);
        //MAKE THE BUTTONS GREEN THEN RED
        newButton.addEventListener('click', () => {
            if (newButton.style.backgroundColor === 'green') {
                newButton.style.backgroundColor = 'red';
            } else {
                newButton.style.backgroundColor = 'green';
            }
        })
        i++;
    }
}
//MAKE theButton GREEN & RED
document.querySelector('button').addEventListener('click', () => {
    make20();
    if (theButton.style.backgroundColor === ''){
        theButton.style.backgroundColor = 'green';
    } else if (theButton.style.backgroundColor === 'green'){
        theButton.style.backgroundColor = 'red';
    } else {
        theButton.style.backgroundColor = 'green';
    }
})