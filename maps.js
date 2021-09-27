var mapContainer = document.getElementById('map'),
    mapOption = {  
        center: new kakao.maps.LatLng(51.48185342361287, -0.19090285582012037),
        level: 3
    };
var map = new kakao.maps.Map(mapContainer, mapOption);
    

var markerPosition  = new kakao.maps.LatLng(51.48185342361287, -0.19090285582012037); 


var marker = new kakao.maps.Marker({
    position: markerPosition
});


marker.setMap(map);




