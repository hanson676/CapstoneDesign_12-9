/** 
 * @fileoverview 구글맵을 그려줍니다.
 * @author 임학순
 * @version 0.0.1
 * @since 2012.10.17
 *
 * modified by : 학순 (2012.10.17) googleMapInitialize() 함수 추가 
 * modified by : 학순 (2012.10.19) checkGeolocation() 함수 추가 
 */

function googleMapInitialize() {
	var LOCATION_KMU = new google.maps.LatLng(37.610968,126.997275); //국민대학교 위치입니다.
	var LOCATION_1		= new google.maps.LatLng(37.610058,126.997109); //7호관
	var LOCATION_2		= new google.maps.LatLng(37.610866,126.997626); //경상관
	var LOCATION_3		= new google.maps.LatLng(37.611796,126.993911); //공학관
	var LOCATION_4		= new google.maps.LatLng(37.611762,126.999246); //과학관
	var LOCATION_5		= new google.maps.LatLng(37.611499,126.996465); //국제관
	var LOCATION_6		= new google.maps.LatLng(37.61131,126.998216); //법학관
	var LOCATION_7		= new google.maps.LatLng(37.610477,126.99592); //복지관
	var LOCATION_8		= new google.maps.LatLng(37.612255,126.996854); //북악관
	var LOCATION_9		= new google.maps.LatLng(37.61018,126.99786); //예술관
	var LOCATION_10		= new google.maps.LatLng(37.612098,126.997626); //조형관
	var LOCATION_11		= new google.maps.LatLng(37.611042,126.998621); //체육관
	var LOCATION_12		= new google.maps.LatLng(37.611467,126.998546); //형설관
	
		/*
			var BUILDING_LIST_1	= 1;//7호관
			var BUILDING_LIST_2	= 2;//경상관
			var BUILDING_LIST_3	= 3;//공학관
			var BUILDING_LIST_4	= 4;//과학관
			var BUILDING_LIST_5	= 5;//국제관
			var BUILDING_LIST_6	= 6;//법학관
			var BUILDING_LIST_7	= 7;//복지관
			var BUILDING_LIST_8	= 8;//북악관
			var BUILDING_LIST_9	= 9;//예술관
			var BUILDING_LIST_10	= 10;//조형관
			var BUILDING_LIST_11	= 11;//체육관
			var BUILDING_LIST_12	= 12;//형설관
	*/
	
	//1. 구글맵 생성 및 옵션설정
	var myOptions = {			
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: LOCATION_KMU,
		zoom: 17,		
		
		disableDefaultUI: false,//기본UI를 사용하도록 설정		
		mapTypeControl: false,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.DEFAULT,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false
	};
	var map = new google.maps.Map(document.getElementById("MapView"), myOptions);
	
	/*
	//사용자의 위치를 받아옵니다 : 골때립니다. 구글맵 구성이 끝난다음에 사용자 위치를 받아오기때문에 사용자위치를 변수에 저장하여 작업을 하는게 불가능합니다. 이모병	
	var initi전ocation;
	
	if(navigator.geolocation) {// Try W3C Geolocation (Preferred)
		navigator.geolocation.getCurrentPosition(function(position) {
			initi전ocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			map.setCenter(initi전ocation);
		}, function() {
			console.log("Geolocation service failed : 01");
			initi전ocation = new google.maps.LatLng(37.61101 , 126.997274); //국민대학교 위치입니다.
			map.setCenter(initi전ocation);
		});
	}
	else {// Browser doesn't support Geolocation
		console.log("Your browser doesn't support geolocation. We've placed you in Siberia.");
		initi전ocation = new google.maps.LatLng(37.61101 , 126.997274); //국민대학교 위치입니다.
		map.setCenter(initi전ocation);
	}
	*/

	//3. 각 건물별 마커 및 이벤트리스너 등록
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_1,
		title:"7호관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"7호관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_2,
		title:"경상관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"경상관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_3,
		title:"공학관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"공학관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_4,
		title:"과학관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"과학관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_5,
		title:"국제관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"국제관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_6,
		title:"법학관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"법학관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_7,
		title:"복지관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"복지관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_8,
		title:"북악관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"북악관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_9,
		title:"예술관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"예술관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_10,
		title:"조형관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"조형관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_11,
		title:"체육관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"체육관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
	
	var marker_building_1 = new google.maps.Marker( {
		map: map, 
		position:  LOCATION_12,
		title:"형설관"
	} );
	google.maps.event.addListener(marker_building_1, 'click', function() {
		_searchData.buildingName =	"형설관";
		_searchData.floorNumber = "전";
		viewManager.viewChanged(VIEW_RESULT);
	});	
}