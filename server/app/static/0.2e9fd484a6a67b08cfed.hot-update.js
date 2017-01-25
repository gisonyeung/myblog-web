webpackHotUpdate(0,{

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	/*
		actionType 出入口
	*/

	// 请求状态
	var Status = {
		FETCHING: 'FETCHING',
		DONE: 'DONE',
		FAILED: 'FAILED'
	};

	// 博客
	var Blog = {
		REQUEST_FETCH: 'REQUEST_FETCH_BLOG',
		RECEIVE_FETCH: 'RECEIVE_FETCH_BLOG',
		FAILED_FETCH: 'FAILED_FETCH_BLOG',
		UPDATE_PAGE_INFO: 'UPDATE_PAGE_INFO_BLOG',
		CHANGE_PAGE: 'CHANGE_PAGE_BLOG'
	};

	module.exports = {
		Status: Status,
		Blog: Blog
	};

	// export default {
	// 	Status,
	// 	Blog,
	// }

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})