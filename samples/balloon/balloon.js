const balloon = document.getElementById('balloon');

let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px` // or can write balloonSize + 'px' 

const MIN_SIZE = 6;
const MAX_SIZE = 600;
const MAX_EXPLOSION_SIZE = 1000;

const INCREMENT = 2;

function handleKeydown(event) {
    console.log(event.key);
    // if 'arrow up' 
    if (event.key === 'ArrowUp') {
        //grow balloon bigger than x
            balloonSize += INCREMENT;
            balloon.style.fontSize = `${balloonSize}px`;
            // if balloon is bigger than x
            if (balloonSize > MAX_SIZE) {
                //remove the event listener
                document.removeEventListener('keydown', handleKeydown);
                //replace balloon by explosion
                balloon.innerText = '💥';
                //explosion grows incrementlly
                const explosion = setInterval(function() {
                    balloonSize += 20;
                    balloon.style.fontSize = `${balloonSize}px`;
                    //if explosion size is y,
                    if (balloonSize > MAX_EXPLOSION_SIZE) {
                        //clear interval //stop growing
                        clearInterval(explosion);
                        //fadeout
                        balloon.style.opacity = 0;
                    }
                }, 30);
            }
    } else if (event.key === 'ArrowDown') { 
        console.log('DOWN');
    //if 'arrow down'
        //if balloon is bigger than z
            if (balloonSize > MIN_SIZE) {
                //make balloon smaller
                balloonSize -= INCREMENT;
                balloon.style.fontSize = `${balloonSize}px`;
            }
    }
}
            //event listener that listens for 'keydown'
document.addEventListener('keydown', handleKeydown);