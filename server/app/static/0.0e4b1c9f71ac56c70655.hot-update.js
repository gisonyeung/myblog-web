webpackHotUpdate(0,{

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var HOST = 'http://localhost:8000';

	var Api = {
		blogCount: '/blogCount',
		fetchBlogByPage: HOST + '/homeBlog',
		getBlogTotalPage: HOST + '/homePage',
		blogDetail: '/blogDetail',
		nearBlog: '/nearBlog',
		blogComment: '/blogComment',
		addBlogComment: '/addBlogComment',
		addBlogLike: '/addBlogLike',
		walkingBlog: '/walkingBlog',
		walkingBlogMore: '/walkingBlogMore',
		walkingBlogDetail: '/walkingBlogDetail',
		walkingBlogComment: '/walkingBlogComment',
		addWalkingBlogComment: '/addWalkingBlogComment',
		nearWalkingBlog: '/nearWalkingBlog',
		bookList: '/bookList',
		bookLike: '/bookLike',
		archiveCondition: '/archiveCondition',
		archiveAll: '/archiveAll',
		categories: '/categories',
		tags: '/tags',
		blogCountForYear: '/blogCountForYear',
		siteYear: '/siteYear',
		boardComment: '/boardComment',
		boardCommentMore: '/boardCommentMore',
		addBoardComment: '/addBoardComment',
		subscribe: '/subscribe',
		siteNum: '/siteNum',
		unsubconfirm: '/unsubconfirm',
		cancelSub: '/cancelSub',
		addSiteView: '/addSiteView'

	};

	exports.default = Api;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Api.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})