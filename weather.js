$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=0ef07fd10559f7df12216b9fb0b2240e&units=metric'
,function(data){
var $minTemp = data.list[0].main.temp_min;
var $maxTemp = data.list[0].main.temp_max;

var $humidity = data.list[0].main.humidity;

var $probability = data.list[0].clouds.all;
var $speed = data.list[0].wind.speed;
var $deg = data.list[0].wind.deg;



if($type == "Clouds")
$type = "구름";
else if($type == "Rain")
$type = "비";
else
$type = "맑음";

$('.clowtemp').append($minTemp + "°C");
$('.chightemp').append($maxTemp + "°C");

$('.chumidity').append($humidity + "%");

$('.cprobability').append($probability + "%");	
$('.cspeed').append($speed + "m/s");	
$('.cdeg').append($deg + "°");	
});
