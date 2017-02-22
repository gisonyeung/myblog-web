/*
个人网站不为空时，检测有无https?://前缀，无则添加http://
*/
exports.website = (str) => {
  if ( /\S/.test(str) ) {
    return str.replace(/^(https?:\/\/)?.*/, function(match, capture) {
      // 有捕获组，已有前缀
      if ( capture ) {
        return match;
      } else {
        return 'http://' + match;
      }
    });
  } else {
  	return '';
  }
}