// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------


// 'CLICK! FAST!' text in middle of screen

//start timer as soon as window open
//set timer to 1000ms
//set body to accept click
    //if clicked before 1000ms has passed change text to 'Yay!!'
    //if timer reaches 1000ms and no click, change text to 'Too late...'

let body = document.querySelector('body');
let text = body.querySelector('.result');

let click2 = false;
body.style.height ='100vh';
body.style.width = '100vw';
body.style.padding = '0';
body.style.margin = '0';

text.innerText = '‼Click FAST‼';

function hasClicked(){
    click2 = true;
    text.innerText = 'You Win 😊';
    body.removeEventListener('click', hasClicked);
}
setTimeout(function(){
    if(click2 === false) {
        text.innerText = 'You lost 🙁';
        body.removeEventListener('click', hasClicked);
    }
} ,1000)

// setTimeout(
//     () => {
//         document.body.style.backgroundColor = 'black';
//         console.log('Boo!');
//     }, 1000);

// let x = body.addEventListener('mousedown', ()) => {
//     document.body.style.backgroundColor = 'blue';
// }

body.addEventListener('click', hasClicked)