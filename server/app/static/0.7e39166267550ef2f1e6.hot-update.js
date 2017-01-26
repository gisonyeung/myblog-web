webpackHotUpdate(0,{

/***/ 395:
/*!***************************************!*\
  !*** ./src/containers/ArticleHot.jsx ***!
  \***************************************/
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
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 43);
	
	var _localStorage = __webpack_require__(/*! ../utils/localStorage */ 396);
	
	var _localStorage2 = _interopRequireDefault(_localStorage);
	
	var _blog = __webpack_require__(/*! ../actions/blog */ 101);
	
	var _blog2 = _interopRequireDefault(_blog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ArticleHot = function (_Component) {
	  _inherits(ArticleHot, _Component);
	
	  function ArticleHot(props) {
	    _classCallCheck(this, ArticleHot);
	
	    // 获取localStorage中点赞列表是否有此博文
	    var _this = _possibleConstructorReturn(this, (ArticleHot.__proto__ || Object.getPrototypeOf(ArticleHot)).call(this, props));
	
	    var BlogLike = _localStorage2.default.get('BlogLike');
	    var isLike = false;
	
	    // 存在此键，则isLike设为true
	    if (BlogLike[props.blogId]) {
	      isLike = true;
	    }
	
	    _this.state = {
	      isLike: isLike,
	      likeNum: props.numbers.like
	    };
	
	    return _this;
	  }
	
	  _createClass(ArticleHot, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // 点赞成功，存进localStorage
	      if (nextProps.is_like_success === true) {
	        var BlogLike = _localStorage2.default.get('BlogLike');
	        BlogLike[this.props.blogId] = 1;
	        _localStorage2.default.set('BlogLike', BlogLike);
	      } else if (nextProps.is_like_success === false) {
	        // 点赞失败，转换回原来状态
	        this.setState({
	          isLike: false,
	          likeNum: this.state.likeNum - 1
	        });
	      }
	    }
	  }, {
	    key: 'addLike',
	    value: function addLike() {
	      // 点赞开关
	      if (!this.state.isLike) {
	
	        // 转换状态
	        this.setState({
	          isLike: true,
	          likeNum: this.state.likeNum + 1
	        });
	
	        this.props.addLike(this.props.blogId);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'atc-hot' },
	        _react2.default.createElement(
	          'div',
	          { className: 'widget ' + (this.state.isLike ? 'active' : '') },
	          _react2.default.createElement('span', { className: 'icon icon-like', onClick: this.addLike.bind(this) }),
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u70B9\u8D5E',
	            this.state.likeNum ? '(' + this.state.likeNum + ')' : ''
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'widget' },
	          _react2.default.createElement('span', { className: 'icon icon-share' }),
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u5206\u4EAB'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ArticleHot;
	}(_react.Component);
	
	;
	
	var mapStateToProps = function mapStateToProps(state) {
	  var branch_state = state.blog.currentBlog;
	  return branch_state;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    addLike: function addLike(blogId) {
	      return dispatch(_blog2.default.addLike(blogId));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArticleHot);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ArticleHot.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.7e39166267550ef2f1e6.hot-update.js.map