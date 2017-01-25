webpackHotUpdate(0,{

/***/ 231:
/*!*******************************************!*\
  !*** ./src/containers/SubscribeModal.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 48);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 47);
	
	var _constants = __webpack_require__(/*! ../constants */ 35);
	
	var _site = __webpack_require__(/*! ../actions/site */ 99);
	
	var _site2 = _interopRequireDefault(_site);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SubscribeModal = function (_Component) {
	  _inherits(SubscribeModal, _Component);
	
	  function SubscribeModal(props) {
	    _classCallCheck(this, SubscribeModal);
	
	    var _this = _possibleConstructorReturn(this, (SubscribeModal.__proto__ || Object.getPrototypeOf(SubscribeModal)).call(this, props));
	
	    var type = '';
	
	    _this.state = {
	      isTip: {
	        status: !!props.fetchStatus.status && props.fetchStatus !== _constants.Status.FETCHING,
	        type: props.fetchStatus.status === _constants.Status.DONE ? 'success' : 'error', // 'error' or 'success'
	        text: props.fetchStatus.msg
	      },
	      hasSub: props.fetchStatus.status === _constants.Status.DONE
	    };
	    return _this;
	  }
	
	  _createClass(SubscribeModal, [{
	    key: 'handleSub',
	    value: function handleSub() {
	
	      var _status = this.props.fetchStatus.status;
	
	      // 正在请求中 或 已经订阅完毕，则不执行订阅
	      if (_status === _constants.Status.FETCHING || _status === _constants.Status.DONE) {
	        return false;
	      }
	
	      var formData = {
	        nickname: this.refs.subNickname.value,
	        email: this.refs.subEmail.value
	      };
	
	      /* 表单验证 */
	      if (!/\S/.test(formData.nickname)) {
	
	        this.handleTip('error', '昵称不能为空');
	        this.refs.subNickname.focus();
	        return false;
	      } else if (!/\S/.test(formData.email)) {
	
	        this.handleTip('error', '邮箱不能为空');
	        this.refs.subEmail.focus();
	        return false;
	      } else if (formData.nickname.length > 20) {
	
	        this.handleTip('error', '昵称过长');
	        this.refs.subNickname.focus();
	        return false;
	      } else if (!/^\w+@\w+\.\w+(\.\w+)?$/.test(formData.email)) {
	
	        this.handleTip('error', '电子邮箱格式错误');
	        this.refs.subEmail.focus();
	        return false;
	      } else if (formData.email.length > 50) {
	
	        this.handleTip('error', '邮箱过长');
	        this.refs.subEmail.focus();
	        return false;
	      }
	
	      this.props.addSubscibe(formData);
	    }
	  }, {
	    key: 'handleTip',
	    value: function handleTip(type, text) {
	
	      this.setState({
	        isTip: {
	          status: true,
	          type: type,
	          text: text
	        },
	        hasSub: type === 'success'
	      });
	    }
	  }, {
	    key: 'clearTip',
	    value: function clearTip() {
	      this.setState({
	        isTip: {
	          status: false,
	          type: 'error',
	          text: ''
	        },
	        hasSub: false
	      });
	    }
	  }, {
	    key: 'clickPanel',
	    value: function clickPanel(e) {
	      e.stopPropagation();
	    }
	  }, {
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      // 回车
	      if (e.which == 13) {
	        this.handleSub(this);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          transitionName: 'dropdown',
	          transitionAppear: true,
	          transitionAppearTimeout: 800,
	          transitionEnterTimeout: 800,
	          transitionLeaveTimeout: 800
	        },
	        this.props.isOpen ? _react2.default.createElement(
	          'div',
	          {
	            className: 'modal modal-sub',
	            onClick: this.props.closeSubscribeModal
	          },
	          _react2.default.createElement('div', { className: 'mask' }),
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'panel',
	              onClick: this.clickPanel
	            },
	            _react2.default.createElement(
	              'h2',
	              null,
	              '\u6B22\u8FCE\u8BA2\u9605'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'm-middle' },
	              _react2.default.createElement('input', {
	                type: 'text',
	                className: 'text',
	                placeholder: '\u6635\u79F0',
	                name: 'nickname',
	                ref: 'subNickname',
	                onKeyUp: this.handleKeyUp
	              }),
	              _react2.default.createElement('input', {
	                type: 'email',
	                className: 'text',
	                placeholder: '\u5E38\u7528\u90AE\u7BB1',
	                name: 'email',
	                ref: 'subEmail',
	                onKeyUp: this.handleKeyUp
	              }),
	              this.state.hasSub ? _react2.default.createElement(
	                'span',
	                {
	                  className: 'btn success'
	                },
	                '\u2714 \u5DF2\u8BA2\u9605'
	              ) : _react2.default.createElement(
	                'button',
	                {
	                  className: 'btn',
	                  onClick: this.handleSub.bind(this)
	                },
	                '\u8BA2\xA0\xA0\u9605'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'm-bottom' },
	              this.state.isTip.status ? _react2.default.createElement(
	                'p',
	                { className: 'error-tip' },
	                _react2.default.createElement('span', { className: 'icon ' + (this.state.isTip.type == 'error' ? 'icon-error' : 'icon-ok') }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'text ' + (this.state.isTip.type == 'error' ? '' : 'success') },
	                  this.state.isTip.text
	                )
	              ) : _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '\u5F53\u6709\u65B0\u535A\u6587\u53D1\u8868\u65F6\uFF0C\u5C06\u4F1A\u4EE5\u90AE\u4EF6\u5F62\u5F0F\u901A\u77E5\u60A8\u3002'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '\u6240\u586B\u4FE1\u606F\u4E0D\u4F1A\u88AB\u516C\u5F00\u3002'
	                )
	              )
	            )
	          )
	        ) : ''
	      );
	    }
	  }]);
	
	  return SubscribeModal;
	}(_react.Component);
	
	;
	
	var mapStateToProps = function mapStateToProps(state) {
	  var branch_state = state.site.subscribeModal;
	  return branch_state;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    openSubscribeModal: function openSubscribeModal() {
	      return dispatch(_site2.default.openSubscribeModal);
	    },
	    closeSubscribeModal: function closeSubscribeModal() {
	      return dispatch(_site2.default.closeSubscribeModal);
	    },
	    addSubscibe: function addSubscibe(formData) {
	      return dispatch(_site2.default.addSubscibe(formData));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SubscribeModal);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SubscribeModal.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.122961aeb31c0299225d.hot-update.js.map