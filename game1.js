    var animation;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var img1 = new Image();
    img1.src = "https://user-images.githubusercontent.com/91381230/135605415-7b80f908-7b68-4ef8-973b-94666efd1902.jpg"

    var img2 = new Image();
    img2.src = "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dd/Rammus_Render.png"
    
    var img3 = new Image();
    img3.src = "https://user-images.githubusercontent.com/91381230/135748205-c7849fbf-1922-4a0a-aa97-986be14961ca.png"

    var img4 = new Image();
    img4.src = "https://user-images.githubusercontent.com/91381230/135749135-6b18e9a6-6417-4f03-b95c-39ebab85b950.png"
    

    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight -200;
    
    
    var dino = {
        x : 10,
        y : 200,
        width :50,
        height : 50,
        draw(){
            ctx.fillStyle = "green";
            ctx.drawImage(img1,this.x,this.y,this.width,this.height);
        }
    }
    

    var timer = 0;
    var time = 0;
    var bigtime =0;
    // 타이머 if문마다 다르게 써야하는거같음
    var jumpingTime=0;

    

    var cactusmix =[];
    var obsmix = [];
    var bigmix = [];
    // 배열을 만들어 줌으로써 장애물들이 계속 만들어지게

    function dinoframe(){
    animation = requestAnimationFrame(dinoframe);
    timer++;
    time++;
    bigtime++;
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer%80==0){
        var cactus = new Cactus();
        cactusmix.push(cactus);    
    }
    cactusmix.forEach((a, i , o)=>{
        if(a.x < 10){  //어느 좌표에서 사라지는지
        o.splice(i,1)
    }
        a.x=a.x-3; //장애물 이동하는 속도
        a.draw();
        collision(dino,a)
      })

      if(time%120==0){
        var obs = new obstackle(); 
        obsmix.push(obs);
    }
    obsmix.forEach((b, c , d)=>{
        if(b.x < 10){
        d.splice(c,1)
    }
        b.x=b.x-5;
        b.draw();
        obscollision(dino,b)
      })

      if(bigtime%600==0){
        var big = new Big(); 
        bigmix.push(big);
    }
    bigmix.forEach((a1, i1 ,o1)=>{
        if(a1.x < 15){
            o1.splice(i1,1)
    }
        a1.x=a1.x-10;
        a1.draw();
        bigcollision(dino,a1)
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
    if(jumpingTime>30){
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
            this.y = 200;
            this.width = 20;
            this.height = 50;
            // x+width값과 y+height값을 canvas를 씌운 div 크기를 똑같이 맞춰야 잘 나옴
        }
        draw() {
            ctx.fillStyle = '';
            ctx.drawImage(img2,this.x,this.y,this.width,this.height);
        }
    }
    
    var cactus = new Cactus();
    cactus.draw();
    
    class obstackle {
        constructor () {
            this.x=480;
            this.y=0;
            this.width=10;
            this.height=70;
        }
        draw()
        {
          ctx.fillStyle = "red";
          ctx.fillRect(this.x,this.y,this.width,this.height);
        }  
      }

      var obs = new obstackle(); 
      obs.draw();
      
      class Big {
        constructor() {
            this.x = 470;
            this.y = 100;
            this.width = 30;
            this.height = 150;
        }
        draw() {
            ctx.fillStyle = '';
            ctx.drawImage(img3,this.x,this.y,this.width,this.height);
        }
    }

    var big = new Big();
    big.draw();
     
      function collision(dino,cactus){
        var xDifference = (cactus.x+10) - (dino.x+dino.width);
        var yDifference = cactus.y - (dino.y+dino.height);

        if(xDifference <0 && yDifference <0){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            cancelAnimationFrame(animation);
            alert("Game Over");
        
      }
    }

    function bigcollision(dino,big){
        var xDifference = (big.x+10) - (dino.x+dino.width);
        var yDifference = big.y - (dino.y+dino.height);

        if(xDifference <0 && yDifference <0){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            cancelAnimationFrame(animation);
            alert("Game Over");
        
      }
    }

        
    function obscollision(dino,obs){
        var xDifference = (obs.x) - (dino.x+dino.width);
        var yDifference = obs.y-dino.y+dino.height;

        if(xDifference <0  && yDifference >=0){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            cancelAnimationFrame(animation);
            alert("Game Over");
        
      }
    }
