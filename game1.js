
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
    
    var dino = {
        x : 10,
        y : 200,
        width : 50,
        height : 50,
        draw(){
            ctx.fillStyle = 'green';
            ctx.fillRect = (10,200,50,50);
        }
    }
    dino.draw()
    // 캐릭터
    
    class Cactus {
        constructor() {
            this.x = 500;
            this.y = 200;
            this.width = 50;
            this.height = 50;
        }
        draw() {
            ctx.fillStyle = 'green';
            ctx.fillRect = (this.x,this.y,this.width,this.height);
        }
    }
    
    var cactus = new Cactus();
    cactus.draw();
    
