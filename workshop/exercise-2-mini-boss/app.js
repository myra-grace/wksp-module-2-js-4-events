//HTML parts
let body = document.querySelector("body");
let all = document.querySelector(".all");
let currentTime = document.querySelector(".current-time");

let countDown = document.querySelector(".count-down");
let input = document.querySelector(".input");
let startTimer = document.querySelector(".start-timer");

//Display Time
function setRealTime() {
  let today = new Date();
  let localTime = today.getHours() + ":" + today.getMinutes();
  let timeElement = document.querySelector(".current-time");
  timeElement.innerText = `${localTime}`;
}

setRealTime();

setInterval(() => {
  setRealTime();
}, 1000);

//Timer
startTimer.addEventListener("click", () => {
  if (input.value.includes(":")) {
    console.log("we have a colon!");

    if (
      input.value.indexOf(":") !== input.value.lastIndexOf(":") ||
      input.value.indexOf(":") === 0 ||
      input.value.indexOf(":") === input.value.length - 1
    ) {
      input.value = "Not a number!";
      return;
    }

    let splitInput = input.value.split(":");
    let hourNum = parseInt(splitInput[0]);
    let minuteNum = parseInt(splitInput[1]);

    if (isNaN(hourNum) || isNaN(minuteNum)) {
      input.value = "Not a number!";
      return;
    }

    //inputNumber * 60 * 60 * 1000 = miliseconds from hour
    let timerTime = new Date();
    timerTime.setHours(timerTime.getHours() + hourNum);
    //inputNumber *60 * 1000 = ms from minutes
    timerTime.setMinutes(timerTime.getMinutes() + minuteNum);

    let interval = setInterval(() => {
        console.log(Math.round((timerTime - new Date()) / 1000));
      }, 1000);

    setTimeout(() => {
        clearInterval(interval);
      alert("Timer done");
    }, (timerTime - new Date()));
    
  } else {
    let num = parseInt(input.value);
    if (isNaN(num)) {
      console.log("Not a number");
      input.value = "Not a number!";
      return;
    }

    // function HMS(ms) {
    //     let second = ms/1000;
    //     let hour = parseInt(second / 3600);
    //     second = second % 3600;
    //     let minute = parseInt(second / 60);
    //     second = second % 60;
    //     alert(hour + ':' + minute + ':' + second);
    // }
    
    // console.log(HMS(500000));

    //console.log(Math.round((final - new Date()) / 1000));

    let final = new Date();
    final.setMinutes(final.getMinutes() + num);

    let interval = setInterval(() => {
        let x = (Math.round((final - new Date()) / 1000))
        console.log(x);
        // countDown.innerText(`${x}`);   *NOT WORKING*
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      alert("Timer done");
    }, num * 60 * 1000);
  }
});
//Can't get it to display in H:M:S

//STYLING
body.style.margin = "0";
body.style.padding = "0";
body.style.width = "100%";
body.style.height = "100%";

//all's look
all.style.backgroundColor = "rgb(238,174,202)";
all.style.background =
  "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
all.style.borderRadius = "4px";
//all's position
all.style.position = 'absolute';
all.style.top = '0';
all.style.bottom = '0';
all.style.left = '0';
all.style.right = '0';
all.style.width = '80%';
all.style.height = '50%';
all.style.margin = 'auto';

let p = document.querySelector('p');
p.style.padding = '20px';

//Content
let container = document.querySelector('.container');
container.style.textAlign = 'center';
container.style.fontFamily = 'arial, sans-serif';
container.style.padding = '20px';
container.style.position = 'absolute';
container.style.top = '0';
container.style.bottom = '0';
container.style.left = '0';
container.style.right = '0';
container.style.width = '80%';
container.style.height = '50%';
container.style.margin = 'auto';


currentTime.style.fontSize = '40px';
currentTime.style.margin = '0';
countDown.style.margin = '0';
countDown.style.paddingBottom = '30px'

input.focus();
