var mapContainer3 = document.getElementById('map3'),
    mapOption3 = { 
        center: new kakao.maps.LatLng(37.449299, 126.703753),
        level: 3
    };
var map3 = new kakao.maps.Map(mapContainer3, mapOption3);

// 마커가 표시될 위치입니다 
var markerPosition3  = new kakao.maps.LatLng(37.449299, 126.703753); 

// 마커를 생성합니다
var marker3 = new kakao.maps.Marker({
    position: markerPosition3
});

// 마커가 지도 위에 표시되도록 설정합니다
marker3.setMap(map3);
