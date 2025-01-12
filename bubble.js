let timer = 60;
let score = 0;
let hitRandomNumber;

function increaseScore () {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getNewHit(){
   hitRandomNumber =  Math.floor(Math.random() *10);
   document.querySelector('#hitval').textContent = hitRandomNumber;
}

function makeBubble() {
    let clutter = '';

    for (let i = 1 ; i <=176; i++){
        let randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`;

    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    let timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timervalue').textContent = timer;
        }else {
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = `<h1> Game Over! <br> Your Total score is: ${score}. </h1>`;
        }

    }, 1000);
}

document.querySelector('#pbtm').addEventListener('click', (e) => {
    let clickedNumber = Number(e.target.textContent)
    if (hitRandomNumber === clickedNumber){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
