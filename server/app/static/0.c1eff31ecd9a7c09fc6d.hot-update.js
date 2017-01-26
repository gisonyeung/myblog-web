webpackHotUpdate(0,{

/***/ 101:
/*!*****************************!*\
  !*** ./src/actions/blog.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 8), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 9), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 7), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fetch = __webpack_require__(/*! ../utils/fetch */ 106);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _constants = __webpack_require__(/*! ../constants */ 29);
	
	var _Api = __webpack_require__(/*! ../constants/Api */ 103);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _lodash = __webpack_require__(/*! lodash */ 48);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _network = __webpack_require__(/*! ./network */ 102);
	
	var _network2 = _interopRequireDefault(_network);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _changePageActionCreator(nextPage) {
	  return {
	    type: _constants.Blog.CHANGE_PAGE,
	    payload: nextPage
	  };
	}
	
	// 初始化页码信息，请求总页数
	var initPageNum = function initPageNum(current) {
	  return function (dispatch) {
	    current = parseInt(current, 10);
	
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
	          total: data.page,
	          hasInit: true
	        }
	      });
	    }).catch(function (err) {
	      console.log('请求总页码失败: ', err);
	    });
	  };
	};
	
	// 修改页码，并请求当前页码下的博文
	var fetchPageBlogs = function fetchPageBlogs(current) {
	  return function (dispatch) {
	    current = parseInt(current, 10);
	
	    dispatch(_changePageActionCreator(current));
	    dispatch(_network2.default.requestAction(_constants.Blog.REQUEST_FETCH_BLOGS));
	    _fetch2.default.POST(_Api2.default.getBlogByPage, {
	      page: current
	    }).then(function (data) {
	      if (data.result !== 'success') {
	        dispatch(_network2.default.failAction(_constants.Blog.FAILED_FETCH_BLOGS, data.reason));
	        return false;
	      }
	      dispatch(_network2.default.receiveAction(_constants.Blog.RECEIVE_FETCH_BLOGS, data.blogs));
	    }).catch(function (err) {
	      dispatch(_network2.default.failAction(_constants.Blog.FAILED_FETCH_BLOGS, err));
	    });
	  };
	};
	
	// 请求博文详情
	var getBlogDetail = function getBlogDetail(blogId) {
	  return function (dispatch) {
	
	    dispatch(_network2.default.requestAction(_constants.Blog.REQUEST_FETCH_BLOG));
	    _fetch2.default.POST(_Api2.default.getBlogDetail, {
	      blogId: blogId
	    }).then(function (data) {
	      if (data.result !== 'success') {
	        dispatch(_network2.default.failAction(_constants.Blog.FAILED_FETCH_BLOG, data.reason));
	        return false;
	      }
	      dispatch(_network2.default.receiveAction(_constants.Blog.RECEIVE_FETCH_BLOG, data.blog));
	    }).catch(function (err) {
	      dispatch(_network2.default.failAction(_constants.Blog.FAILED_FETCH_BLOG, err));
	    });
	  };
	};
	
	exports.default = {
	  initPageNum: initPageNum,
	  fetchPageBlogs: fetchPageBlogs,
	  getBlogDetail: getBlogDetail
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "blog.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.c1eff31ecd9a7c09fc6d.hot-update.js.map