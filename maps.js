
	function kakaomap(){
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);
	};

	$(function(){
		kakaomap();
	})

	function kakaomap1(){
		var container1 = document.getElementById('map1');
		var options1 = {
			center: new kakao.maps.LatLng(55.450701, 126.570667),
			level: 3
		};

		var map1 = new kakao.maps.Map1(container1, options1);
	};

	$(function(){
		kakaomap1();
	})
