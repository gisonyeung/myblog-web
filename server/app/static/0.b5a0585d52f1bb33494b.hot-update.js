webpackHotUpdate(0,{

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(9), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(42);

	var _Summation = __webpack_require__(232);

	var _Summation2 = _interopRequireDefault(_Summation);

	var _SubscribeModal = __webpack_require__(231);

	var _SubscribeModal2 = _interopRequireDefault(_SubscribeModal);

	var _reactAddonsCssTransitionGroup = __webpack_require__(47);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _reactRedux = __webpack_require__(154);

	var _site = __webpack_require__(98);

	var _site2 = _interopRequireDefault(_site);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(163);

	var SelfInfoBar = function (_Component) {
	  _inherits(SelfInfoBar, _Component);

	  function SelfInfoBar(props) {
	    _classCallCheck(this, SelfInfoBar);

	    return _possibleConstructorReturn(this, (SelfInfoBar.__proto__ || Object.getPrototypeOf(SelfInfoBar)).call(this, props));
	  }

	  _createClass(SelfInfoBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'self-sidebar shadow-1' },
	        _react2.default.createElement('img', { src: '/static/img/myhead.jpg', alt: '\u6211\u7684\u5934\u50CF', className: 'myhead' }),
	        _react2.default.createElement(
	          'h2',
	          { className: 'nickname' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/about', title: '\u5173\u4E8E\u6211' },
	            '\u6768\u5B50\u806A'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'introduction' },
	          '\u5E7F\u4E1C\u5DE5\u4E1A\u5927\u5B66\u8F6F\u4EF6\u5DE5\u7A0B\u5728\u8BFB\u5B66\u751F\u300215\u5E74\u5F00\u59CB\u5B66\u4E60\u524D\u7AEF\uFF0C\u5BF9\u67B6\u6784\u548C\u5F00\u53D1\u90FD\u5F88\u611F\u5174\u8DA3\u3002',
	          _react2.default.createElement('br', null),
	          '\u5DE5\u4F5C\u65F6\u6709\u5F3A\u8FEB\u75C7\u3002'
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'github' },
	          _react2.default.createElement('span', { className: 'icon icon-github' }),
	          _react2.default.createElement(
	            'a',
	            { href: 'https://github.com/gisonyeung', target: '_blank', title: '\u6211\u7684Github' },
	            'https://github.com/gisonyeung'
	          )
	        ),
	        _react2.default.createElement(
	          'a',
	          {
	            href: 'javascript:;',
	            className: 'bookme',
	            onClick: this.showSubModal
	          },
	          _react2.default.createElement('span', { className: 'icon icon-mail' }),
	          _react2.default.createElement(
	            'em',
	            null,
	            '\u8BA2\u9605\u6211'
	          )
	        ),
	        _react2.default.createElement(_Summation2.default, null),
	        _react2.default.createElement(
	          'ul',
	          { className: 'link' },
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement('span', { className: 'icon icon-disc' }),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/about', className: 'active' },
	              '\u6211\u7684\u7B80\u4ECB'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement('span', { className: 'icon icon-disc' }),
	            _react2.default.createElement(
	              'a',
	              { href: '/other/html/algorithms.html', target: '_blank' },
	              '\u7B97\u6CD5\u5206\u6790'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement('span', { className: 'icon icon-disc' }),
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', className: 'has-panel' },
	              '\u516C\u4F17\u53F7'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'panel' },
	              _react2.default.createElement('img', { src: '/static/img/qrcode.jpg' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          {
	            transitionName: 'dropdown',
	            transitionAppear: true,
	            transitionAppearTimeout: 800,
	            transitionEnterTimeout: 800,
	            transitionLeaveTimeout: 800
	          },
	          _react2.default.createElement(_SubscribeModal2.default, null)
	        )
	      );
	    }
	  }]);

	  return SelfInfoBar;
	}(_react.Component);

	;

	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    openSubscribeModal: function openSubscribeModal() {
	      return dispatch(_site2.default.openSubscribeModal);
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelfInfoBar);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(11); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SelfInfoBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }

})