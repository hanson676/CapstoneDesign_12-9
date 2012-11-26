/** 
 * @fileoverview 시간에 관련된 함수들을 정의합니다.
 * @author 임학순
 * @version 0.0.1
 * @since 2012.10.17
 */

/**
 * 현재 요일과 시간을 받아옵니다.
 * @return Array
*/ 
function getTimeStamp() {
	//현재시간 구하기
	var d = new Date();	
	
	var n = d.getDay();//The getDay() method returns the day of the week (from 0 to 6) for the specified date. Note: Sunday is 0, Monday is 1, and so on.


	var s = n + ':' + leadingZeros(d.getHours(), 2)+ leadingZeros(d.getMinutes(), 2); //ex) 월요일 2시 = "1:1400" ->스플릿으로 나누면 되지롱?
	return s.split(':');
}


/**
 * 수의 개수가 동일하게끔 앞에 0을 채워주는 함수.(Ex. 2일->02일)
 * @return Number
*/ 
function leadingZeros(n, digits) {
	
	var zero = '';
	var str = n.toString().split("_");//만약 _로 나눠진 숫자가 있다면?
	//console.log( str );
	
	
	if ( str[0].length < digits) {
		for (i = 0; i < digits - str[0].length; i++)
			zero += '0';
	}	
	if( str[1] ){
		return  zero + str[0] + "_" + str[1];	
	}
	else{
		return  zero + str[0];
	}
}

/**
 * X교시인 정보를 시간으로 변경합니다.
 * @return JSON
*/ 
function convertTime( code ){
	var timeObj = { startTime : 0000, endTime : 0000 };//시작시간과 끝시간을 저장하는 JSON형태의 객체 생성 

	switch( code )
	{
		case '0' : 
			timeObj.startTime	= '0800';
			timeObj.endTime	= '0900';
			break;
		case '1' : 
			timeObj.startTime	= '0900'
			timeObj.endTime	= '1000';
			break;
		case '2' : 
			timeObj.startTime	= '1000';
			timeObj.endTime	= '1100';
			break;
		case '3' : 
			timeObj.startTime	= '1100';
			timeObj.endTime	= '1200';
			break;
		case '4' : 
			timeObj.startTime	= '1200';
			timeObj.endTime	= '1300';
			break;
		case '5' : 
			timeObj.startTime	= '1300';
			timeObj.endTime	= '1400';
			break;
		case '6' : 
			timeObj.startTime	= '1400';
			timeObj.endTime	= '1500';
			break;
		case '7' : 
			timeObj.startTime	= '1500';
			timeObj.endTime	= '1600';
			break;
		case '8' : 
			timeObj.startTime	= '1600';
			timeObj.endTime	= '1700';
			break;
		case '9': 
			timeObj.startTime	= '1700';
			timeObj.endTime	= '1800';
			break;
		case '10' : 
			timeObj.startTime	= '1800';
			timeObj.endTime	= '1850';
			break;
		case '11' : 
			timeObj.startTime	= '1850';
			timeObj.endTime	= '1940';
			break;
		case '12': 
			timeObj.startTime	= '1940';
			timeObj.endTime	= '2030';
			break;
		case '13' : 
			timeObj.startTime	= '2030';
			timeObj.endTime	= '2120';
			break;
		case '14' : 
			timeObj.startTime	= '2120';
			timeObj.endTime	= '2205';
			break;

		case 'A' : 
			timeObj.startTime	= '0900';
			timeObj.endTime	= '1030';
			break;
		case 'B' : 
			timeObj.startTime	= '1030';
			timeObj.endTime	= '1200';
			break;
		case 'C' : 
			timeObj.startTime	= '1200';
			timeObj.endTime	= '1330';
			break;
		case 'D' : 
			timeObj.startTime	= '1330';
			timeObj.endTime	= '1500';
			break;
		case 'E' : 
			timeObj.startTime	= '1500';
			timeObj.endTime	= '1630';
			break;
		case 'F' : 
			timeObj.startTime	= '1630';
			timeObj.endTime	= '1800';
			break;
		case 'G' : 
			timeObj.startTime	= '1800';
			timeObj.endTime	= '1915';
			break;
		case 'H' : 
			timeObj.startTime	= '1915';
			timeObj.endTime	= '2030';
			break;
		case 'I' : 
			timeObj.startTime	= '2030';
			timeObj.endTime	= '2140';
			break;
	}
	
	return timeObj;
}

/*
자바스크립트 현재시간 구하기
 
function getTimeStamp(s1) {
 //현재시간 구하기
 var d = new Date();
 
 if (s1 == 1) {
  // 20080301103025 표현식
  var s =
  leadingZeros(d.getFullYear(), 4) +
  leadingZeros(d.getMonth() + 1, 2) +
  leadingZeros(d.getDate(), 2) +
  
  leadingZeros(d.getHours(), 2) +
  leadingZeros(d.getMinutes(), 2) +
  leadingZeros(d.getSeconds(), 2);
 }
 else {
  // 2008-03-01 10:30:25 표현식
  var s =
  leadingZeros(d.getFullYear(), 4) + '-' +
  leadingZeros(d.getMonth() + 1, 2) + '-' +
  leadingZeros(d.getDate(), 2) + ' ' +
  
  leadingZeros(d.getHours(), 2) + ':' +
  leadingZeros(d.getMinutes(), 2) + ':' +
  leadingZeros(d.getSeconds(), 2);
 }
 return s;
}
function leadingZeros(n, digits) {
 // 1 -> 01 과 같이 변경하기
 var zero = '';
 n = n.toString();
 
 if (n.length < digits) {
  for (i = 0; i < digits - n.length; i++)
  zero += '0';
 }
 return zero + n;
}


[출처] 자바스크립트 현재시간 구하기|작성자 woohabee
http://blog.naver.com/woohabee?Redirect=Log&logNo=120051799229

*/