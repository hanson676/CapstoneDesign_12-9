/** 
 * @fileoverview 빈강의실 검색
 * @author 임학순
 * @version 0.0.1
 * @since 2012.10.17
 */

 /**
 * 빈강의실을 검색하여 결과를 돌려줍니다. 
 * @param {string} buildingName 건물이름
 * @param {Number} floorNumber 건물 층수
 * @return Array(JSON)
*/ 
function searchECR( buildingName, floorNumber) {
	var buildingObj;
	var emptyRoom = [];//빈강의실 목록(검색을 통해서 사용중인 강의실을 하나씩 제외합니다.),
	var timeObj
	
	var today = getTimeStamp();//[0] : 요일 / [1] : 시간
	/*테스트용*/
	//today[1] = 1030;//10시30분으로 고정!
	
	var futureTime = eval( Number(today[1]) + 30 );
	if( futureTime > 2359 ){
		futureTime = 2400;
	}
	
	//빌딩 이름에 따른 obj-code
	switch(buildingName){
		case '7호관' :
			buildingObj = buildingObj_1;
			break;
		case '경상관' :
			buildingObj = buildingObj_2;
			break;
		case '공학관' :
			buildingObj = buildingObj_3;
			break;
		case '과학관' :
			buildingObj = buildingObj_4;
			break;
		case '국제관' :
			buildingObj = buildingObj_5;
			break;
		case '법학관' :
			buildingObj = buildingObj_6;
			break;
		case '복지관' :		
			buildingObj = buildingObj_7;
			break;
		case '북악관' :
			buildingObj = buildingObj_8;
			break;
		case '예술관' :
			buildingObj = buildingObj_9;
			break;
		case '조형관' :
			buildingObj = buildingObj_10;
			break;
		case '체육관' :
			buildingObj = buildingObj_11;
			break;
		case '형설관' :
			buildingObj = buildingObj_12;
			break;
		default :
			//console.log('건물이름을 확인할 수 없습니다.');
	}
	
	for( var i = 0; i < buildingObj.length; i++){
		/*
			검색할 강의실은 Sorting되어있다.
			그러므로 같은강의실에 대한 timeTable을 모두 확인한 후 다음 강의실을 확인한다.
		*/
		if( floorNumber == "전" ){
			//1단계 : 방문하는 모든 방을 저장한다.
			if( emptyRoom.length == 0 ){//첫번째 강의실 방문!
				emptyRoom.push({ classRoom_building:buildingObj[i].classRoom_building, classRoom_floor:buildingObj[i].classRoom_floor, classRoom_Number:buildingObj[i].classRoom_Number, NextClassTime:"다음강의 없음", useFlag:0 });
				
				//console.log( emptyRoom[emptyRoom.length-1].classRoom_building+ " " + emptyRoom[emptyRoom.length-1].classRoom_floor +"층 " +  emptyRoom[emptyRoom.length-1].classRoom_Number + "호실을 " + "방문했습니다." );
			}
			else if( emptyRoom[emptyRoom.length-1].classRoom_Number != buildingObj[i].classRoom_Number ){ //다음 강의실로 이동했을때
				if( emptyRoom[emptyRoom.length-1].useFlag == 1 ){//지금 top인 강의실이 사용중이면?
					emptyRoom.pop();
				}
				
				emptyRoom.push({ classRoom_building:buildingObj[i].classRoom_building, classRoom_floor:buildingObj[i].classRoom_floor, classRoom_Number:buildingObj[i].classRoom_Number, NextClassTime:"다음강의 없음", useFlag:0 });
				//console.log( emptyRoom[emptyRoom.length-1].classRoom_building+ " " + emptyRoom[emptyRoom.length-1].classRoom_floor +"층 " +  emptyRoom[emptyRoom.length-1].classRoom_Number + "호실을 " + "방문했습니다." );
			}
			else{//같은강의실을 검사중입니다.				
				if(emptyRoom[emptyRoom.length-1].useFlag == 1){//이미 사용중이네?
					continue;
				}
			}
			
			//2단계 : 현재시간과 TimeTable을 비교하는 알고리즘
			timeObj = convertTime( buildingObj[i].classTime_time );//startTime, endTime		
			
			if( today[0] == buildingObj[i].classTime_weekDay ){
				if( timeObj.startTime > today[1] ){
					emptyRoom[emptyRoom.length-1].NextClassTime = "다음강의 : " +  buildingObj[i].className +"<br/>강의시간 : (" +timeObj.startTime.substr(0,2) + "시" + timeObj.startTime.substr(2,4)+ "분" + ")";
				}
					
				if( (timeObj.startTime < today[1] && today[1] < timeObj.endTime) || ( (timeObj.startTime < futureTime && futureTime < timeObj.endTime) ) ){//현재시간 or 30분뒤 수업중이면 제외
					//console.log( emptyRoom[emptyRoom.length-1].classRoom_floor +   leadingZeros(emptyRoom[emptyRoom.length-1].classRoom_Number, 2)  + "호실은 " + buildingObj[i].className+ "수업중입니다." );
					emptyRoom[emptyRoom.length-1].useFlag = 1;
				}
			}		
		}
		else{
			if(buildingObj[i].classRoom_floor == floorNumber){//같은층인 객체만 검색				
				//1단계 : 방문하는 모든 방을 저장한다.
				if( emptyRoom.length == 0 ){//첫번째 강의실 방문!
					emptyRoom.push({ classRoom_building:buildingObj[i].classRoom_building, classRoom_floor:buildingObj[i].classRoom_floor, classRoom_Number:buildingObj[i].classRoom_Number, NextClassTime:"다음강의 없음", useFlag:0 });
					//console.log( emptyRoom[emptyRoom.length-1].classRoom_building+ " " + emptyRoom[emptyRoom.length-1].classRoom_floor +"층 " +  emptyRoom[emptyRoom.length-1].classRoom_Number + "호실을 " + "방문했습니다." );
				}
				else if( emptyRoom[emptyRoom.length-1].classRoom_Number != buildingObj[i].classRoom_Number ){ //다음 강의실로 이동했을때
					if( emptyRoom[emptyRoom.length-1].useFlag == 1 ){//지금 top인 강의실이 사용중이면?
						emptyRoom.pop();
					}
					
					emptyRoom.push({ classRoom_building:buildingObj[i].classRoom_building, classRoom_floor:buildingObj[i].classRoom_floor, classRoom_Number:buildingObj[i].classRoom_Number, NextClassTime:"다음강의 없음", useFlag:0 });
					//console.log( emptyRoom[emptyRoom.length-1].classRoom_building+ " " + emptyRoom[emptyRoom.length-1].classRoom_floor +"층 " +  emptyRoom[emptyRoom.length-1].classRoom_Number + "호실을 " + "방문했습니다." );
				}
				else{//같은강의실을 검사중입니다.				
					if(emptyRoom[emptyRoom.length-1].useFlag == 1){//이미 사용중이네?
						continue;
					}
				}
				
				//2단계 : 현재시간과 TimeTable을 비교하는 알고리즘
				timeObj = convertTime( buildingObj[i].classTime_time );//startTime, endTime		
				
				if( today[0] == buildingObj[i].classTime_weekDay ){//오늘과 같은 요일인 강의만 검사합니다.
					if( timeObj.startTime > today[1] ){
						emptyRoom[emptyRoom.length-1].NextClassTime = "다음강의 : " +  buildingObj[i].className +"<br/>강의시간 : (" +timeObj.startTime.substr(0,2) + "시" + timeObj.startTime.substr(2,4)+ "분" + ")";
					}
					
					if( (timeObj.startTime < today[1] && today[1] < timeObj.endTime) || ( (timeObj.startTime < futureTime && futureTime < timeObj.endTime) ) ){//현재시간 or 30분뒤 수업중이면 제외
						//console.log( emptyRoom[emptyRoom.length-1].classRoom_floor +   leadingZeros(emptyRoom[emptyRoom.length-1].classRoom_Number, 2)  + "호실은 " + buildingObj[i].className+ "수업중입니다." );
						emptyRoom[emptyRoom.length-1].useFlag = 1;
					}
				}
			}
		}
	};
	console.log("결과값입니다.")
	console.dir( emptyRoom );
	return emptyRoom;
	
}