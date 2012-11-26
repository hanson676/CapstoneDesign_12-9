/** 
  * @fileoverview About메뉴에 대한 View입니다.
  * @author 임학순
  * @version 0.0.1
  * @since 2012.09.26
  *
  * modify 2012.11.14 플립 이벤트 추가
 */

/**
 * AboutView 클래스 생성자
 * @extends View 
 * @class AboutView 클래스는 하드코딩된 페이지를 viewRoot에 그려줍니다.
 * @constructor 
 * @return AboutView 클래스의 인스턴스.
*/ 
function AboutView()
{
    /**
 	 * View 클래스의 onCreate 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 생성 된 후에 호출 됨.
	 * @param {Div Element} parentDivElement View의 Div Element가 추가될 부모 Div Element. 
	 */
	this.onCreate = function(parentDivElement) 
	{ 
		//1. HTML 생성
		var tag = ""
		+	'<ul id="noticeList">'
		+		'<li class="cls-noticeList">'
		+			'<div class="title"><b>2012년 2학기 시간표 등록 안내</b></div>'
		+			'<div class="content" style="display: none;"><p>안녕하세요. "빈강의실 찾기 앱"을 이용해 주셔서 감사합니다.<br><br>2012년도 2학기 국민대학교 강의시간표 DB를 적용하였습니다. 이번학기 많은 학우들께서 학교에서 빈 강의실을 찾을 때 유용하게 사용하셨으면 좋겠습니다.<br><br>- 국민대! 빈 강의실을 찾아라 개발팀 드림-</p></div>'		
		+		'</li>'
		+		'<li class="cls-noticeList">'
		+			'<div class="title"><b>오류 신고 및 질문에 관한 안내</b></div>'
		+			'<div class="content" style="display: none;"><p>안녕하세요. "빈강의실 찾기 앱"개발팀입니다.<br><br>본 어플리케이션을 사용하면서 오류가 발생하였거나 질의사항이 있으신 분은 대표 이메일 <a href="mailto:hanson676@hotmail.com">hanson676@hotmail.com</a> 으로 연락주시면 감사하겠습니다.<br><br>- 국민대! 빈 강의실을 찾아라 개발팀 드림-</p></div>'		
		+		'</li>'
		+		'<li class="cls-noticeList">'
		+			'<div class="title"><b>어플리케이션 개발정보</b></div>'
		+			'<div class="content" style="display: none;"><center><img src="./img/about.png" border="2"><p><br><b>국민대학교 빈 강의실을 찾아라!</b> - 버전 1.0 (121028)<br><br>국민대학교 전자정보통신대학 컴퓨터공학부<br>07 <a href="mailto:hanson676@hotmail.com">임학순</a>, 06 <a href="mailto:ki0873@hotmail.com">김영재</a> 개발<br><br>2012 캡스톤 프로젝트 졸업작품<br><br><img src="./img/logo.png"><br>본 어플리케이션은 HTML5 및 CSS3 표준 규약을 준수합니다.<br>JINDO는 NHN사의 Framework입니다.<br>국민대학교의 로고와 캐릭터의 저작권은 국민대학교 홍보팀이 보유합니다.<br><br>ⓒ Copyright Kookmin University, Department of Computer Science<br><br></center></div>'			
		+		'</li>'
		+	'</ul>';
		
		this.divElement 				= document.createElement('div');
		this.divElement.id 				= 'AboutView';
		this.divElement.style.display	= 'none';
		this.divElement.innerHTML		= tag;
		parentDivElement.appendChild(this.divElement);
	};	
    /**
	 * View 클래스의 onResume 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 활성화 될 떄 호출 됨.
	 */	
	this.onResume = function() 
	{
		this.divElement.style.display	= 'block';
		
		/*
		selectorObject[i].addEventListener('click', function( event ){				
				event = event || window.event;//IE doesn't pass in the event object				
				var target = event.target || event.srcElement;//IE uses srcElement as the targe(FF가 srcElement를 안쓰고 target을 쓰네?
				
				
				
				console.dir( target.tagName );//H2, TD, TR, LI
				switch( target.tagName ){
					case "H2" :
						var strTemp = target.innerText ? target.innerText : target.textContent;
						_searchData.floorNumber = strTemp.replace("층", "");
						break;
					default :						
						var strTemp = target.querySelector("H2").innerText ? target.querySelector("H2").innerText : target.querySelector("H2").textContent;
						break;
				}
				
				if( _searchData.buildingName != _searchData.floorNumber){//이벤트 등록에 문제가있어서 이렇게 막코딩했슴돠 ㅜㅜ
					viewManager.viewChanged(VIEW_RESULT);			
				}				
				event.stopPropagation();//CrossBrowser
			}, false);
		*/
		this.divElement.querySelector('#noticeList').addEventListener('click', function( event ){
			event = event || window.event;//IE doesn't pass in the event object
			var target = event.target || event.srcElement;//IE uses srcElement as the targe(FF가 srcElement를 안쓰고 target을 쓰네?
			
			if( target.tagName =='B' ){ 
				 (target.parentElement.parentElement.children[1].style.display == 'none' ) ? (target.parentElement.parentElement.children[1].style.display = 'block') : (target.parentElement.parentElement.children[1].style.display = 'none');
			}
			else if( target.className == 'title' ){
				 (target.parentElement.children[1].style.display == 'none' ) ? (target.parentElement.children[1].style.display = 'block') : (target.parentElement.children[1].style.display = 'none');
			}
			
			//스크롤 갱신
			oScroll.refresh();
		}, false);
	};
    
	
	/**
	 * View 클래스의 onPause 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 비활성화 될 떄 호출 됨.
	 */
	this.onPause = function() 
	{	
		this.divElement.style.display	= 'none';
	};
};

/* AboutView extends View */
AboutView.prototype = new View();
