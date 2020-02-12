let menu = document.querySelector('.menu');
let startGame = document.querySelector('.start-game');
let instructions = document.querySelector('.instructions');
let showMe = document.querySelector('.instructions-pop-up');
let okay = document.querySelector('.ok');

let characters = document.querySelector('.characters');
let kirby = document.querySelector('.kirby');
let kirbyStandby = document.querySelector('.kirby-standby');
let sonic = document.querySelector('.sonic');
let sonicStandby = document.querySelector('.sonic-standby');

let prizeContainer = document.querySelector('.prize-container');

//______________________________MENU____________________________________

function gamePlay() {
    instructions.removeEventListener('click', howToPlay);
    okay.removeEventListener('click', alright)

    menu.style.display = 'none';
    characters.style.display = 'flex'

    let prize = document.createElement('img');
            prize.setAttribute('src', 'imgs/prize.gif')
            prize.style.position = 'fixed';
            prize.style.bottom = '40px';
            prize.style.width = '80px';
            prize.style.height = 'auto';
            prizeContainer.appendChild(prize);

    // if (pointsK < 3 || pointsS < 3; i++) {
        setTimeout(() => {
            let sig = document.createElement('img')
            sig.setAttribute('src', 'imgs/signal.png');
            sig.style.position = 'fixed';
            sig.style.maxHeight = '20%'
            sig.style.top = `${Math.floor(Math.random() * 80)}%`;
            sig.style.left = `${Math.floor(Math.random() * 80)}%`;

            document.body.appendChild(sig);

            document.addEventListener('keydown', keyDownK);
            document.addEventListener('keydown', keyDownS);

        }, Math.floor(Math.random() * (5000 - 2000) + 2000));
        
    // }

    startGame.removeEventListener('click', gamePlay);
}

function howToPlay() {
    showMe.style.display = 'block';
}

function alright() {
    showMe.style.display = 'none';
}

//__________________________________GAMEPLAY______________________________
let quick = [];
let pointsK = [];
let pointsS = [];

function firstClick() {
    let first = quick[1];
    if (first = 'Kirby') {
        pointsK.push(first);
    } else if (first = 'Sonic') {
        pointsS.push(first);
    }
}

//                                `` KIRBY ``
function kirbyRunAnimation(krun) {
    let krunLeftStyle = parseFloat(krun.style.left)
    if (krunLeftStyle < 45) {
        krunLeftStyle += 1;
        krun.style.left = krunLeftStyle + '%';
        window.requestAnimationFrame(() => kirbyRunAnimation(krun));
    } else if (krunLeftStyle >= 45) {
        krun.setAttribute('src', 'imgs/p1win.gif');
        krun.style.width = '100px';
        krun.style.height = '100px';
        kirby.appendChild(krun);
        prizeContainer.style.display = 'none';

    } while (krunLeftStyle >= 45) {
        setTimeout(() => {
        krun.style.display = 'none';
        kirbyStandby.style.display = 'block';
        prizeContainer.style.display = 'flex';
        }, 1500); 
        break;
    }    
}

function keyDownK(event) {
    if (event.key === 'q') {
        quick.push('Kirby');
        let krun = document.createElement('img');
        krun.setAttribute('src', 'imgs/p1run.gif');
        krun.style.display = 'block';
        krun.style.width = '70px';
        krun.style.height = '70px';
        krun.style.position = 'absolute';
        krun.style.bottom = '40px';
        krun.style.left = '10%';
        kirby.appendChild(krun);

        kirbyStandby.style.display = 'none'

        window.requestAnimationFrame(() => kirbyRunAnimation(krun));
    }
    firstClick();
    console.log('Quick:' + quick);
    console.log('Kirby points:' + pointsK)
    console.log('Sonic points' + pointsS)
}

//                    `````````````` SONIC ``````````````
function sonicRunAnimation(srun) {
    let sonicRightStyle = parseFloat(srun.style.right)
    if (sonicRightStyle < 45) {
        sonicRightStyle += 1;
        srun.style.right = sonicRightStyle + '%';
        window.requestAnimationFrame(() => sonicRunAnimation(srun));
    } else if (sonicRightStyle >= 45) {
        srun.setAttribute('src', 'imgs/p2win.gif');
        srun.style.width = '110px';
        srun.style.height = '110px';
        sonic.appendChild(srun);
        prizeContainer.style.display = 'none';
    } while (sonicRightStyle >= 45) {
        setTimeout(() => {
        srun.style.display = 'none';
        sonicStandby.style.display = 'block';
        prizeContainer.style.display = 'flex';
        }, 1500); 
        break;
    }
}

function keyDownS(event) {
    if (event.key === 'p') {
        quick.push('Sonic');
        let srun = document.createElement('img');
        srun.setAttribute('src', 'imgs/p2run.gif');
        srun.style.display = 'block';
        srun.style.width = '100px';
        srun.style.height = '100px';
        srun.style.position = 'absolute';
        srun.style.bottom = '40px';
        srun.style.right = '10%';
        sonic.appendChild(srun);

        sonicStandby.style.display = 'none'

        window.requestAnimationFrame(() => sonicRunAnimation(srun));
    }
    firstClick();
    console.log('Quick:' + quick);
    console.log('Kirby points:' + pointsK)
    console.log('Sonic points' + pointsS)
}

//EVENT LISTENERS
startGame.addEventListener('click', gamePlay);
instructions.addEventListener('click', howToPlay);
okay.addEventListener('click', alright);