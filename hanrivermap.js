var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.51915,126.98310), 
        level: 8
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 


var markerPosition  = new kakao.maps.LatLng(37.54414,126.89273); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});


marker.setMap(map);
//gs한강 양화 3호점

var markerPosition  = new kakao.maps.LatLng(37.53978,126.89978); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//gs한강 양화 1호점

var markerPosition = new kakao.maps.LatLng(37.53764,126.90411); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//미니스톱 양화 1호점
    
var markerPosition = new kakao.maps.LatLng(37.53292,126.92397); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//씨스페이스 24 한강 여의도 4호점
    
 var markerPosition = new kakao.maps.LatLng(37.53299,126.92313); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//이마트24 여의도4호점
    
     var markerPosition = new kakao.maps.LatLng(37.52809,126.93167); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//씨유 한강 여의도 2호점
    
         var markerPosition = new kakao.maps.LatLng(37.52688,126.93310); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//씨유 한강 여의도 카페점
var markerPosition = new kakao.maps.LatLng(37.52635,126.93346); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//미니스톱 한강 여의나루점
    
    var markerPosition = new kakao.maps.LatLng(37.52629,126.93359); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
//씨유 한강 여의도점
