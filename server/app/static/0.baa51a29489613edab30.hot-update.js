webpackHotUpdate(0,{

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _fetch = __webpack_require__(236);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _constants = __webpack_require__(60);

	var _Api = __webpack_require__(224);

	var _Api2 = _interopRequireDefault(_Api);

	var _lodash = __webpack_require__(146);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _network = __webpack_require__(220);

	var _network2 = _interopRequireDefault(_network);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _changePageActionCreator(nextPage) {
	  return {
	    type: _constants.Blog.CHANGE_PAGE,
	    payload: nextPage
	  };
	}

	// 初始化页码信息，请求总页数
	var initPage = function initPage(current) {
	  return function (dispatch) {
	    dispatch(_changePageActionCreator(current));

	    _fetch2.default.POST(_Api2.default.getBlogTotalPage).then(function (data) {
	      if (data.result !== 'success') {
	        console.log('请求总页码失败: ', data.reason);
	        return false;
	      }
	      dispatch({
	        type: _constants.Blog.UPDATE_PAGE_INFO,
	        payload: {
	          current: current,
	          total: data.page
	        }
	      });
	    }).catch(function (err) {
	      console.log('请求总页码失败: ', err);
	    });
	  };
	};

	// 修改页码，并请求当前页码下的博文
	var changePage = function changePage(current) {
	  return function (dispatch) {
	    dispatch(_changePageActionCreator(current));

	    console.log(_constants.Blog);

	    dispatch(_network2.default.requestAction(_constants.Blog.REQUEST_FETCH));
	    _fetch2.default.POST(_Api2.default.fetchBlogByPage, {
	      page: current
	    }).then(function (data) {
	      if (data.result !== 'success') {
	        dispatch(_network2.default.failAction(_constants.Blog.FAILED_FETCH, data.reason));
	        return false;
	      }
	      dispatch(_network2.default.receiveAction(_constants.Blog.RECEIVE_FETCH, data.blogs));
	    }).catch(function (err) {
	      dispatch(_network2.default.failAction(_constants.Blog.FAILED_FETCH, err));
	    });
	  };
	};

	exports.default = {
	  initPage: initPage,
	  changePage: changePage
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "blog.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})