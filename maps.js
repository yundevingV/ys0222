var mapContainer = document.getElementById('map'),
    mapOption = {  
        center: new kakao.maps.LatLng(37.45973245546476, 126.7071367800412),
        level: 3
    };
var map = new kakao.maps.Map(mapContainer, mapOption);
    

var markerPosition  = new kakao.maps.LatLng(37.45973245546476, 126.7071367800412); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});


marker.setMap(map);




