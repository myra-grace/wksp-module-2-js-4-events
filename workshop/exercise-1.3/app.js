// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

let randomNum = Math.floor(Math.random()*5000);
let clicked = false;

let time = document.getElementById('timer');
time.innerText = `${randomNum/1000}`;
let result = document.querySelector('.result');

let body = document.querySelector('body');
body.style.width = '100vw';
body.style.height = '100vh';
body.style.margin = '0';
body.style.padding = '0';

function hasClicked() {
    clicked = true;
    result.innerText = '🎉 You Win! 🎉';
    body.removeEventListener('click', hasClicked);
};

setTimeout (function() {
    if (clicked === false) {
        result.innerText = 'You Lose 😅';
        body.removeEventListener('click', hasClicked);
    }
}, randomNum);

body.addEventListener('click', hasClicked);
