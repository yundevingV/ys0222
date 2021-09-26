var mapContainer3 = document.getElementById('map3'),
    mapOption3 = { 
        center: new kakao.maps.LatLng(37.449299, 126.703753),
        level: 3
    };
var map3 = new kakao.maps.Map(mapContainer3, mapOption3);


var markerPosition3  = new kakao.maps.LatLng(37.449299, 126.703753); 


var marker3 = new kakao.maps.Marker({
    position: markerPosition3
});


marker3.setMap(map3);



var mapContainer4 = document.getElementById('map4'),
    mapOption4 = { 
        center: new kakao.maps.LatLng(37.55037139421805, 126.92009609173007),
        level: 3
    };
var map4 = new kakao.maps.Map(mapContainer4, mapOption4);


var markerPosition4  = new kakao.maps.LatLng(37.55037139421805, 126.92009609173007); 


var marker4 = new kakao.maps.Marker({
    position: markerPosition4
});


marker4.setMap(map4);
