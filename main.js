//alert("Timeflo!");//printf?

//function that takes in time from user
//const inputtime=userinput;
//need a button to send minutes to function
function timer(){
    var clockupdate=document.getElementById("clock");
    var total= (document.getElementById('work').value * 60);//totsl seconds
    minutes=Math.floor(total/(60));//whole minutes
    seconds =total%minutes;
    //send to the html output "clock"
    var output=minutes.toString() +":"+seconds;
    clockupdate.innerHTML=output;
    total--;
    setInterval(timer, 1000);
    //alert(total);
}
//Pause?
//Stop[p;]



