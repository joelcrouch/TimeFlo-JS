//alert("Timeflo!");//printf?

//function that takes in time from user
//const inputtime=userinput;
//need a button to send minutes to function
let pomodoro=0;
let total = 0;
let countUp;//variable for setinterval, so you can stop it see w3cschool for info


const display = document.querySelector('.clock');


function showMinsAndSecs() {
 
    let mins = Math.floor((total % 3600)/60);//see w3c school for date parsing
    let sec = Math.floor(total % 60)
    let displaymins = (mins < 10) ? '0' + mins : mins;
    let displaysec = (sec < 10) ? '0' + sec : sec;
    display.textContent = displaymins + ':' + displaysec;

    total++;

    var workTime = document.getElementById('work').value
    workTime = workTime *1;//input time (min-sec)
    var restTime = document.getElementById('rest').value
    restTime = restTime *1;
    var extraRest= restTime + restTime;
 
    if(total==workTime && pomodoro==0){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);
        //startButton.disabled = true;
    }//made it to the work or rest time
    if(total == restTime && pomodoro==1){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);//1
    }
    if(total==workTime && pomodoro==2){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);
    }
    if(total == restTime && pomodoro==3){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);//2
    }
    if(total==workTime && pomodoro==4){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);
    }
    if(total == restTime && pomodoro==5){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);//3
    }
    if(total==workTime && pomodoro==6){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
        countUp = setInterval(showMinsAndSecs, 1000);
    }
    if(total == extraRest && pomodoro==7){
        clearInterval(countUp);
        startButton.disabled = false;
        total = 0;
        pomodoro++;
    }
}

//hold onot these constants  see mozilla docs for "query selector"
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

//see eloquent javscript.net/15_evnent for using thins method of event listeners
startButton.addEventListener('click', () => {
        countUp = setInterval(showMinsAndSecs, 1000);
        startButton.disabled = true;
    });
pauseButton.addEventListener('click', () => {
    clearInterval(countUp);
    startButton.disabled = false;
});
resetButton.addEventListener('click', () => {
    clearInterval(countUp);
    startButton.disabled = false;
    total = 0;
    pomodoro=0;
    showMinsAndSecs();
});

    
//Pause?
//Stop[p;]



