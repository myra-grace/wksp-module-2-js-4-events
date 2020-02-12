// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

let ifClicked = false;
let result = document.querySelector('.result')

let randomNum = Math.floor(Math.random()*5000);

let time = document.getElementById('time');
time.innerText = `${randomNum/1000}`;

let body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';
body.style.height = '100vh';
body.style.width = '100vw';

function hasClicked() {
    ifClicked = true;
    result.innerText = 'You win! 🎉'
    body.removeEventListener('click', hasClicked);
}

setTimeout (function() {
    if (ifClicked === false) {
        result.innerText = 'You lose 😵';
        body.removeEventListener('click', hasClicked);
    }
}, randomNum);

body.addEventListener('click', hasClicked);