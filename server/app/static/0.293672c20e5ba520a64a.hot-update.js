webpackHotUpdate(0,{

/***/ 240:
/*!******************************!*\
  !*** ./src/reducers/site.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(/*! ../constants */ 35);
	
	var _redux = __webpack_require__(/*! redux */ 46);
	
	var _lodash = __webpack_require__(/*! lodash */ 57);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _getStatus = __webpack_require__(/*! ../utils/getStatus */ 103);
	
	var _getStatus2 = _interopRequireDefault(_getStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var summation_state_initial = {
	  numbers: {
	    blog: 0,
	    comment: 0,
	    subscribe: 0
	  },
	  hasInit: false
	};
	
	var summation = function summation() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : summation_state_initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _constants.Site.RECEIVE_FETCH_SUMMATION:
	      return Object.assign({}, state, {
	        numbers: action.payload,
	        hasInit: true
	      });
	    default:
	      return state;
	  }
	};
	
	var subscribeModal_state_initial = {
	  isOpen: false,
	  fetchStatus: (0, _getStatus2.default)()
	};
	
	var subscribeModal = function subscribeModal() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : subscribeModal_state_initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _constants.Site.OPEN_SUBSCRIBE:
	      return Object.assign({}, subscribeModal_state_initial, { isOpen: true });
	    case _constants.Site.CLOSE_SUBSCRIBE:
	      return Object.assign({}, state, { isOpen: false });
	    case _constants.Site.REQUEST_SUBSCRIBE:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FETCHING) });
	    case _constants.Site.RECEIVE_SUBSCRIBE:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.DONE, action.payload) });
	    case _constants.Site.FAILED_SUBSCRIBE:
	      return Object.assign({}, state, { fetchStatus: (0, _getStatus2.default)(_constants.Status.FAILED, action.payload) });
	    default:
	      return state;
	  }
	};
	
	exports.default = (0, _redux.combineReducers)({
	  summation: summation,
	  subscribeModal: subscribeModal
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "site.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.293672c20e5ba520a64a.hot-update.js.map