webpackHotUpdate(0,{

/***/ 247:
/*!******************************!*\
  !*** ./src/reducers/blog.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 8), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 9), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 7), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(/*! ../constants */ 29);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _lodash = __webpack_require__(/*! lodash */ 49);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _getStatus = __webpack_require__(/*! ../utils/getStatus */ 107);
	
	var _getStatus2 = _interopRequireDefault(_getStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var bloglist_state_initial = {
	  blogs: [],
	  page: {
	    current: 1,
	    total: 1,
	    hasInit: false
	  },
	  hasBlogInit: false,
	  fetchStatus: (0, _getStatus2.default)()
	};
	
	var blogList = function blogList() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bloglist_state_initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _constants.Blog.REQUEST_FETCH_BLOGS:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FETCHING) });
	    case _constants.Blog.RECEIVE_FETCH_BLOGS:
	      return Object.assign({}, state, {
	        fetchStatus: (0, _getStatus2.default)(_constants.Status.DONE),
	        blogs: action.payload,
	        hasBlogInit: true
	      });
	    case _constants.Blog.FAILED_FETCH_BLOGS:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FAILED, action.payload) });
	    case _constants.Blog.UPDATE_PAGE_INFO:
	      return Object.assign({}, state, { page: action.payload });
	    case _constants.Blog.CHANGE_PAGE:
	      return Object.assign({}, state, {
	        page: {
	          current: action.payload,
	          total: state.page.total
	        }
	      });
	    default:
	      return state;
	  }
	};
	
	var blog_state_initial = {
	  blog: {},
	  nearBlog: {},
	  fetchStatus: (0, _getStatus2.default)(),
	  is_like_success: false
	};
	
	var currentBlog = function currentBlog() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : blog_state_initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _constants.Blog.REQUEST_FETCH_BLOG:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FETCHING) });
	    case _constants.Blog.RECEIVE_FETCH_BLOG:
	      return Object.assign({}, state, {
	        fetchStatus: (0, _getStatus2.default)(_constants.Status.DONE),
	        blog: action.payload,
	        is_like_success: false
	      });
	    case _constants.Blog.FAILED_FETCH_BLOG:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FAILED, action.payload) });
	    case _constants.Blog.UPDATE_NEARBLOG:
	      return Object.assign({}, state, { nearBlog: action.payload });
	    case _constants.Blog.REQUEST_ADD_LIKE:
	      return Object.assign({}, state, { is_like_success: true });
	    case _constants.Blog.FAILED_ADD_LIKE:
	      return Object.assign({}, state, { is_like_success: false });
	    default:
	      return state;
	  }
	};
	
	exports.default = (0, _redux.combineReducers)({
	  blogList: blogList,
	  currentBlog: currentBlog
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "blog.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.eba278b2aa58fc06c018.hot-update.js.map