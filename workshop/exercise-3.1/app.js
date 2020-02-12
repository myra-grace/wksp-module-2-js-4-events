//CREATING A BUTTON
let theButton = document.createElement('button');
let inside = document.createTextNode('I am a button, press me');
theButton.appendChild(inside);
let buttonContainer = document.querySelector('.button-container');
buttonContainer.appendChild(theButton);

//MAKING THE BUTTON MAKE 20 OTHER BUTTONS & TURN GREEN AFTER CLICKED
function myFunction() {
    let i = 0;
    while (i < 20) {
        let newButton = document.createElement('button');
        newButton.innerText = 'well, hello';
        buttonContainer.appendChild(newButton);
        i++;
    }
} 
document.querySelector('button').addEventListener('click', () => {
    theButton.style.backgroundColor = 'green';
    myFunction();
})

//STYLE
theButton.style.backgroundColor = 'red';
theButton.style.border = 'none';
theButton.style.borderRadius = '4px';
theButton.style.padding = '15px';
buttonContainer.style.textAlign = 'center';