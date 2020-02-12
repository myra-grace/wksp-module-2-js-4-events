let start = document.querySelector('.start');
let body = document.querySelector('body');
let text = document.querySelector('.text');
let score = 0;

text.style.textAlign = 'center';
text.style.width = '20%';
text.style.height = '10%';
text.style.position = 'fixed';
text.style.top = '20%';
text.style.left = '40%';

start.style.width = '20%';
start.style.height = '10%';
start.style.position = 'fixed';
start.style.top = '45%';
start.style.left = '40%';

function makeMore() {
    start.style.display = 'none';
    let rNum = Math.floor(Math.random() * (50 - 2) + 2)
    console.log(rNum);
    
    for (let i= 0; i < rNum; i++) {
        let more = document.createElement('button');
        more.innerText = 'QUICK!';
        more.style.position = 'fixed';
        more.style.top = `${Math.floor(Math.random() * 95)}%`;
        more.style.left = `${Math.floor(Math.random() * 95)}%`;
        body.appendChild(more);

        more.addEventListener('click', () => {
            more.style.display = 'none';
            score += 1
        })
    
        setTimeout(() => {
            console.log(score);
            more.style.display = 'none';
            if (score === rNum) {
                text.innerText = 'You Win!'
            } else {
            text.innerText = `You clicked ${score} out of ${rNum} buttons`;
        }
        }, 5000);
    }
    start.removeEventListener('click', makeMore);
}


start.addEventListener('click', makeMore);