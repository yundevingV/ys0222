let today = new Date();

$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=0ef07fd10559f7df12216b9fb0b2240e&units=metric'
,function(data){
let minTemp = data.list[0].main.temp_min;
let maxTemp = data.list[0].main.temp_max;
let probability = data.list[0].clouds.all;
let speed = data.list[0].wind.speed;
let deg = data.list[0].wind.deg;
let date = today.toLocaleDateString();
let hour = today.getHours();

$('.ctemp').append(`
${minTemp} °C ~ ${maxTemp} °C <br>
☂: ${probability}% <br>
🌀: ${speed} m/s <br>
🚏: ${deg}° <br> 
${date} ${hour}시`)
});
