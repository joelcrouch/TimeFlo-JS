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
//function that updates the clock 
//Pause?
//Stop




