document.getElementById('result').innerHTML="수령할금액";

function no(){
    let display = document.getElementById('display');
    let money = eval(display.value*0.6);
    document.getElementById('result').innerHTML=money;
  
  }
  
  function onlytop(){
    let display = document.getElementById('display');
    let money1 = eval(display.value*0.6 );
    let fee = eval(display.value*0.4*0.2);
    let onlytopmoney = eval (money1 + fee)
    document.getElementById('result').innerHTML=money1 + fee;
    
  }
  function onlypc(){
    let display = document.getElementById('display');
    let money2 = eval(display.value*0.6 );
    let fee2 = eval(display.value*0.4*0.3);
    let onlypcmoney = eval (money2+ fee2)
    document.getElementById('result').innerHTML=money2+fee2;
  }
  
  function pctop(){
    let display = document.getElementById('display');
    let money3 = eval(display.value*0.6 );
    let fee3 = eval(display.value*0.4*0.5);
    let pctop = eval (money3+ fee3)
    document.getElementById('result').innerHTML=money3+fee3;
  }
  
  function no10(){
    let display = document.getElementById('display');
    let money10 = eval(display.value*0.6);
    let fee10 = eval(display.value * 0.4 * 0.1);
    document.getElementById('result').innerHTML=money10+fee10;
  }
  
  function no20(){
    let display = document.getElementById('display');
    let money20 = eval(display.value*0.6);
    let fee20 = eval(display.value * 0.4 * 0.2);
    document.getElementById('result').innerHTML=money20+fee20;
  }
  
  function no30(){
    let display = document.getElementById('display');
    let money30 = eval(display.value*0.6);
    let fee30 = eval(display.value * 0.4 * 0.3);
    document.getElementById('result').innerHTML=money30+fee30;
  }
  
  function onlytop10(){
    let display = document.getElementById('display');
    let onlytopmoney10 = eval(display.value*0.6 );
    let onlytopfee10 = eval(display.value*0.4*0.2);
    let onlytopcoupon10 = eval(display.value*0.4*0.1);
    var a = onlytopmoney10 + onlytopfee10 + onlytopcoupon10;
    document.getElementById('result').innerHTML=a;
  }
  
  function onlytop20(){
    let display = document.getElementById('display');
    let onlytopmoney20 = eval(display.value*0.6 );
    let onlytopfee20 = eval(display.value*0.4*0.2);
    let onlytopcoupon20 = eval(display.value*0.4*0.2);
    var a = onlytopmoney20 + onlytopfee20 + onlytopcoupon20;
    document.getElementById('result').innerHTML=a;
  }
  
  function onlytop30(){
    let display = document.getElementById('display');
    let onlytopmoney30 = eval(display.value*0.6 );
    let onlytopfee30 = eval(display.value*0.4*0.2);
    let onlytopcoupon30 = eval(display.value*0.4*0.3);
    var a =onlytopmoney30 + onlytopfee30 + onlytopcoupon30;
    document.getElementById('result').innerHTML=a;
  }
  
  function onlypc10(){
    let display = document.getElementById('display');
    let onlypcmoney10 = eval(display.value*0.6 );
    let onlypcfee10 = eval(display.value*0.4*0.3);
    let onlypccoupon10 = eval (display.value*0.4*0.1)
    var a = onlypcmoney10+onlypcfee10+onlypccoupon10;
    document.getElementById('result').innerHTML=a;

  }
  function onlypc20(){
    let display = document.getElementById('display');
    let onlypcmoney20 = eval(display.value*0.6 );
    let onlypcfee20 = eval(display.value*0.4*0.3);
    let onlypccoupon20 = eval (display.value*0.4*0.2)
    var a = onlypcmoney20+onlypcfee20+onlypccoupon20;
    document.getElementById('result').innerHTML=a;

  }
  function onlypc30(){
    let display = document.getElementById('display');
    let onlypcmoney30 = eval(display.value*0.6 );
    let onlypcfee30 = eval(display.value*0.4*0.3);
    let onlypccoupon30 = eval (display.value*0.4*0.3)
    var a = onlypcmoney30+onlypcfee30+onlypccoupon30;
    document.getElementById('result').innerHTML=a;
  }
  
  function pctop10(){
    let display = document.getElementById('display');
    let pctopmoney10 = eval(display.value*0.6 );
    let pctopfee10 = eval(display.value*0.4*0.5);
    let pctopcoupon10 = eval (display.value*0.4*0.1)
    var a =pctopmoney10+pctopfee10+pctopcoupon10;
    document.getElementById('result').innerHTML=a;
  }
  
  function pctop20(){
    let display = document.getElementById('display');
    let pctopmoney20 = eval(display.value*0.6 );
    let pctopfee20 = eval(display.value*0.4*0.5);
    let pctopcoupon20 = eval (display.value*0.4*0.2)
    var a = pctopmoney20+pctopfee20+pctopcoupon20;
    document.getElementById('result').innerHTML=a;
  }
  function pctop30(){
    let display = document.getElementById('display');
    let pctopmoney30 = eval(display.value*0.6 );
    let pctopfee30 = eval(display.value*0.4*0.5);
    let pctopcoupon30 = eval (display.value*0.4*0.3)
    var a = pctopmoney30+pctopfee30+pctopcoupon30;
    document.getElementById('result').innerHTML=a;
  }
