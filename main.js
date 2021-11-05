//alert("Timeflo!");//printf?

//function that takes in time from user
//const inputtime=userinput;
//need a button to send minutes to function
let pomodoro=0;
let total = 0;
let countUp;//variable for setinterval, so you can stop it see w3cschool for info


const display = document.querySelector('.clock');


function showminsandsec() {
 
    let mins = Math.floor((total % 3600)/60);//see w3c school for date parsing
    let sec = Math.floor(total % 60)
    let displaymins = (mins < 10) ? '0' + mins : mins;
    let displaysec = (sec < 10) ? '0' + sec : sec;
    display.textContent = displaymins + ':' + displaysec;

    total++;

    var worktime = document.getElementById('work').value
    worktime = worktime *2;//input time (min-sec)
    var resttime = document.getElementById('rest').value
    resttime = resttime *2;
    if(total==worktime && pomodoro==0){
        clearInterval(countUp);
        startBtn.disabled = false;
        total = 0;
        pomodoro++;
        //showminsandsec();
        countUp = setInterval(showminsandsec, 1000);
        startBtn.disabled = true;
        
    }//made it to the work or rest time
    if(total == resttime && pomodoro==1){
        clearInterval(countUp);
        startBtn.disabled = false;
        total = 0;
        pomodoro--;
        //showminsandsec();
    }
  
    
}

//hold onot these constants
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

//see eloquent javscript.net/15_evnent for using thins method of event listeners
startBtn.addEventListener('click', () => {
        countUp = setInterval(showminsandsec, 1000);
        startBtn.disabled = true;
    });
pauseBtn.addEventListener('click', () => {
    clearInterval(countUp);
    startBtn.disabled = false;
});
resetBtn.addEventListener('click', () => {
    clearInterval(countUp);
    startBtn.disabled = false;
    total = 0;
    pomodoro=0;
    showminsandsec();
});
   
function dostuff(){
    var worktime = document.getElementById('work').value
    worktime = worktime *1;//input time (min-sec)
    var resttime = document.getElementById('rest').value
    resttime = resttime *1;
    var ct =0;
    for(ct;ct<2;ct++){
        if(total==worktime && pomodoro==0){
            clearInterval(countUp);
            startBtn.disabled = false;
            total = 0;
            pomodoro++;
            showminsandsec();
            countUp = setInterval(showminsandsec, 1000);
            startBtn.disabled = true;
            
        }//made it to the work or rest time
        if(total == resttime && pomodoro==1){
            clearInterval(countUp);
            startBtn.disabled = false;
            total = 0;
            pomodoro--;
            showminsandsec();
        }
    }
    
} 
//dostuff();
showminsandsec();  

//Pause?
//Stop[p;]



