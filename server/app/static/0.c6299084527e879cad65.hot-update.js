webpackHotUpdate(0,{

/***/ 65:
/*!*****************************!*\
  !*** ./src/actions/site.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fetch = __webpack_require__(/*! ../utils/fetch */ 102);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _constants = __webpack_require__(/*! ../constants */ 35);
	
	var _Api = __webpack_require__(/*! ../constants/Api */ 101);
	
	var _Api2 = _interopRequireDefault(_Api);
	
	var _lodash = __webpack_require__(/*! lodash */ 57);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _network = __webpack_require__(/*! ./network */ 100);
	
	var _network2 = _interopRequireDefault(_network);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 获取站点数据
	var fetchSiteNumbers = function fetchSiteNumbers(dispatch) {
	  _fetch2.default.POST(_Api2.default.getSiteNum).then(function (data) {
	    if (data.result !== 'success') {
	      console.log('请求站点数据失败: ', data.reason);
	      return false;
	    }
	    dispatch({
	      type: _constants.Site.RECEIVE_FETCH_SUMMATION,
	      payload: {
	        blog: data.numbers[0],
	        comment: data.numbers[1],
	        subscribe: data.numbers[2]
	      }
	    });
	  }).catch(function (err) {
	    console.log('请求站点数据失败: ', err);
	  });
	};
	
	// 开关订阅框
	var openSubscribeModal = {
	  type: _constants.Site.OPEN_SUBSCRIBE
	};
	var closeSubscribeModal = {
	  type: _constants.Site.CLOSE_SUBSCRIBE
	};
	
	var addSubscribe = function addSubscribe(formData) {
	  return function (dispatch) {
	
	    dispatch(_network2.default.requestAction(_constants.Site.REQUEST_SUBSCRIBE));
	    _fetch2.default.POST(_Api2.default.addSubscribe, formData).then(function (data) {
	      if (data.result !== 'success') {
	        dispatch(_network2.default.failAction(_constants.Site.FAILED_SUBSCRIBE, data.reason));
	        return false;
	      }
	      dispatch(_network2.default.receiveAction(_constants.Site.RECEIVE_SUBSCRIBE, data.reason));
	    }).catch(function (err) {
	      dispatch(_network2.default.failAction(_constants.Site.FAILED_SUBSCRIBE, err));
	    });
	  };
	};
	
	exports.default = {
	  fetchSiteNumbers: fetchSiteNumbers,
	  openSubscribeModal: openSubscribeModal,
	  closeSubscribeModal: closeSubscribeModal,
	  addSubscribe: addSubscribe
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "site.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.c6299084527e879cad65.hot-update.js.map