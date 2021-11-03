//alert("Timeflo!");//printf?

//function that takes in time from user
//const inputtime=userinput;
//need a button to send minutes to function
function timer(userinput){
    const now = Date.parse(new Date())
    const end=new Date(now + inputtime*60*1000);
    const difference = end-now;
    const hours = Math.floor(difference/(1000*60*60)%24);
        if(hours >0 ){
            alert("Please choose a time less than 60 minutes.");
            return;
        }
    const minutes = Math.floor(difference/(1000/60)%60);
    const seconds = Math.floor(difference/(1000)%60);
    return {difference, minutes, seconds};
}
//function that makes & updates the clock 
function newclock(id, userinput){
    const count = document.getElementById(id);
    const holdminutes= count.querySelector(".minutes");//these goto the span(long term storage)
    const holdseconds = count.querySelector(".seconds");
    //insdie of the clock function you update it!!!
    function update(){
        const out = timer(userinput);
        holdminutes.innerHTML=out.minutes;
        holdseconds.innerHTML=("0" + out.seconds);
        if(out.difference <=0){
            clearInterval(between);
        }
    }
    update();
    const between =setInterval(newclock, 1000);  //do that every second
}
function alltogether(worktime, restime){
    for(var i=0; i<2; i++){
    //the work 3xt
        timer(worktime);
        newclock(Pomodortimer, worktime);
        timer(restime);
        newclock(Pomodortimer, restime);
    }
    timer(worktime);
    newclock(Pomodortimer, worktime);
    timer(restime);
    newclock(Pomodortimer, restime);
    //after the 3rd work doa rest with 10 extra Minutes
}
//Pause?
//Stop[p;]



