
 //https://necronomicon-release.netlify.app/
 function music_refresh(obj) {
    document.querySelector("iframe").src = `https://www.youtube.com/embed/${obj.attributes[2].nodeValue}`
    console.clear()
}
function han(){
    window.open("https://ys0222.github.io/ys0222/hanriver.html");
   } 

   function ys(){
    window.open("https://ys0222.github.io/ys0222/profile.html");
   } 
       function km(){
        window.open("https://map.kakao.com/");
       } 
      
       function game(){
        window.open("https://ys0222.github.io/ys0222/game.html");
       } 

       function menu1(){
        var menu=["짜장면","마라탕","돈가스","김치찌개","회덮밥","초밥"
        ,"피자","헴버거","파스타","치킨","굶기ㅋㅋ!","서브웨이","샐러드","칼국수"
        ,"쌈밥","씨리얼","야채랑밥이랑비벼먹기","삼각김밥","라면","치킨","텐동"]
        var menuNum= Math.floor(Math.random()*menu.length);
 
        alert(menu[menuNum])
        km();
        
       }
 
        function coffee(){
        var menu1=["아메리카노","더치","카페라떼","카푸치노","카페모카"
        ,"캬라멜카페모카","카페비엔나","카페콘파냐","아포카토","바닐라라떼"
        ,"모라카떼","헤이즐넛라떼","연유라떼","초코쿠키프라페"]
        var menuNum1= Math.floor(Math.random()*menu1.length);
 
        alert(menu1[menuNum1]);
        }
 
        function luck(){
            var lucky = Math.floor(Math.random()*100);
 
            alert(lucky+  " //  주의!! 하루에 한 번만 하시오");
            
        }

        function todolist(){
            window.open("https://cat-jiyoung.github.io/clone-Momentum/");
        }
        
        function yt(){
            window.open("https://www.youtube.com/?hl=KO");
        }
        function lol(){
            var url = "https://www.op.gg/";          
            window.open(url); 
        }
        
        function google(){
            window.open("https://www.google.co.kr/");
        }
 
        function naver(){
            window.open("https://www.naver.com/");
        }
 
        function chelsea(){
            window.open("https://www.youtube.com/user/chelseafc");       
        }
        function sc(){
            window.open("http://yjtv365.com/");        
        }
        function folder(){
            window.open("C:/Users/user/Desktop/YS");      
        }
 
        function maple(){
            window.open("C:/Users/user/Desktop/GameLauncher.exe");        
        }
 
        function mg(){
            window.open("https://mgyo.tistory.com/");        
        }

        function y1(){
            window.open("https://www.youtube.com/playlist?list=PLudlrlRL10KZbF8I2Jt_uqAguSd_os5tT");        
        }

        function y2(){
            window.open("https://www.youtube.com/playlist?list=PLudlrlRL10KZy_L1lBEfmf-_WcPy5koBG");        
        }

        function y3(){
            window.open("https://www.youtube.com/playlist?list=PLudlrlRL10KbcI6b-zBw-Z5vFkC_CTlbQ");        
        }

        function y4(){
            window.open("https://youtube.com/playlist?list=PL96Bh_rDllFkqpGNdwYfsoCZJWo9eWEry");        
        }

        function mg(){
            window.open("https://mgyo.tistory.com/");        
        }

        function btc(){
            window.open("https://upbit.com/");        
        }

        function yg(){
            window.open("https://ddr4869.github.io/");        
        }


        
        function musicroom(){
            window.open("https://ys0222.github.io/ys0222/musicroom.html");        
        }

        $(function(){
         $("#h").hover
         (function()
            {
             $("#a").css({"background" : "rgb(8,81,144)" });   
            }, function() {
             $("#a").css({"background" : "none"});   
            }, 
        );
     });
 
