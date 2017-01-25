webpackHotUpdate(0,{

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(9), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _site = __webpack_require__(98);

	var _site2 = _interopRequireDefault(_site);

	var _reactRedux = __webpack_require__(154);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Summation = function (_Component) {
	  _inherits(Summation, _Component);

	  function Summation(props) {
	    _classCallCheck(this, Summation);

	    var _this = _possibleConstructorReturn(this, (Summation.__proto__ || Object.getPrototypeOf(Summation)).call(this, props));

	    if (!props.hasInit) {
	      props.fetchSiteNumbers();
	    }

	    return _this;
	  }

	  _createClass(Summation, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'summation clearfix' },
	        _react2.default.createElement(
	          'div',
	          { className: 'data' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'value' },
	            this.props.numbers.blog
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'key' },
	            '\u535A\u5BA2'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'data' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'value' },
	            this.props.numbers.comment
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'key' },
	            '\u7559\u8A00'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'data' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'value' },
	            this.props.numbers.subscribe
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'key' },
	            '\u8BA2\u9605\u6570'
	          )
	        )
	      );
	    }
	  }]);

	  return Summation;
	}(_react.Component);

	;

	var mapStateToProps = function mapStateToProps(state) {
	  var branch_state = state.site.summation;
	  return branch_state;
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    fetchSiteNumbers: function fetchSiteNumbers() {
	      return dispatch(_site2.default.fetchSiteNumbers);
	    }
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Summation);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(11); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Summation.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }

})