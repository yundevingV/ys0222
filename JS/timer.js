var score = 0;

var x =setInterval(function(){
            score =score +9;
            document.getElementById("demo").innerHTML = score;
            {
            if (score > 300)
            {score = score +3;
            document.document.getElementById("demo").innerHTML = score;

            if (score >500)
            {score =score +5;
            document.getElementById("demo").innerHTML = score;}
            }}}, 1000);