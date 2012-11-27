/** 
  * @fileoverview ���� �����ϸ� �� ���� ���� �Ǿ�� �� ����� �۾��� �ҽ� �����Դϴ�.
  * @author ���м�
  * @version 12.11.26
  * @since 2012.10.22
  *
  * modify 2012.11.14 NavŬ���̺�Ʈ ���� / PC���� ����
*/

/***index.html�� BODY�� �ε� �ɶ� ȣ��Ǵ� �޼ҵ�*/
var loaded = function()
{
	/********************************************��������********************************************/
	/***���ǽ� �˻翡 Ȱ��� �����Դϴ�. �� �信�� ȣ���ϹǷ� ���������� ����*/
	_searchData = { buildingName : "", floorNumber: ""};
	
	/***�迭(�� ��ü�� type, classRoom_building, classRoom_floor) / LocalStorage�� ����� ������ �����ɴϴ�.*/
	favoriteObject = JSON.parse(localStorage.getItem('favoriteObject'));
	
	if( favoriteObject == null){ 
		favoriteObject = [];
	}

	/***����� vs ����ũž*/
	diviceFlag = 0;//0�ϰ�� ����ũž, 1�ϰ�� �����
	var mobileKeyWords = new Array('iPhone', 'iPod', 'iPad', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			diviceFlag = 1;//������Դϴ�.
			
			/***���������ӿ�ũ �ʱ�ȭ*/
			oScroll = new jindo.m.Scroll("view", {
				bUseHScroll : false,
				bUseVScroll : true,
				bUseMomentum : true,
				nDeceleration : 0.0005,
				nHeight : eval(window.innerHeight-75)//Nav������ 75px�Դϴ�.
			});
			break;
		}
	}
	
	if ( diviceFlag == 0 ){//����ũž
		var viewDiv = document.querySelector("#view");
		viewDiv.style.overflow = "auto";
		viewDiv.style.height = "645px";// 720-75 = 645 
	}
	
	
	// �� �Ŵ��� �ʱ�ȭ : ��Ŵ����� ���������Դϴ�.(���ڵ��� ������ �̤�)
	viewManager = ViewManager.getInstance();
	viewManager.initialize(window, document.getElementById("content") );
	
	
	/********************************************��������********************************************/	
	//1. TabPanel �̺�Ʈ�ڵ鷯
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

	//�� Nav�޴��� �̺�Ʈ�ڵ鷯�� �߰��մϴ�.
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

var resized = function(){
	if ( diviceFlag == 1 ){//�����
		oScroll._htOption.nHeight = eval(window.innerHeight-75)//Nav������ 75px�Դϴ�.
		oScroll.refresh();
	}
}