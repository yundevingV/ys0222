var timer=0;

var sec = "";

var x =setInterval(function(){
    
    sec = parseInt(timer/5);

    document.getElementById("demo").innerHTML = sec;
    timer++;

}, 1000);
