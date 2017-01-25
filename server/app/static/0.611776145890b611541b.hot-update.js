webpackHotUpdate(0,{

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(157);

	/*
	  props: {
	    onChange(nextPage),
	    current,
	    total,
	  }
	*/

	var Pagination = function (_Component) {
	  _inherits(Pagination, _Component);

	  function Pagination(props) {
	    _classCallCheck(this, Pagination);

	    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));
	  }

	  _createClass(Pagination, [{
	    key: 'onChange',
	    value: function onChange(nextPage, e) {

	      if (this.props.preventDefault) {
	        e.preventDefault();
	      }

	      if (this.props.current === nextPage) {
	        return false;
	      }

	      this.props.onChange(nextPage);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var prevPage = parseInt(this.props.current, 10) - 1;
	      var nextPage = parseInt(this.props.current, 10) + 1;

	      var items = [];
	      for (var i = 2; i < this.props.total; i++) {
	        if (i < prevPage || i > nextPage) {
	          continue;
	        }
	        var item = '';
	        item = _react2.default.createElement(
	          'a',
	          {
	            key: i,
	            className: 'page-number ' + (i === this.props.current ? 'active' : ''),
	            onClick: this.onChange.bind(this, i),
	            href: this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g, i) : 'javascript:;'
	          },
	          i
	        );
	        items.push(item);
	      }

	      return _react2.default.createElement(
	        'nav',
	        { className: 'pagination' },
	        this.props.current == 1 ? '' : _react2.default.createElement(
	          'a',
	          _defineProperty({
	            href: 'javascript:;',
	            className: 'pre-page',
	            onClick: this.onChange.bind(this, this.props.current - 1)
	          }, 'href', this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g, this.props.current - 1) : 'javascript:;'),
	          '\xAB'
	        ),
	        _react2.default.createElement(
	          'a',
	          _defineProperty({
	            href: 'javascript:;',
	            className: 'page-number ' + (1 === this.props.current ? 'active' : ''),
	            onClick: this.onChange.bind(this, 1)
	          }, 'href', this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g, 1) : 'javascript:;'),
	          '1'
	        ),
	        prevPage <= 2 ? '' : _react2.default.createElement(
	          'span',
	          { className: 'space' },
	          '\u2026'
	        ),
	        items,
	        nextPage >= this.props.total - 1 ? '' : _react2.default.createElement(
	          'span',
	          { className: 'space' },
	          '\u2026'
	        ),
	        this.props.total == 1 ? '' : _react2.default.createElement(
	          'a',
	          _defineProperty({
	            href: 'javascript:;',
	            className: 'page-number ' + (this.props.total === this.props.current ? 'active' : ''),
	            onClick: this.onChange.bind(this, this.props.total)
	          }, 'href', this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g, this.props.total) : 'javascript:;'),
	          this.props.total
	        ),
	        this.props.current >= this.props.total ? '' : _react2.default.createElement(
	          'a',
	          _defineProperty({
	            href: 'javascript:;',
	            className: 'next-page',
	            onClick: this.onChange.bind(this, this.props.current + 1)
	          }, 'href', this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g, this.props.current + 1) : 'javascript:;'),
	          '\xBB'
	        )
	      );
	    }
	  }]);

	  return Pagination;
	}(_react.Component);

	;

	exports.default = Pagination;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Pagination.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})