var mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(37.51915,126.98310), 
        level: 5
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
