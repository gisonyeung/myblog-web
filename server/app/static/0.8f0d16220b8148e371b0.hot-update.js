webpackHotUpdate(0,{

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(39);

	var _reactRedux = __webpack_require__(149);

	var _BlogItem = __webpack_require__(221);

	var _BlogItem2 = _interopRequireDefault(_BlogItem);

	var _Pagination = __webpack_require__(222);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	var _blog = __webpack_require__(218);

	var _blog2 = _interopRequireDefault(_blog);

	var _constants = __webpack_require__(60);

	var _reactAddonsCssTransitionGroup = __webpack_require__(96);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(154);

	var BlogListPanel = function (_Component) {
	  _inherits(BlogListPanel, _Component);

	  function BlogListPanel(props) {
	    _classCallCheck(this, BlogListPanel);

	    var _this = _possibleConstructorReturn(this, (BlogListPanel.__proto__ || Object.getPrototypeOf(BlogListPanel)).call(this, props));

	    var page = parseInt(props.query.page, 10);

	    console.log(page);

	    props.initPage(page);
	    props.changePage(page);

	    return _this;
	  }

	  _createClass(BlogListPanel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // nextProps.changePage(nextProps.query.page);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          fetchStatus = _props.fetchStatus,
	          blogs = _props.blogs,
	          page = _props.page;


	      return _react2.default.createElement(
	        'div',
	        { className: 'home-blogs' },
	        _react2.default.createElement(
	          'section',
	          { className: 'blog-list' },
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              transitionName: 'blogitem',
	              transitionEnterTimeout: 400,
	              transitionLeaveTimeout: 300
	            },
	            fetchStatus.status === _constants.Status.FETCHING ? _react2.default.createElement(
	              'p',
	              { className: 'no-blog' },
	              '\u6B63\u5728\u8BF7\u6C42\u4E2D'
	            ) : '',
	            fetchStatus.status === _constants.Status.DONE && !this.props.blogs.length ? _react2.default.createElement(
	              'p',
	              { className: 'no-blog' },
	              '\u6682\u65E0\u535A\u6587'
	            ) : '',
	            fetchStatus.status === _constants.Status.FAILED ? _react2.default.createElement(
	              'p',
	              { className: 'no-blog' },
	              '\u8BF7\u6C42\u535A\u6587\u5931\u8D25\uFF0C',
	              fetchStatus.msg
	            ) : '',
	            fetchStatus.status === _constants.Status.DONE && blogs.map(function (blog, index) {
	              return _react2.default.createElement(_BlogItem2.default, {
	                key: blog._id,
	                id: blog.blogId,
	                data: blog,
	                title: blog.title,
	                createAt: blog.time.createAt,
	                updateAt: blog.time.updateAt,
	                category: blog.category,
	                summary: blog.summary,
	                tags: blog.tags,
	                numbers: blog.numbers
	              });
	            })
	          )
	        ),
	        fetchStatus.status !== _constants.Status.FAILED ? _react2.default.createElement(_Pagination2.default, {
	          total: page.total,
	          current: page.current,
	          onChange: this.onPageChange.bind(this)
	        }) : ''
	      );
	    }
	  }, {
	    key: 'onPageChange',
	    value: function onPageChange(nextPage) {
	      _reactRouter.browserHistory.push('/?page=' + nextPage);
	      this.props.changePage(nextPage);
	    }
	  }]);

	  return BlogListPanel;
	}(_react.Component);

	;

	var mapStateToProps = function mapStateToProps(state) {

	  var branch_state = state.blog.blogList;

	  return branch_state;
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    initPage: function initPage(current) {
	      return dispatch(_blog2.default.initPage(current));
	    },
	    changePage: function changePage(current) {
	      return dispatch(_blog2.default.changePage(current));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BlogListPanel);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BlogListPanel.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})