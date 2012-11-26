/** 
 * @fileoverview search메뉴에 대한 View입니다.
 * @author 임학순
 * @version 0.0.2
 * @since 2012.10.17
 */

/**
 * MapView 클래스 생성자
 * @extends View 
 * @class MapView 클래스는 하드코딩된 페이지를 viewRoot에 그려줍니다.
 * @constructor 
 * @return MapView 클래스의 인스턴스.
*/ 
function MapView()
{
	var LISTROOT = 0;
	
    /**
 	 * View 클래스의 onCreate 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 생성 된 후에 호출 됨.
	 * @param {Div Element} parentDivElement View의 Div Element가 추가될 부모 Div Element. 
	 */
	this.onCreate = function(parentDivElement) 
	{ 
		//1. HTML 생성		
		var listTag = "";		
		this.divElement 					= document.createElement('div');
		this.divElement.id 				= 'MapView';
		this.divElement.style.display	= 'none';
		this.divElement.style.width		= '100%';
		this.divElement.style.height	= '100%';
		
		//parentDivElement.appendChild(this.divElement);
		//스크롤링X. 예외처리입니다.
		document.querySelector("body").appendChild(this.divElement);	
		googleMapInitialize();
	};
	
    /**
	 * View 클래스의 onResume 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 활성화 될 떄 호출 됨.
	 */	
	this.onResume = function() 
	{
		/*
		//비동기식으로 MAP을 호출합니다.
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.google.com/maps/api/js?sensor=true&language=ko&callback=googleMapInitialize";
		document.body.appendChild(script);			
		*/
		
		document.querySelector("#view").style.display	= 'none';
		this.divElement.style.display	= 'block';		
	};
    
	
	/**
	 * View 클래스의 onPause 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 비활성화 될 떄 호출 됨.
	 */
	this.onPause = function() 
	{	
		document.querySelector("#view").style.display	= 'block';
		this.divElement.style.display	= 'none';
	};
};
/* SearchView extends View */
MapView.prototype = new View();

/*
	Building_1 : 7호관  : 37.609965, 126.997081
	경상관 :
	공학관 : 37.611784, 126.993905
	과학관 : 
	국제관 : 		
	법학관 : 
	복지관 : 
	북악관 : 
	예술관 : 
	조형관 : 
	체육관 : 
	형설관 : 
*/