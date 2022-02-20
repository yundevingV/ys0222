let today = new Date();

$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=0ef07fd10559f7df12216b9fb0b2240e&units=metric'
,function(data){
let minTemp = data.list[0].main.temp_min; //최저온도
let maxTemp = data.list[0].main.temp_max; //최고온도
let probability = data.list[0].clouds.all; //강우확률
let speed = data.list[0].wind.speed; //바람속도
let deg = data.list[0].wind.deg; //바람방향
let date = today.toLocaleDateString(); //현재날짜 알려주는 내장객체
let hour = today.getHours(); //현재시간 알려주는 내장객체

let avg = (minTemp + maxTemp) / 2

$('.main').append(`
${minTemp} °C ~ ${maxTemp} °C <br>
☂: ${probability}% <br>
🌀: ${speed} m/s <br>
🚏: ${deg}° <br> 
${date} ${hour}시`) //각종온도 class main

if(avg < 0)
{
  $('.wear').append(`추우니 따뜻하게 입고가세용~!`)
}
else if (avg > 0 && avg <10)
{
  $('.wear').append(`약간 쌀쌀해요 겉옷 필수!`) 
}
else if (avg >=10 && avg< 22)
{
  $('.wear').append(`이 정도면 겉옷은 필요없을거같아요. <br>
  대신 일교차에 주의해주세요`) 
}
else if (avg >= 22)
{
  $('.wear').append(`햇살 쨍쨍 너무 더워요 ㅠㅠ`)  
} //온도에따른 옷차림 알려주기 class wear


if (probability > 70)
{
  $('.rain').append(`비 조심해요 우산 꼭 챙기세요`)  
} //강우확률에 따른 우산 class rain


});
