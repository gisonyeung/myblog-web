webpackHotUpdate(0,{

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(60);

	var _redux = __webpack_require__(53);

	var _lodash = __webpack_require__(146);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _getStatus = __webpack_require__(237);

	var _getStatus2 = _interopRequireDefault(_getStatus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_constants.Blog);

	var blog_state_initial = {
	  blogs: [],
	  page: {
	    current: 0,
	    total: 0
	  },
	  fetchStatus: (0, _getStatus2.default)()
	};

	var blogList = function blogList() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : blog_state_initial;
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.Blog.REQUEST_FETCH:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FETCHING) });
	    case _constants.Blog.RECEIVE_FETCH:
	      return Object.assign({}, state, {
	        fetchStatus: (0, _getStatus2.default)(_constants.Status.DONE),
	        blogs: action.payload
	      });
	    case _constants.Blog.FAILED_FETCH:
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

	exports.default = (0, _redux.combineReducers)({
	  blogList: blogList
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "blog.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})