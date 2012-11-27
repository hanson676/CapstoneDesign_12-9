/** 
 * @fileoverview View Life Cycle 정책에 따라 View 클래스들을 관리하는 ViewManager 클래스 소스 파일입니다.
 * @author 임학순
 * @version 0.1.1
 * @since 2012.08.10
 *
 * modify 2012.11.14 PC버전 삭제
*/


/**
 * @class ViewManager 클래스는 View Life Cycle에 기반하여 View 클래스들을 제어합니다.<br />
 * ViewManager는 싱글톤 방식으로 설계되어 있습니다.
 */
function ViewManager() {
	if(ViewManager._instance != null) { throw new Error("APPManager는 싱글톤 방식으로 설계되어 있습니다."); }
	/**
	 * 컨텍스트
	 * @type Window Element
	*/
	var _context = null;
	/**
	 * view가 생성 될 최상위 Div Element 
	 * @type Div Element
	 */		 
	var _viewRootDivElement = null;
	/**
	 * 생성된 View 클래스를 관리. <br />
	 * define_view.js에 View 명시
	 * @type Object
	*/      
	var _viewGroup = new Object();
	
	
	/***현재 뷰*/
	var _currentView	= null;
	/***이전 뷰*/
	var _oldView		= null;
	
	
	
	
	/**
	 * ViewManager의 초기화를 실행하는 메소드 입니다.
	 * @param {Window Element} context 윈도우
	 * @param {Div Element} viewRootDivElement view가 생성 될 최상위 Div Element 
    */
	this.initialize = function(context, viewRootDivElement)
	{
		_context = context;// 컨텍스트 설정
		_viewRootDivElement = viewRootDivElement;// view가 생성 될 최상위 Div Element 설정
		
		this.viewChanged(VIEW_FAVORITE);
	};
	
	this.viewChanged = function(viewType){
		// 현재 View가 존재할 경우
		if(_currentView != null) {
			// 현재 View를 초기화 하고 화면에서 숨깁니다.
			_currentView.pause();
			if(_currentView.getDivElement() != undefined) { 
				_currentView.getDivElement().style.display = 'none';  
			}
		}

		// View Group에서 요청하는 View Type의 View를 검색합니다.
		var view = _viewGroup[viewType];
		
		if(view == undefined)// 요청하는 View가 없을 경우
		{
			view = new _context[viewType]();// 요청하는 View를 생성합니다.
			
			// View 생성이 성공한 경우
			if(view != undefined)
			{
				view.create(_viewRootDivElement);// 생성된 View의 create 메소드를 호출합니다. 해당 View에서는 onCreate가 실행됩니다.
				_viewGroup[viewType] = view;// View Gropu에 View를 등록합니다.
			}
			else{
				throw new Error("등록되어 있지 않은 View 입니다.");
				return;
			}
		}
		
		if(view){
			 _oldView	= _currentView;
			_currentView = view;
			_currentView.resume();// 현재 View를 활성화 합니다.
			
			if( diviceFlag == 1 ){
				//scroller 갱신
				oScroll.refresh(); 
				oScroll.scrollTo(0, 0);
			}	
			
		}
			
		
		
	};	
	
	this.viewRefresh = function(viewType){
		_currentView.pause();
		_currentView.resume();// 현재 View를 활성화 합니다.
		
		if( diviceFlag == 1 ){
			//scroller 갱신
			oScroll.refresh(); 
			oScroll.scrollTo(0, 0);
		}
	};
};
/**
 * ViewManager 인스턴스를 리턴하는 전역 메소드.
 * @return ViewManager 인스턴스
 * @type ViewManager
 */	
ViewManager.getInstance = function () { 
	if(ViewManager._instance == null) { ViewManager._instance = new ViewManager(); }
	return ViewManager._instance;
}

