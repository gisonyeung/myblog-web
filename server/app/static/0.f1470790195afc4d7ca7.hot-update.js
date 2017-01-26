webpackHotUpdate(0,{

/***/ 386:
/*!********************************!*\
  !*** ./src/utils/formCheck.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/.0.4.7@react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkHelper = exports.formCheck = exports.Scene = undefined;
	
	var _lodash = __webpack_require__(/*! lodash */ 57);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Scene = {
	  album: {
	    add: 'ALBUM_ADD',
	    edit: 'ALBUM_EDIT'
	  },
	  audio: {
	    add: 'AUDIO_ADD',
	    edit: 'AUDIO_EDIT'
	  },
	  anchor: {
	    add: 'ANCHOR_ADD',
	    edit: 'ANCHOR_EDIT'
	  }
	}; /*
	    * 页面上所有的表单校验规则都封装到这个模块里，按场景校验。
	    *
	    *
	    * 调用方法：
	    * import { formCheck, Scene } from './formCheck.js'
	    * const check_result = formCheck(formData, scene);
	    * if ( check_result.error ) {
	    *   Toast.error(check_result.error);
	    * } else {
	    *   // do some action...
	    * }
	    * 
	    * let check_result = '';
	    *  if ( check_result = checkHelper.nickname(formData.nickname).error ) {
	    *    // todo ...
	    *  } else {
	    *    // todo ...
	    *  }
	    *
	    *
	    * @param formData { Object } 表单对象
	    * @param secen { String } 校验场景，引用 Scene
	    * @return { Object }
	    *   {
	    *     error: '' || errorMsg
	    *   }
	    */
	
	
	var checkHelper = {
	  isEmptyStr: function isEmptyStr(str) {
	    return !_lodash2.default.isString(str) || !/\S/.test(str) || str === 'undefined';
	  },
	  isBoolean: function isBoolean(str) {
	    return _lodash2.default.isBoolean(str);
	  },
	  isNumber: function isNumber(str) {
	    return _lodash2.default.isNumber(str);
	  },
	  nickname: function nickname(str) {
	    if (checkHelper.isEmptyStr(str)) {
	      return _resHandler('昵称不能为空');
	    } else if (str.length > 20) {
	      return _resHandler('昵称过长，不能超过 20 个字符');
	    } else {
	      return _resHandler();
	    }
	  },
	  email: function email(str) {
	    if (checkHelper.isEmptyStr(str)) {
	      return _resHandler('邮箱不能为空');
	    } else if (!/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(str)) {
	      return _resHandler('电子邮箱格式错误');
	    } else {
	      return _resHandler();
	    }
	  }
	};
	
	var formCheck = function formCheck(formData, scene) {
	
	  // switch (scene) {
	  //   case Scene.album.add:
	  //     return _albumAdd(formData);
	  //   case Scene.album.edit:
	  //     return _albumEdit(formData);
	  //   case Scene.audio.add:
	  //     return _audioAdd(formData);
	  //   case Scene.audio.edit:
	  //     return _audioEdit(formData);
	  //   case Scene.anchor.add:
	  //     return _anchorAdd(formData);
	  //   case Scene.anchor.edit:
	  //     return _anchorEdit(formData);
	  // }
	
	};
	
	function _resHandler() {
	  var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  return {
	    error: err
	  };
	}
	
	exports.Scene = Scene;
	exports.formCheck = formCheck;
	exports.checkHelper = checkHelper;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/.1.3.1@react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "formCheck.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/.1.14.0@webpack/buildin/module.js */ 6)(module)))

/***/ }

})
//# sourceMappingURL=0.f1470790195afc4d7ca7.hot-update.js.map