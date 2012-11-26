/** 
 * @fileoverview favorite에 대한 View입니다.
 * @author 임학순
 * @version 0.1.0
 * @since 2012.10.19
 *
 * modify 2012.10.28 즐겨찾기 제거를 위한 Tag구조 변경 및 이벤트핸들러 추가
 */

/**
 * FavoriteView 클래스 생성자
 * @extends View 
 * @class FavoriteView 클래스는 하드코딩된 페이지를 viewRoot에 그려줍니다.
 * @constructor 
 * @return FavoriteView 클래스의 인스턴스.
*/ 
function FavoriteView()
{
    /**
 	 * View 클래스의 onCreate 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 생성 된 후에 호출 됨.
	 * @param {Div Element} parentDivElement View의 Div Element가 추가될 부모 Div Element. 
	 */
	this.onCreate = function(parentDivElement) 
	{ 
		//1. HTML 생성
		var tag = '<ul id="favoriteList"></ul>';
		
		var listTag = "";
		
		this.divElement 				= document.createElement('div');
		this.divElement.id 				= 'FavoriteView';
		this.divElement.style.display	= 'none';
		this.divElement.innerHTML		= tag;
		parentDivElement.appendChild(this.divElement);
		
		//2. 이벤트리스너 추가
		//Event Delegate Pattern : Child Element들 각각에 Event Listener를 등록하는 대신 Parent Element에만 Event Listener를 등록한 뒤 Event 발생시에 클릭된 노드를 확인하여 처리하는 방법	
		this.divElement.querySelector("#favoriteList").addEventListener('click', function( event ){				
			event = event || window.event;//IE doesn't pass in the event object				
			var target = event.target || event.srcElement;//IE uses srcElement as the targe(FF가 srcElement를 안쓰고 target을 쓰네?
			var parentList;
			
			console.dir( target.tagName );//H2, TD, TR, LI
			
			switch( target.tagName ){
				case "H2" :
					parentList = target.parentElement.parentElement.parentElement.parentElement.parentElement;// 5번 올라가면 List가 나옵니다.
					break;
				case "TD" :
					parentList = target.parentElement.parentElement.parentElement.parentElement;// 4번 올라가면 List가 나옵니다.
					break;
				case "TR" :
					parentList = target.parentElement.parentElement.parentElement;// 3번 올라가면 List가 나옵니다.
					break;
				case "LI" :
					parentList = target;
					break;
			}
			console.log(parentList);
			
			var targetTag = parentList.querySelector("h2").innerText ? parentList.querySelector("h2").innerText : parentList.querySelector("h2").textContent;
			var targetData = targetTag.split(" ");//ex) 7호관 / (전체) or 7호관 / 2층
			targetData[1] = targetData[1].replace("층", "");
			//console.log(parentList.title);
			
			if( parentList.title == "0"){
				//전층검색
				_searchData.buildingName	=	targetData[0];
				_searchData.floorNumber		= "전";
				viewManager.viewChanged(VIEW_RESULT);
			}
			else if(parentList.title == "1"){
				//특정 층 검색
				_searchData.buildingName	=	targetData[0];
				_searchData.floorNumber		= targetData[1];
				viewManager.viewChanged(VIEW_RESULT);
			}
			event.stopPropagation();//CrossBrowser
		}, false);
	};
    /**
	 * View 클래스의 onResume 메서드를 구현 하였습니다.<p />
	 * View 클래스의 인스턴스가 활성화 될 떄 호출 됨.
	 */	
	this.onResume = function() 
	{	
		//0. 초기화
		document.querySelector("#favoriteList").innerHTML = "";
		var favoriteFlagElement;

		//1. 태그 설계 및 Data 입력
		if( favoriteObject.length > 0 ){
			favoriteObject.forEach( function( v ){
				var listElement	=	document.createElement('li');

				if( v.type == '0' ){//건물 검색
					listTag = ''
					+	'<table width="100%" border="0" cellpadding="5" cellspacing="0"><tr>'
					+		'<td width="854" align="left" valign="middle" style="padding-left:10px"><h2>' +  v.classRoom_building + ' (전층)</h2>'
					+		'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><img src="./img/favorite_star.png" alt="즐겨찾기에 추가" title="0" width="40px" height="40px"/></span></td>'
					+	'</tr></table>';
					
					listElement.title = "0";//type0입니다. 건물명만 있습니다.
				}
				else{//건물+층
					listTag = ''
					+	'<table width="100%" border="0" cellpadding="5" cellspacing="0"><tr>'
					+		'<td width="854" align="left" valign="middle" style="padding-left:10px"><h2>' +  v.classRoom_building + ' ' + v.classRoom_floor + '</h2>'
					+		'<td width="68" align="right" valign="middle"><span class="cls-buildingList-fov"><img src="./img/favorite_star.png" alt="즐겨찾기에서 제거" title="1" width="40px" height="40px"/></span></td>'
					+	'</tr></table>';
					
					listElement.title = "1";//type1입니다. 건물명과 층 정보가 있습니다.
				}
				
				listElement.innerHTML = listTag;
				listElement.className = "cls-favoriteList";
				
				document.querySelector("#favoriteList").appendChild(listElement);
				
				favoriteFlagElement = listElement.querySelector(".cls-buildingList-fov");
				//console.dir( favoriteFlagElement );
				favoriteFlagElement.parentElement.addEventListener('click', function( event ){//TD태그에 이벤트를 추가합니다.
					event = event || window.event;//IE doesn't pass in the event object
					var target = event.target || event.srcElement;//IE uses srcElement as the targe(FF가 srcElement를 안쓰고 target을 쓰네?
					var parentList = this.parentElement.parentElement.parentElement.parentElement;// selectorObject_Flg[FAVORITE_FLG][i].parentElement 에서 4번 올라가면 List가 나옵니다.
					
					//console.log(target);

					target.src = "./img/favorite_star_gray.png";
					target.alt = "즐겨찾기에 추가";
					target.title = "0";
					
					var targetTag = parentList.querySelector("h2").innerText ? parentList.querySelector("h2").innerText : parentList.querySelector("h2").textContent ;
					var targetData = targetTag.split(" ");//ex) 7호관 / (전체)
					
					console.log( targetData);
						
					if( parentList.title == "0"){
						for(var i=0; i < favoriteObject.length; i++){
							if( favoriteObject[i].type == "0" && favoriteObject[i].classRoom_building == targetData[0]){
								favoriteObject.splice( i, 1 );
								localStorage.setItem( 'favoriteObject', JSON.stringify( favoriteObject ) );
							}
						}
					}
					else if( parentList.title == "1"){
						for(var i=0; i < favoriteObject.length; i++){
							if( favoriteObject[i].type == "1" && favoriteObject[i].classRoom_building == targetData[0] && favoriteObject[i].classRoom_floor == targetData[1]){
								favoriteObject.splice( i, 1 );
								localStorage.setItem( 'favoriteObject', JSON.stringify( favoriteObject ) );
							}
						}
					}
					event.stopPropagation();//CrossBrowser
					setTimeout( viewManager.viewRefresh(), 3000);					
				}, false);
				
			});	
		}
		else{
			//cls-favoriteList-nodata
			var listElement	=	document.createElement('li');
			listTag = '<h2>즐겨찾기 목록이 없습니다</h2>';
			
			listElement.innerHTML = listTag;
			listElement.className = "cls-favoriteList-nodata";
			
			document.querySelector("#favoriteList").appendChild(listElement);
			
			listElement.addEventListener('click', function( event ){//이벤트 잠그는 역할을 합니다.
				event.stopPropagation();
			});
		}
		
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
/* FavoriteView extends View */
FavoriteView.prototype = new View();
