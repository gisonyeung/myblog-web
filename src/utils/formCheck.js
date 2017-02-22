/*
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
import _ from 'lodash';

const Scene = {
  album: {
    add: 'ALBUM_ADD',
    edit: 'ALBUM_EDIT',
  },
  audio: {
    add: 'AUDIO_ADD',
    edit: 'AUDIO_EDIT',
  },
  anchor: {
    add: 'ANCHOR_ADD',
    edit: 'ANCHOR_EDIT',
  },
}

const checkHelper = {
  isEmptyStr(str) {
    return  !_.isString(str) || !/\S/.test(str) || str === 'undefined';
  },
  isBoolean(str) {
    return _.isBoolean(str);
  },
  isNumber(str) {
    return _.isNumber(str);
  },
  nickname(str) {
    if ( checkHelper.isEmptyStr(str) ) {
      return _resHandler('昵称不能为空');
    } else if ( str.length > 20 ) {
      return _resHandler('昵称过长，不能超过 20 个字符');
    } else {
      return _resHandler();
    }
  },
  email(str) {
    if ( checkHelper.isEmptyStr(str) ) {
      return _resHandler('邮箱不能为空');
    } else if ( !/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(str) ) {
      return _resHandler('电子邮箱格式错误');
    } else {
      return _resHandler();
    }
  },
  content(str) {
    if ( checkHelper.isEmptyStr(str.replace(/<blockquote>[\s\S]*<\/blockquote>/g, '')) ) {
      return _resHandler('评论内容不能为空');
    } else if ( str.length > 1500 ) {
      return _resHandler('评论内容过长');
    } else {
      return _resHandler();
    }
  },
  website(str) {
    if ( checkHelper.isEmptyStr(str) ) {
      return _resHandler();
    }

    if ( str.length > 100 ) {
      return _resHandler('个人网站过长');
    } else {
      return _resHandler();
    }
  }


};

const formCheck = function(formData, scene) {

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


function _resHandler(err = '') {
  return {
    error: err,
  }
}


export {
  Scene,
  formCheck,
  checkHelper,
}



