webpackHotUpdate(0,{

/***/ 237:
/*!*****************************************!*\
  !*** ./src/containers/ArticlePanel.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 8), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 9), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 7), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 24);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 49);
	
	var _ArticleContent = __webpack_require__(/*! ../components/blog/ArticleContent */ 234);
	
	var _ArticleContent2 = _interopRequireDefault(_ArticleContent);
	
	var _blog = __webpack_require__(/*! ../actions/blog */ 101);
	
	var _blog2 = _interopRequireDefault(_blog);
	
	var _constants = __webpack_require__(/*! ../constants */ 29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import ArticleHot from './ArticleHot';
	// import ArticleComment from './ArticleComment';
	
	
	var ArticlePanel = function (_Component) {
	  _inherits(ArticlePanel, _Component);
	
	  function ArticlePanel(props) {
	    _classCallCheck(this, ArticlePanel);
	
	    var _this = _possibleConstructorReturn(this, (ArticlePanel.__proto__ || Object.getPrototypeOf(ArticlePanel)).call(this, props));
	
	    props.getBlogDetail(props.blogId);
	    return _this;
	  }
	
	  _createClass(ArticlePanel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.blogId != this.props.blogId) {
	        nextProps.getBlogDetail(nextProps.blogId);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fetchStatus = this.props.fetchStatus;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'article-main' },
	        fetchStatus.status === _constants.Status.FETCHING ? _react2.default.createElement(_ArticleContent2.default, {
	          title: '\u6B63\u5728\u52A0\u8F7D\u6587\u7AE0\u5185\u5BB9...'
	        }) : '',
	        fetchStatus.status === _constants.Status.FAILED ? _react2.default.createElement(_ArticleContent2.default, {
	          title: '此文章不存在'
	        }) : '',
	        fetchStatus.status === _constants.Status.DONE ? _react2.default.createElement(_ArticleContent2.default, {
	          blogId: this.props.blog.blogId,
	          title: this.props.blog.title,
	          createAt: this.props.blog.time.createAt,
	          updateAt: this.props.blog.time.updateAt,
	          category: this.props.blog.category,
	          content: this.props.blog.content,
	          tags: this.props.blog.tags
	        }) : ''
	      );
	    }
	  }]);
	
	  return ArticlePanel;
	}(_react.Component);
	
	;
	
	var mapStateToProps = function mapStateToProps(state) {
	  var branch_state = state.blog.currentBlog;
	  return branch_state;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    getBlogDetail: function getBlogDetail(blogId) {
	      return dispatch(_blog2.default.getBlogDetail(blogId));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArticlePanel);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ArticlePanel.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.fd59b6e8c6dba9bfccdf.hot-update.js.map