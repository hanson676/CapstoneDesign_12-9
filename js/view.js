/** 
 * @fileoverview View의 슈퍼클래스입니다. 
 * @description 각 뷰들은 View()를 상속받아 각 함수를 오버라이딩합니다.<br/>각 이벤트 메소드를 분리하여 오버라이딩에 대한 오류를 정의한다.
 * @author 임학순
 * @version 0.0.2
 * @since 2012.09.26
*/


function View(){
};

View.prototype = {
	divElement : null,
	/**
	*
	* 외부에서 View 클래스의 div Element를 조회 할 때 사용 됩니다.<p />
	* divElement에 값이 없으면 강제적으로 에러가 발생 합니다.<br />
	* onCreate 메소드가 호출 될 때 동적으로 Div Element 생성하여 설정합니다. <br />
	* @return 화면에 출력 될 View 클래스의 Div Element
	* @type Div Element
	*/
	getDivElement : function() {
		if(this.divElement != null) { return this.divElement; }
		throw new Error("화면에 출력될 Div Element를 생성하지 않았습니다. onCreate 호출시 생성하기를 권장합니다. ");
		return null;
	},
	/* 외부 코드에서 create를 호출하면, View 클래스에서는 내부 onCreate 메소드를 실행 시킵니다.*/
	create : function(parentDivElement) 	 {
		if(this.onCreate != null) { this.onCreate(parentDivElement); }
		else { throw new Error("생성자 함수에 onCreate(parentDivElement)를 구현해 주세요."); }
	},
	/* 외부에서 resume 호출하면, View 클래스에서는 내부 onResume 메소드를 실행 시킵니다.*/
	resume : function()			 	 {
		if(this.onResume != null) { this.onResume(); }
		else { throw new Error("생성자 함수에 onResume()를 구현해 주세요."); }
	},
	/* 외부 코드에서 pause 호출하면, View 클래스에서는 내부 onPause 메소드를 실행 시킵니다.*/
	pause : function()			 	 {
		if(this.onPause != null) { this.onPause(); }
		else { throw new Error("생성자 함수에 onPause()를 구현해 주세요."); }
	},
	
	onCreate : null,
	onResume : null,
	onPause : null,
};

