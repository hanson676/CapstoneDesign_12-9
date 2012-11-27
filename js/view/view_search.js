/** 
 * @fileoverview search메뉴에 대한 View입니다.
 * @author 임학순
 * @version 0.1.0
 * @since 2012.10.17
 *
 * modify 2012.10.25 건물목록 Tag구조 변경 및 클래스명 추가
 * modify 2012.10.28 즐겨찾기 추가를 위한 Tag구조 변경 및 이벤트핸들러 추가
 */

 
/**
 * SearchView 클래스 생성자
 * @extends View 
 * @class SearchView 클래스는 하드코딩된 페이지를 viewRoot에 그려줍니다.
 * @constructor 
 * @return SearchView 클래스의 인스턴스.
*/ 
function SearchView()
{
	/***접근자에 대한 정보를 저장합니다*/
	var selectorObject = [];
	
	/**접근자에 대한 인덱스입니다*/
	var BUILDING_LIST		= 0;
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
	
	/***접근자에 대한 정보를 저장합니다*/
	var selectorObject_Flg = [];
	var FAVORITE_FLG		= 13;//전체
	
	
	
    /**
 	 * View 클래스의 onCreate 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 생성 된 후에 호출 됨.
	 * @param {Div Element} parentDivElement View의 Div Element가 추가될 부모 Div Element. 
	 */
	this.onCreate = function(parentDivElement) 
	{ 
		//1. HTML 생성
		var tag = ""
		+'<ul id="buildingList">'
		+	'<li title="buildingList_1" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_7.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>7호관</h2><p>전자정보통신대학<br/>삼림과학대학<br/>체육대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'		
		+	'<li title="buildingList_2" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_business.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>경상관</h2><p>경상대학<br/>경영대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'		
		+	'<li title="buildingList_3" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_engineering.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>공학관</h2><p>공과대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_4" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_science.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>과학관</h2><p>자연과학대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_5" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_international.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"> <h2>국제관</h2><p>경영대학<br/>경상대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_6" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_law.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"> <h2>법학관</h2><p>법학대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_7" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_student_union.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"> <h2>복지관</h2><p>건축대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_8" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_bugak.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>북악관</h2><p>문과대학<br/>사회과학대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_9" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_art.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>예술관</h2><p>예술대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_10" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_design.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>조형관</h2><p>조형대학</p></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_11" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_gymnasium.jpg" width="80px" height="80px"/></div></td>'
		+				'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>체육관</h2></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'
		+	'<li title="buildingList_12" class="cls-buildingList">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="10%" align="right" valign="middle"><div class="cls-buildingList-img" ><img src="./img/building_hyungseol.jpg" width="80px" height="80px"/></div></td>'
		+					'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;"><h2>형설관</h2></td>'
		+				'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+			'</tr>'
		+		'</table>'		   
		+	'</li>'	
		+'</ul>'
		
		+'<ul id="buildingList_1">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">7호관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>6층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'
		+'<ul id="buildingList_2">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">경상관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_3">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">공학관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>별관2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>별관3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>별관4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>별관지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>별관지하2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_4">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">과학관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>6층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_5">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">국제관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>A동1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>A동2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>B동1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>B동2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_6">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">법학관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_7">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">복지관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>6층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'
		+'<ul id="buildingList_8">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">북악관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>6층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>7층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>8층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>9층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>10층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>11층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_9">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">예술관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하중2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'
		+'<ul id="buildingList_10">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">조형관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>별관1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하1층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>지하2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_11">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">체육관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>2층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'		
		+'<ul id="buildingList_12">'
		+	'<li class="cls-resultTop">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="42" align="left"><strong><font size="6">형설관</font></strong></td>'
		+			'</tr>'
		+			'<tr>'
		+				'<td height="29" align="left" valign="top"><font size="4">건물 층계를 선택하십시오.</font></td>'
		+			'</tr>'
		+		'</table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>3층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>4층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>5층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+	'<li class="cls-resultList-floor">'
		+		'<table width="100%" height="60px"  border="0" cellpadding="5" cellspacing="0"><tr>'
		+			'<td width="854" align="left" valign="middle" style="padding: 15px;" style="padding-left:10px"><h2>6층</h2>'
		+			'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><div class="cls-div"></div></span></span></td>'
		+		'</tr></table>'
		+	'</li>'
		+'</ul>'
	
		this.divElement 					= document.createElement('div');
		this.divElement.id 				= 'SearchView';
		this.divElement.style.display	= 'none';
		this.divElement.innerHTML	= tag;
		parentDivElement.appendChild(this.divElement);
		
		selectorObject[BUILDING_LIST] = this.divElement.querySelector("#buildingList");
		selectorObject[BUILDING_LIST_1] = this.divElement.querySelector("#buildingList_1");
		selectorObject[BUILDING_LIST_2] = this.divElement.querySelector("#buildingList_2");
		selectorObject[BUILDING_LIST_3] = this.divElement.querySelector("#buildingList_3");
		selectorObject[BUILDING_LIST_4] = this.divElement.querySelector("#buildingList_4");
		selectorObject[BUILDING_LIST_5] = this.divElement.querySelector("#buildingList_5");
		selectorObject[BUILDING_LIST_6] = this.divElement.querySelector("#buildingList_6");
		selectorObject[BUILDING_LIST_7] = this.divElement.querySelector("#buildingList_7");
		selectorObject[BUILDING_LIST_8] = this.divElement.querySelector("#buildingList_8");
		selectorObject[BUILDING_LIST_9] = this.divElement.querySelector("#buildingList_9");
		selectorObject[BUILDING_LIST_10] = this.divElement.querySelector("#buildingList_10");
		selectorObject[BUILDING_LIST_11] = this.divElement.querySelector("#buildingList_11");
		selectorObject[BUILDING_LIST_12] = this.divElement.querySelector("#buildingList_12");	
		
		
		this.divElement.style.display	= 'block';	
		
		//이벤트리스너 등록
		selectorObject_Flg[FAVORITE_FLG]			= this.divElement.querySelectorAll(".cls-buildingList-fov");//총 87개
		var favoriteFlagElement_Building = this.divElement.querySelector("#buildingList").getElementsByClassName("cls-buildingList-fov");
		var childElement = selectorObject[BUILDING_LIST].getElementsByTagName( "li" ); //BUILDING_LIST에서 "li"를 저장(배열로 오겠지?)
		
		
		//1. 즐겨찾기 Flag 이벤트 핸들러 추가		
		for( var i = 0; i < selectorObject_Flg[FAVORITE_FLG].length; i++){
			//이벤트핸들러 추가
			//console.log( selectorObject_Flg[FAVORITE_FLG] );
						
			selectorObject_Flg[FAVORITE_FLG][i].parentElement.addEventListener('click', function( event ){//TD태그에 이벤트를 추가합니다.
				event = event || window.event;//IE doesn't pass in the event object
				var target = event.target || event.srcElement;//IE uses srcElement as the targe(FF가 srcElement를 안쓰고 target을 쓰네?
				if( target.tagName == "TD"){
					target = target.children[0].children[0];
				}
				else if( target.tagName == "SPAN"){
					target = target.children[0];
				}
				
				var parentList = target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;// selectorObject_Flg[FAVORITE_FLG][i].parentElement 에서 6번 올라가면 LI 가 나옵니다.
				
				
				if( target.className == "cls-div"){//즐겨찾기 추가하기.		
					target.className = "cls-div-slt"
					var strTemp ;
					parentList.querySelector("h2").innerText ? strTemp = parentList.querySelector("h2").innerText : strTemp = parentList.querySelector("h2").textContent;
					console.log( strTemp );
					
					if( parentList.className == "cls-buildingList"){

					var jsonStr = '{ type: "0", classRoom_building: "' + strTemp + '" }';
						var obj = eval('(' + jsonStr  + ')');						
						favoriteObject.push( obj );
		
						localStorage.setItem( 'favoriteObject', JSON.stringify( favoriteObject ) );
					}
					else if( parentList.className == "cls-resultList-floor"){
						var jsonStr = '{ type: "1", classRoom_building: "' + _searchData.buildingName + '" , classRoom_floor : "' + strTemp + '" }';//건물 선택해서 들어올테니깐 이렇게 해도 될것같다.
						var obj = eval('(' + jsonStr  + ')');								
						favoriteObject.push( eval('(' + jsonStr  + ')') );

						localStorage.setItem( 'favoriteObject', JSON.stringify( favoriteObject ) );
					}
					else{
						console.log("즐겨찾기 동작 에러");
					}
				}
				else if( target.className == "cls-div-slt"){//즐겨찾기 삭제
					target.className = "cls-div"
					
					if( parentList.className == "cls-buildingList"){//건물목록
						var targetBuildingName = ( parentList.querySelector("h2").innerText ? parentList.querySelector("h2").innerText : parentList.querySelector("h2").textContent);					
						
						for(var i=0; i < favoriteObject.length; i++){
							//console.log( favoriteObject[i].classRoom_building );
							//console.log( targetBuildingName );
							if( favoriteObject[i].type == "0" && favoriteObject[i].classRoom_building == targetBuildingName){
								favoriteObject.splice( i, 1 );
								localStorage.setItem( 'favoriteObject', JSON.stringify( favoriteObject ) );
							}
						}
					}
					else if( parentList.className == "cls-resultList-floor"){//층목록
						var targetBuildingName = _searchData.buildingName;
						var targetBuildingFloor = parentList.querySelector("h2").innerText;
						
						for(var i=0; i < favoriteObject.length; i++){
							if( favoriteObject[i].type == "1" && favoriteObject[i].classRoom_building == targetBuildingName && favoriteObject[i].classRoom_floor == targetBuildingFloor){
								favoriteObject.splice( i, 1 );
								localStorage.setItem( 'favoriteObject', JSON.stringify( favoriteObject ) );
							}
						}
					}
					else{
						console.log("즐겨찾기 동작 에러");
					}
				}
				else{
					console.log("즐겨찾기 동작 에러");
				}
				event.stopPropagation();//CrossBrowser
				
				
			}, false);
		}
		
		
		//2. 건물목록에 이벤트 핸들러 등록		
		for( var i = 0; i < childElement.length; i++){			
			childElement[i].addEventListener('click', function( event){
				event = event || window.event;//IE doesn't pass in the event object		
				
				document.querySelector("#buildingList").style.display = 'none';
				document.querySelector("#" + this.title).style.display = 'block';
				
				_searchData.buildingName =	(this.querySelector( "h2" ).innerText ? this.querySelector( "h2" ).innerText : this.querySelector( "h2" ).textContent);
				
				if( diviceFlag == 1 ){
					//scroller 갱신
					oScroll.refresh(); 
					oScroll.scrollTo(0, 0);
				}
			}, false);
		}
		
		//3. 각 층목록 선택시 검색하도록 등록
		//Event Delegate Pattern : Child Element들 각각에 Event Listener를 등록하는 대신 Parent Element에만 Event Listener를 등록한 뒤 Event 발생시에 클릭된 노드를 확인하여 처리하는 방법	
		for( var i = 1; i < selectorObject.length; i++){
			selectorObject[i].addEventListener('click', function( event ){				
				event = event || window.event;//IE doesn't pass in the event object				
				var target = event.target || event.srcElement;//IE uses srcElement as the targe(FF가 srcElement를 안쓰고 target을 쓰네?
				//console.dir( target.tagName );//H2, TD, TR, LI
				switch( target.tagName ){
					case "H2" :
						var strTemp = target.innerText ? target.innerText : target.textContent;
						_searchData.floorNumber = strTemp.replace("층", "");
						break;
					default :
						var strTemp = target.querySelector("H2").innerText ? target.querySelector("H2").innerText : target.querySelector("H2").textContent;
						_searchData.floorNumber = strTemp.replace("층", "");
						break;
				}
				
				if( _searchData.buildingName != _searchData.floorNumber){//이벤트 등록에 문제가있어서 이렇게 막코딩했슴돠 ㅜㅜ
					viewManager.viewChanged(VIEW_RESULT);			
				}				
				event.stopPropagation();//CrossBrowser
			}, false);

			selectorObject[i].querySelector(" .cls-resultTop ").addEventListener('click', function( event ){//정보부분은 클릭이벤트를 막아줍니다.			
				event = event || window.event;//IE doesn't pass in the event object
				//console.log('층목록을 선택해주세요.');
				event.stopPropagation();//CrossBrowser
			}, false);
		}	
	};
	
    /**
	 * View 클래스의 onResume 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 활성화 될 떄 호출 됨.
	 */	
	this.onResume = function() 
	{	
		
		this.divElement.style.display	= 'block';	
		
		//건물목록만 보여줍니다.
		selectorObject.forEach(function(v){
			v.style.display = 'none';
		});
		selectorObject[BUILDING_LIST].style.display	= 'block';
		
	
		//일단 모든 즐겨찾기를 회색으로 물들이자-_-+
		for( var i =0; i < selectorObject_Flg[FAVORITE_FLG].length; i++){
			selectorObject_Flg[FAVORITE_FLG][i].children[0].className = "cls-div"
		}
		//즐겨찾기 Flag중 즐겨찾기항목은 체크(첫 화면 갱신!)
		favoriteObject.forEach( function( v ){
			if(v.type == "0"){//favoriteFlagElement_Building 에서만 검색합니다.
				switch (v.classRoom_building){
					case "7호관":	
						selectorObject_Flg[FAVORITE_FLG][0].children[0].className = "cls-div-slt";
						break;
					case "경상관":
						selectorObject_Flg[FAVORITE_FLG][1].children[0].className = "cls-div-slt";
						break;
					case "공학관":
						selectorObject_Flg[FAVORITE_FLG][2].children[0].className = "cls-div-slt";
						break;
					case "과학관":
						selectorObject_Flg[FAVORITE_FLG][3].children[0].className = "cls-div-slt";
						break;
					case "국제관":
						selectorObject_Flg[FAVORITE_FLG][4].children[0].className = "cls-div-slt";
						break;
					case "법학관":
						selectorObject_Flg[FAVORITE_FLG][5].children[0].className = "cls-div-slt";
						break;
					case "복지관":
						selectorObject_Flg[FAVORITE_FLG][6].children[0].className = "cls-div-slt";
						break;
					case "북악관":
						selectorObject_Flg[FAVORITE_FLG][7].children[0].className = "cls-div-slt";
						break;
					case "예술관":
						selectorObject_Flg[FAVORITE_FLG][8].children[0].className = "cls-div-slt";
						break;
					case "조형관":
						selectorObject_Flg[FAVORITE_FLG][9].children[0].className = "cls-div-slt";
						break;
					case "체육관":
						selectorObject_Flg[FAVORITE_FLG][10].children[0].className = "cls-div-slt";
						break;
					case "형설관":
						selectorObject_Flg[FAVORITE_FLG][11].children[0].className = "cls-div-slt";
						break;
				}
			}
			else{//type이 0일때 selectorObject_Flg[FAVORITE_FLG] 에서 각 층별로 선택해서 검색합니다.
				switch (v.classRoom_building){
					case "7호관":	
						var selected_favoriteFlagElement = document.querySelector("#buildingList_1").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사
						
						
						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							if( v.classRoom_floor == strTemp){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "경상관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_2").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사
						
						
						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "공학관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_3").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "과학관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_4").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사						
						
						
						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "국제관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_5").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "법학관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_6").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "복지관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_7").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "북악관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_8").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";	
							}
						}
						break;
					case "예술관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_9").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";	
							}
						}
						break;
					case "조형관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_10").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "체육관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_11").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
					case "형설관":
						var selected_favoriteFlagElement = document.querySelector("#buildingList_12").getElementsByClassName("cls-buildingList-fov");//7호관 목록중에서만 검사

						for( var i=0; i < selected_favoriteFlagElement.length; i++){
							var strTemp = selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText ? selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").innerText : selected_favoriteFlagElement[i].parentElement.parentElement.querySelector("h2").textContent;
							
							if( v.classRoom_floor == strTemp ){								
								selected_favoriteFlagElement[i].children[0].className = "cls-div-slt";
							}
						}
						break;
				}
			}
		});
		//alert("지랄이 풍년!");
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
/* SearchView extends View */
SearchView.prototype = new View();
