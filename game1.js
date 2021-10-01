    var animation;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var img1 = new Image();
    img1.src = "https://user-images.githubusercontent.com/91381230/135605415-7b80f908-7b68-4ef8-973b-94666efd1902.jpg"
    
    

    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
    
    var dino = {
        x : 10,
        y : 200,
        width : 30,
        height : 50,
        draw(){
            ctx.fillStyle = "green";
            ctx.drawImage(img1,this.x,this.y,this.width,this.height);
        }
    }

    var timer = 0;
    var cactusmix =[];
    var jumpingTime=0;
    
    var rn =Math.floor(Math.random()*50)+150;

    function dinoframe(){
    animation = requestAnimationFrame(dinoframe);
    timer++;
    
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer%rn==0){
        var cactus = new Cactus();
        cactusmix.push(cactus);    
    }
    cactusmix.forEach((a, i , o)=>{
        if(a.x < 0-a.width){
        o.splice(i,1)
    }
        a.x--;
        a.draw();
        collision(dino,a)
      })

    if(jumping == true){
    dino.y=dino.y-3;
    jumpingTime++;
}
    if(jumping==false){
        if(dino.y<200){
            dino.y=dino.y+3;
    }    
}
    if(jumpingTime>25){
        jumping=false;
        jumpingTime=0;
}
// jumopingTime0에서 100은 100만큼 위로 올라간다는 뜻 그리고 100이 넘으면 
// 다시 내려오기위해서 0으로 초기화
    
    dino.draw();
    }

    var jumping = false;
    document.addEventListener('keydown',function(e){
        if(e.code=='Space'){
            jumping = true;
        }
    })
   
dinoframe();

    class Cactus {
        constructor() {
            this.x = 500;
            this.y = 220;
            this.width = 10;
            this.height = 30;
        }
        draw() {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }
    
    var cactus = new Cactus();
    cactus.draw();

    function collision(dino,cactus){
        var xDifference = (cactus.x+10) - (dino.x+dino.width);
        var yDifference = cactus.y - (dino.y+dino.height);

        if(xDifference <0 && yDifference <0){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            cancelAnimationFrame(animation);
        };
    }
