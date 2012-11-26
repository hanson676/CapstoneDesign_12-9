/** 
 * @fileoverview Link에 대한 View입니다.
 * @author 임학순
 * @version 0.0.1
 * @since 2012.10.27
 */

/**
 * LinkView 클래스 생성자
 * @extends View 
 * @class LinkView 클래스는 하드코딩된 페이지를 viewRoot에 그려줍니다.
 * @constructor 
 * @return LinkView 클래스의 인스턴스.
*/ 
function LinkView()
{
    /**
 	 * View 클래스의 onCreate 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 생성 된 후에 호출 됨.
	 * @param {Div Element} parentDivElement View의 Div Element가 추가될 부모 Div Element. 
	 */
	this.onCreate = function(parentDivElement) 
	{ 
		//1. HTML 생성
		var tag = ''
		+	'<ul id="linkList">'
		+		'<li class="cls-linkTop"><p>유용한 링크 (국민대 모바일 페이지)</p></li>'
		+		'<li class="cls-linkList"><a href="http://m.kookmin.ac.kr/info/cafeteria.php" target="_blank"><h2>식당 메뉴</h2></a></li>'
		+		'<li class="cls-linkList"><a href="http://m.kookmin.ac.kr/info/library.php" target="_blank"><h2>열람실 현황</h2></a></li>'
		+		'<li class="cls-linkList"><a href="http://cyber2010.kookmin.ac.kr/" target="_blank"><h2>가상대학</h2></a></li>'
		+		'<li class="cls-linkList"><a href="http://m.kookmin.ac.kr/notice/" target="_blank"><h2>대학 공지사항</h2></a></li>'
		+		'<li class="cls-linkList"><a href="http://m.kookmin.ac.kr" target="_blank"><h2>대학 모바일 페이지 연결</h2></a></li>'
		+		'<li class="cls-linkTop"><p>국민대학교 관련 커뮤니티</p></li>'
		+		'<li class="cls-linkList"><a href="http://www.kmuin.com" target="_blank"><h2>국민인 닷컴</h2></a></li>'
		+		'<li class="cls-linkList"><a href="http://cafe.daum.net/kookmin" target="_blank"><h2>다음카페 국민학생들</h2></a></li>'
		+		'<li class="cls-linkList"><a href="http://gall.dcinside.com/list.php?id=kookmin" target="_blank"><h2>디시인사이드 국민대 갤러리</h2></a></li>'
		+	'</ul>';
		
		this.divElement 					= document.createElement('div');
		this.divElement.id 				= 'LinkView';
		this.divElement.style.display	= 'none';
		this.divElement.innerHTML	= tag;
		parentDivElement.appendChild(this.divElement);		
	};
    /**
	 * View 클래스의 onResume 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 활성화 될 떄 호출 됨.
	 */	
	this.onResume = function() 
	{
		this.divElement.style.display	= 'block';
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
/* LinkView extends View */
LinkView.prototype = new View();
