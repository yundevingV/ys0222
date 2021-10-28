let timer = 0;

let x =setInterval(function(){
  timer =timer +9;
  document.getElementById("demo").innerHTML = timer;
  if (timer >500)
  {timer =timer +5;
    document.getElementById("demo").innerHTML = timer;}
}, 1000);
