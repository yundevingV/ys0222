let today = new Date();


$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=0ef07fd10559f7df12216b9fb0b2240e&units=metric'
,function(data){
var minTemp = data.list[0].main.temp_min;
var maxTemp = data.list[0].main.temp_max;
var probability = data.list[0].clouds.all;
var speed = data.list[0].wind.speed;
var deg = data.list[0].wind.deg;



$('.ctemp').append(minTemp + "°C" +  "&nbsp;~&nbsp;" +
 maxTemp +"°C" +
 "<br>"  + "☂:"  + probability + "%"
 + "<br>" + "🌀:" + speed + "m/s"
 + "<br>" + "🚏:" + deg + "°" + "<br>" + today.toLocaleDateString() + 
 "  " + today.getHours() +"시"); 
});
