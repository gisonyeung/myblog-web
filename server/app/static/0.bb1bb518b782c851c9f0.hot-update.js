webpackHotUpdate(0,{

/***/ 229:
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

	var _SearchBar = __webpack_require__(231);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(156);

	var Nav = function (_Component) {
	  _inherits(Nav, _Component);

	  function Nav(props) {
	    _classCallCheck(this, Nav);

	    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

	    _this.state = {
	      stateClass: ''
	    };
	    return _this;
	  }

	  _createClass(Nav, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // 第一次访问时，不会触发WillReceiveProps，所以需要用到DidMout
	      this.selectStyle();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {

	      this.selectStyle();
	    }

	    /*
	    *  @description 判断location 加载不同css文件 
	    */

	  }, {
	    key: 'selectStyle',
	    value: function selectStyle() {
	      // 

	      var path = location.pathname;

	      if (/^\/mylife/.test(path)) {
	        // mylife

	        document.body.className = '';
	        this.setState({
	          stateClass: 'mylife'
	        });
	      } else if (/^\/book/.test(path)) {

	        document.body.className = 'book';
	        this.setState({
	          stateClass: 'book'
	        });
	      } else if (/^\/archives/.test(path)) {

	        document.body.className = 'archives';
	        this.setState({
	          stateClass: 'archives'
	        });
	      } else if (/^\/unsubscribe/.test(path)) {

	        document.body.className = 'unsubscribe';
	        this.setState({
	          stateClass: 'unsubscribe'
	        });
	      } else {

	        document.body.className = '';
	        this.setState({
	          stateClass: ''
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'header',
	        { className: 'nav ' + this.state.stateClass },
	        _react2.default.createElement(
	          'div',
	          { className: 'inner-wrapper clearfix' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', className: 'brand', title: '\u4E8C\u70B9\u96F6\u7684\u4E2A\u4EBA\u7AD9\u70B9' },
	            'TWOPOINTHOLE'
	          ),
	          _react2.default.createElement(
	            'nav',
	            { className: 'nav-bar' },
	            _react2.default.createElement(
	              'div',
	              { className: 'nav-list' },
	              _react2.default.createElement(
	                _reactRouter.IndexLink,
	                { to: '/', activeClassName: 'active' },
	                '\u9996\u9875'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/mylife', activeClassName: 'active' },
	                '\u884C\u535A'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/book', activeClassName: 'active' },
	                '\u6211\u7684\u4E66\u5355'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/archives', activeClassName: 'active' },
	                '\u5F52\u6863'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/board', activeClassName: 'active' },
	                '\u7559\u8A00\u677F'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/about', activeClassName: 'active' },
	                '\u5173\u4E8E'
	              ),
	              _react2.default.createElement('span', { className: 'triangle' })
	            ),
	            _react2.default.createElement(_SearchBar2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return Nav;
	}(_react.Component);

	;

	exports.default = Nav;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Nav.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})