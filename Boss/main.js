let w1_result = 0;
let w1_mile = 0;
let w1_stone = 0;

let w2_result = 0;
let w2_mile = 0;
let w2_stone = 0;

let d1_result = 0;
let d1_mile = 0;
let d1_stone = 0;

let d2_result = 0;
let d2_mile = 0;
let d2_stone = 0;

window.onload = function() {
    document.getElementById('send').onclick = function(){
    
    let w1_length = document.getElementsByName("w").length;
    let w1 = document.getElementsByName('w')
    for(let i =0 ; i < w1_length ; i++){
        if(w1[i].checked){
            w1_result = parseInt(w1[i].value) + parseInt(w1_result)
            w1_mile += parseInt(200);
            w1_stone += parseInt(1);
        }
    }

    let sygnus_length = document.getElementsByName("sygnus").length;
    let w_sygnus = document.getElementsByName("sygnus")

    for(let i =0 ; i < sygnus_length ; i++){
        if(w_sygnus[i].checked){
            w1_result = parseInt(w_sygnus[i].value) + parseInt(w1_result)
            w1_mile += parseInt(200);
            w1_stone += parseInt(1);
        }
    }
    document.getElementById('wm1').innerHTML = `총 획득하는 메소는 <b>${ w1_result }</b>입니다.<br> 
    총 획득하는 마일리지는 <b>${ w1_mile }</b>입니다.<br>
    총 판매하시는 결정석의 갯수는 <b>${w1_stone}</b>입니다.
    `

}

document.getElementById('send2').onclick = function(){
    
    let w2_length = document.getElementsByName("w2").length;
    let w2 = document.getElementsByName('w2')
    for(let i =0 ; i < w2_length ; i++){
        if(w2[i].checked){
        w2_result = parseInt(w2[i].value) + parseInt(w2_result)
        w2_mile += parseInt(200);
        w2_stone += parseInt(1);
        }
    }

    let sygnus2_length = document.getElementsByName("sygnus2").length;
    let w_sygnus2 = document.getElementsByName("sygnus2")

    for(let i =0 ; i < sygnus2_length ; i++){
        if(w_sygnus2[i].checked){
            w2_result = parseInt(w_sygnus2[i].value) + parseInt(w2_result)
            w2_mile += parseInt(200);
            w2_stone += parseInt(1);
        }
    }
    document.getElementById('wm2').innerHTML = `총 획득하는 메소는 <b>${ w2_result }</b>입니다.<br> 
    총 획득하는 마일리지는 <b>${ w2_mile }</b>입니다.<br>
    총 판매하시는 결정석의 갯수는 <b>${w2_stone}</b>입니다.`
}




    document.getElementById('send1').onclick = function(){
    
    let d_length = document.getElementsByName("d").length;
    let d = document.getElementsByName("d")
    for(let i=0; i<d_length;i++){
        if(d[i].checked){
            d1_result = parseInt(d[i].value) + parseInt(d1_result)
            d1_mile += parseInt(30);
            d1_stone += parseInt(1);
        }
    }

    let d_hontail_length = document.getElementsByName("hontail").length
    let d_hontail = document.getElementsByName("hontail")

    for(let i=0; i<d_hontail_length;i++){
        if(d_hontail[i].checked){
            d1_result = parseInt(d_hontail[i].value) + parseInt(d1_result)
            d1_mile += parseInt(30);
            d1_stone += parseInt(1);
        }
    }   

    let d_Gacoom_length = document.getElementsByName("Gacoom").length
    let d_Gacoom = document.getElementsByName("Gacoom")
    for(let i=0; i<d_Gacoom_length;i++){
        if(d_Gacoom[i].checked){
            d1_result = parseInt(d_Gacoom[i].value) + parseInt(d1_result)
            d1_mile += parseInt(30);
            d1_stone += parseInt(1);
        }
    }
    let d_magnus_length = document.getElementsByName("magnus").length
    let d_magnus = document.getElementsByName("magnus")
    for(let i=0; i<d_magnus_length;i++){
        if(d_magnus[i].checked){
            d1_result = parseInt(d_magnus[i].value) + parseInt(d1_result)
            d1_mile += parseInt(30);
            d1_stone += parseInt(1);
        }
    }
    let d_pp_length = document.getElementsByName("pp").length
    let d_pp = document.getElementsByName("pp")
    for(let i=0; i<d_pp_length;i++){
        if(d_pp[i].checked){
            d1_result = parseInt(d_pp[i].value) + parseInt(d1_result)
            d1_mile += parseInt(30);
            d1_stone += parseInt(1);
        }
    }
    let d_ban_length = document.getElementsByName("ban").length
    let d_ban = document.getElementsByName("ban")
    for(let i=0; i<d_ban_length;i++){
        if(d_ban[i].checked){
            d1_result = parseInt(d_ban[i].value) + parseInt(d1_result)
            d1_mile += parseInt(30);
            d1_stone += parseInt(1);
        }
    }
    document.getElementById('dm2').innerHTML = `총 획득하는 메소는 <b>${ d1_result }</b>입니다.<br> 
    총 획득하는 마일리지는 <b>${ d1_mile }</b>입니다.<br>
    총 판매하시는 결정석의 갯수는 <b>${d1_stone}</b>입니다.`
    }


    document.getElementById('send3').onclick = function(){
    
    let d2_length = document.getElementsByName("d2").length;
    let d2 = document.getElementsByName("d2")
    for(let i=0; i<d2_length;i++){
        if(d2[i].checked){
            d2_result = parseInt(d2[i].value) + parseInt(d2_result)
            d2_mile += parseInt(30);
            d2_stone += parseInt(1);
        }
    }

    let d_hontail2_length = document.getElementsByName("hontail2").length
    let d_hontail2 = document.getElementsByName("hontail2")

    for(let i=0; i<d_hontail2_length;i++){
        if(d_hontail2[i].checked){
            d2_result = parseInt(d_hontail2[i].value) + parseInt(d2_result)
            d2_mile += parseInt(30);
            d2_stone += parseInt(1);
        }
    }   

    let d_Gacoom2_length = document.getElementsByName("Gacoom2").length
    let d_Gacoom2 = document.getElementsByName("Gacoom2")
    for(let i=0; i<d_Gacoom2_length;i++){
        if(d_Gacoom2[i].checked){
            d2_result = parseInt(d_Gacoom2[i].value) + parseInt(d2_result)
            d2_mile += parseInt(30);
            d2_stone += parseInt(1);
        }
    }
    let d_magnus2_length = document.getElementsByName("magnus2").length
    let d_magnus2 = document.getElementsByName("magnus2")
    for(let i=0; i<d_magnus2_length;i++){
        if(d_magnus2[i].checked){
            d2_result = parseInt(d_magnus2[i].value) + parseInt(d2_result)
            d2_mile += parseInt(30);
            d2_stone += parseInt(1);
        }
    }
    let d_pp2_length = document.getElementsByName("pp2").length
    let d_pp2 = document.getElementsByName("pp2")
    for(let i=0; i<d_pp2_length;i++){
        if(d_pp2[i].checked){
            d2_result = parseInt(d_pp2[i].value) + parseInt(d2_result)
            d2_mile += parseInt(30);
            d2_stone += parseInt(1);
        }
    }
    let d_ban2_length = document.getElementsByName("ban2").length
    let d_ban2 = document.getElementsByName("ban2")
    for(let i=0; i<d_ban2_length;i++){
        if(d_ban2[i].checked){
            d2_result = parseInt(d_ban2[i].value) + parseInt(d2_result)
            d2_mile += parseInt(30);
            d2_stone += parseInt(1);
        }
    }
    document.getElementById('dm2').innerHTML = `총 획득하는 메소는 <b>${ d2_result }</b>입니다.<br> 
    총 획득하는 마일리지는 <b>${ d2_mile }</b>입니다.<br>
    총 판매하시는 결정석의 갯수는 <b>${d2_stone}</b>입니다.`
    }



}