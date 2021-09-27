var mapContainer = document.getElementById('map'),
    mapOption = {  
        center: new kakao.maps.LatLng(37.486521579656234, 126.80186975261614),
        level: 3
    };
var map = new kakao.maps.Map(mapContainer, mapOption);
    

var markerPosition  = new kakao.maps.LatLng(37.486521579656234, 126.80186975261614); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});


marker.setMap(map);




