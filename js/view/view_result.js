/** 
 * @fileoverview result에 대한 View입니다.
 * @author 임학순
 * @version 0.0.1
 * @since 2012.10.17
 */

/**
 * ResultView 클래스 생성자
 * @extends View 
 * @class ResultView 클래스는 하드코딩된 페이지를 viewRoot에 그려줍니다.
 * @constructor 
 * @return ResultView 클래스의 인스턴스.
*/ 
function ResultView()
{
	var RESULT_LIST= 0;	
	var selectorObject = [];
    /**
 	 * View 클래스의 onCreate 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 생성 된 후에 호출 됨.
	 * @param {Div Element} parentDivElement View의 Div Element가 추가될 부모 Div Element. 
	 */
	this.onCreate = function(parentDivElement) 
	{ 
		//1. HTML 생성
		var tag = '<ul id="searchResult"></ul>';
		
		var listTag = "";
		
		this.divElement 				= document.createElement('div');
		this.divElement.id 				= 'ResultView';
		this.divElement.style.display	= 'none';
		this.divElement.innerHTML		= tag;
		parentDivElement.appendChild(this.divElement);		
		selectorObject[RESULT_LIST] = this.divElement.querySelector("#searchResult");
	};
    /**
	 * View 클래스의 onResume 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 활성화 될 떄 호출 됨.
	 */	
	this.onResume = function() 
	{
		var emptyRoom = searchECR( _searchData.buildingName, _searchData.floorNumber);//classRoom_building, classRoom_floor, classRoom_Number, useFlag
		
		selectorObject[RESULT_LIST] .innerHTML = ""
		+'<li class="cls-resultTop"><table width="100%" border="0" cellpadding="5" cellspacing="0">'
		+			'<tr>'
		+				'<td width="121" height="130" rowspan="3" align="right" valign="middle"><img src="./img/kmu_logo.png"></td>'
		+				'<td width="200" height="41" align="left" valign="bottom"><font size="4">국민대학교</font></td>'
		+			'</tr>'
		+			'<tr><td height="42" align="left"><strong><font size="6">' +  _searchData.buildingName + '</font></strong>&nbsp;<font size="4">'+ _searchData.floorNumber + '층</font></td></tr>'
		+			'<tr><td height="29" align="left" valign="top"><font size="4">빈 강의실 현황입니다.</font></td></tr></table>'
		+	'</table>	'	
		+'</li>'

		if( emptyRoom.length == 0){
			var listElement	=	document.createElement('li');
			listTag = '<div style="width:100%; text-align:center;"><h2>사용 가능한 강의실이 없습니다.</h2></div>';
			listElement.innerHTML = listTag;
			listElement.className = "cls-resultList";
			selectorObject[RESULT_LIST].appendChild(listElement);
		}
		emptyRoom.forEach( function( v ){
			var listElement	=	document.createElement('li');
			listTag = "<h3>" +v.classRoom_floor + leadingZeros(v.classRoom_Number, 2) + "호실</h3><p>" + v.NextClassTime + "</p>";
			listElement.innerHTML = listTag;
			listElement.className = "cls-resultList";
			selectorObject[RESULT_LIST].appendChild(listElement);			
		});	
		
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
/* ResultView extends View */
ResultView.prototype = new View();
