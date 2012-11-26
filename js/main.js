/** 
  * @fileoverview 앱이 시작하면 맨 먼저 실행 되어야 할 기능을 작업한 소스 파일입니다.
  * @author 임학순
  * @version 0.1.1
  * @since 2012.10.22
  *
  * modify 2012.11.14 Nav클릭이벤트 변경 / PC버전 삭제
*/

/***index.html의 BODY가 로드 될때 호출되는 메소드*/
var loaded = function()
{
	/********************************************전역변수********************************************/
	/***강의실 검사에 활용될 변수입니다. 각 뷰에서 호출하므로 전역변수로 설정*/
	_searchData = { buildingName : "", floorNumber: ""};
	
	/***배열(각 객체는 type, classRoom_building, classRoom_floor) / LocalStorage에 저장된 정보를 가져옵니다.*/
	favoriteObject = JSON.parse(localStorage.getItem('favoriteObject'));
	
	if( favoriteObject == null){ 
		favoriteObject = [];
	}

	/***진도프레임워크 초기화*/
	//contentHeight = eval(window.innerHeight-75);
	
	//document.querySelector('#view').onresize=function(){ alert('아아아아아 운지'); };
	
	//window.onchange
	/*
	document.querySelector('#view').addEventListener('resize', function (event) {
		alert('아아아아아 운지');
	}, false);
	*/
	
	oScroll = new jindo.m.Scroll("view", {
		bUseHScroll : false,
		bUseVScroll : true,
		bUseMomentum : false,
		nHeight : eval(window.innerHeight-75)//Nav영역이 75px입니다.
	});
	
	// 뷰 매니저 초기화 : 뷰매니저는 전역변수입니다.(막코딩의 진수닷 ㅜㅜ)
	viewManager = ViewManager.getInstance();
	viewManager.initialize(window, document.getElementById("content") );
	
	
	/********************************************지역변수********************************************/	
	//1. TabPanel 이벤트핸들러
	var _selectorGroup = [];	
	var NAV_FAVORITE	= 0;
	var NAV_SEARCH	= 1;
	var NAV_MAP		= 2;
	var NAV_LINK		= 3;
	var NAV_ABOUT	= 4;
	
	_selectorGroup[NAV_FAVORITE]		= document.querySelector("#menu :nth-child(1)");
	_selectorGroup[NAV_SEARCH]		= document.querySelector("#menu :nth-child(2)");
	_selectorGroup[NAV_MAP]			= document.querySelector("#menu :nth-child(3)");
	_selectorGroup[NAV_LINK]			= document.querySelector("#menu :nth-child(4)");
	_selectorGroup[NAV_ABOUT]			= document.querySelector("#menu :nth-child(5)");

	//각 Nav메뉴에 이벤트핸들러를 추가합니다.
	_selectorGroup[NAV_FAVORITE].addEventListener('click', function (event) {
		for( var i = 0; i < _selectorGroup.length; i++){
			(i === NAV_FAVORITE) ? (_selectorGroup[i].className = 'cls-nav-slt') :  (_selectorGroup[i].className = 'cls-nav');
		}
		viewManager.viewChanged(VIEW_FAVORITE);
		event.stopPropagation();
	}, false);
	
	_selectorGroup[NAV_SEARCH].addEventListener('click', function (event) {
		for(var i = 0; i < _selectorGroup.length; i++){			
			(i === NAV_SEARCH) ? (_selectorGroup[i].className = 'cls-nav-slt') :  (_selectorGroup[i].className = 'cls-nav');
		}
		viewManager.viewChanged(VIEW_SEARCH);
		event.stopPropagation();
	}, false);
	
	_selectorGroup[NAV_MAP].addEventListener('click', function (event) {
		for(var i = 0; i < _selectorGroup.length; i++){
			(i === NAV_MAP) ? (_selectorGroup[i].className = 'cls-nav-slt') :  (_selectorGroup[i].className = 'cls-nav');
		}
		viewManager.viewChanged(VIEW_MAP);
		event.stopPropagation();
	}, false);
	
	_selectorGroup[NAV_LINK].addEventListener('click', function (event) {
		for(var i = 0; i < _selectorGroup.length; i++){
			(i === NAV_LINK) ? (_selectorGroup[i].className = 'cls-nav-slt') :  (_selectorGroup[i].className = 'cls-nav');
		}
		viewManager.viewChanged(VIEW_LINK);
		event.stopPropagation();
	}, false);
	
	_selectorGroup[NAV_ABOUT].addEventListener('click', function (event) {
		for(var i = 0; i < _selectorGroup.length; i++){
			(i === NAV_ABOUT) ? _selectorGroup[i].className = 'cls-nav-slt' :  _selectorGroup[i].className = 'cls-nav'
		}
		viewManager.viewChanged(VIEW_ABOUT);
		event.stopPropagation();
	}, false);
}
