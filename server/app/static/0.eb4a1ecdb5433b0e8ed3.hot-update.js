webpackHotUpdate(0,{

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _fetch = __webpack_require__(235);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _constants = __webpack_require__(60);

	var _Api = __webpack_require__(223);

	var _Api2 = _interopRequireDefault(_Api);

	var _lodash = __webpack_require__(146);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _network = __webpack_require__(219);

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
	  initPageNum: initPageNum,
	  fetchPageBlogs: fetchPageBlogs
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "blog.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

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

	    if (!props.page.hasInit) {
	      props.initPageNum(page);
	    }
	    props.fetchPageBlogs(page);

	    return _this;
	  }

	  _createClass(BlogListPanel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.query.page !== nextProps.query.page) {
	        nextProps.fetchPageBlogs(nextProps.query.page);
	      }
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
	            fetchStatus.status === _constants.Status.FETCHING && !blogs.length ? _react2.default.createElement(
	              'p',
	              { className: 'no-blog' },
	              '\u6B63\u5728\u83B7\u53D6\u535A\u6587\u4FE1\u606F...'
	            ) : '',
	            fetchStatus.status === _constants.Status.DONE && !blogs.length ? _react2.default.createElement(
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
	      // this.props.fetchPageBlogs(nextPage);
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
	    initPageNum: function initPageNum(current) {
	      return dispatch(_blog2.default.initPageNum(current));
	    },
	    fetchPageBlogs: function fetchPageBlogs(current) {
	      return dispatch(_blog2.default.fetchPageBlogs(current));
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BlogListPanel);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BlogListPanel.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ 225:
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

	var _reactAddonsCssTransitionGroup = __webpack_require__(96);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Summation from './Summation';
	// import SubModal from './SubModal';


	__webpack_require__(381);

	var SelfInfoBar = function (_Component) {
	  _inherits(SelfInfoBar, _Component);

	  function SelfInfoBar(props) {
	    _classCallCheck(this, SelfInfoBar);

	    var _this = _possibleConstructorReturn(this, (SelfInfoBar.__proto__ || Object.getPrototypeOf(SelfInfoBar)).call(this, props));

	    _this.state = {
	      isSubModal: false
	    };
	    return _this;
	  }

	  _createClass(SelfInfoBar, [{
	    key: 'showSubModal',
	    value: function showSubModal() {
	      this.setState({
	        isSubModal: true
	      });
	    }
	  }, {
	    key: 'hideModal',
	    value: function hideModal() {
	      this.setState({
	        isSubModal: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'self-sidebar shadow-1' });
	    }
	  }]);

	  return SelfInfoBar;
	}(_react.Component);

	;

	exports.default = SelfInfoBar;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SelfInfoBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ 231:
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

	var _getStatus = __webpack_require__(236);

	var _getStatus2 = _interopRequireDefault(_getStatus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var blog_state_initial = {
	  blogs: [],
	  page: {
	    current: 1,
	    total: 1,
	    hasInit: false
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

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(41)();
	// imports


	// module
	exports.push([module.id, ".self-sidebar {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n\n.self-sidebar {\n  margin-bottom: 32px;\n  float: right;\n  width: 315px;\n  padding: 0 32px 70px;\n  text-align: center;\n  border-radius: 2px;\n  background: #fff; }\n  .self-sidebar a {\n    transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -webkit-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out; }\n    .self-sidebar a:hover {\n      color: #000; }\n  .self-sidebar .myhead {\n    height: 100px;\n    width: 100px;\n    border-radius: 100%;\n    margin-top: 26px; }\n  .self-sidebar .nickname {\n    font-size: 16px;\n    color: #444;\n    font-weight: normal;\n    margin-top: 14px; }\n  .self-sidebar .introduction {\n    font-size: 13px;\n    line-height: 19px;\n    color: #ddd;\n    margin: 22px 0 32px; }\n  .self-sidebar .github {\n    font-size: 12px;\n    color: #444; }\n    .self-sidebar .github .icon-github {\n      margin-right: 5px; }\n  .self-sidebar .bookme {\n    display: inline-block;\n    margin-top: 32px;\n    width: 170px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    font-size: 14px;\n    color: #ddd;\n    background-color: #373737;\n    border-radius: 30px; }\n    .self-sidebar .bookme:hover {\n      color: #ddd; }\n    .self-sidebar .bookme .icon-mail {\n      margin-right: 10px; }\n    .self-sidebar .bookme em {\n      font-style: normal; }\n  .self-sidebar .summation {\n    margin-top: 58px;\n    padding: 20px 0;\n    border: 1px solid #ccc;\n    border-width: 1px 0; }\n    .self-sidebar .summation .data {\n      float: left;\n      width: 33.3333%; }\n    .self-sidebar .summation .value {\n      font-size: 23px;\n      color: #373737; }\n    .self-sidebar .summation .key {\n      margin-top: 2px;\n      font-size: 12px;\n      color: #ddd; }\n  .self-sidebar ul.link {\n    margin-top: 30px;\n    color: #5d5d5d;\n    font-size: 14px; }\n    .self-sidebar ul.link .icon-disc {\n      margin: 0 4px 3px 0; }\n    .self-sidebar ul.link li {\n      position: relative;\n      display: inline-block;\n      margin-right: 24px; }\n      .self-sidebar ul.link li:last-child {\n        margin-right: 0; }\n      .self-sidebar ul.link li a {\n        transition: all 0.2s ease-out;\n        -moz-transition: all 0.2s ease-out;\n        -webkit-transition: all 0.2s ease-out;\n        -o-transition: all 0.2s ease-out;\n        border-bottom: 1px solid transparent; }\n        .self-sidebar ul.link li a:hover, .self-sidebar ul.link li a.active {\n          border-color: #5d5d5d; }\n    .self-sidebar ul.link .panel {\n      visibility: hidden;\n      opacity: 0;\n      position: absolute;\n      bottom: 50px;\n      left: -71.5px;\n      padding: 3px;\n      background-color: #fff;\n      border-radius: 3px;\n      box-shadow: 0 0 6px rgba(204, 204, 204, 0.7);\n      transition: all 0.2s ease-out;\n      -moz-transition: all 0.2s ease-out;\n      -webkit-transition: all 0.2s ease-out;\n      -o-transition: all 0.2s ease-out; }\n      .self-sidebar ul.link .panel img {\n        width: 180px;\n        height: 180px; }\n    .self-sidebar ul.link .has-panel:hover + .panel, .self-sidebar ul.link .panel:hover {\n      visibility: visible;\n      bottom: 35px;\n      opacity: 1; }\n", ""]);

	// exports


/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(380);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(40)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(380, function() {
				var newContent = __webpack_require__(380);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

})