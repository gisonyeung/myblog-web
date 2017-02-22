/*
 * 使页面平滑滚动到指定锚点、顶部、任意位置
 */
var distance = 0;
var start;
var delay = 0;
var init_pos = 0;
var final_pos = 0;

window.requestAnimationFrame = (function() {  
  return  window.requestAnimationFrame ||   
    window.webkitRequestAnimationFrame ||   
    window.mozRequestAnimationFrame    ||   
    window.oRequestAnimationFrame      ||   
    window.msRequestAnimationFrame     ||   
    function(callback){  
      window.setTimeout(callback, 1000 / 60);  
    }; 
})();  

const toPosition = function(_final_pos, _delay = 200) {
  init_pos = window.scrollY;
  delay = _delay;
  final_pos = _final_pos;
  distance = Math.floor(_final_pos - init_pos);
  requestAnimationFrame(_step);
}

const toAnchor = function(elem_id, delay) {
  let $elem = document.getElementById(elem_id);
  final_pos = _getElementTop($elem);
  toPosition(final_pos, delay);
};

const toTop = function(delay) {
  toPosition(0, delay);
}

function _getElementTop(element){
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  while (current !== null){
    actualTop += current.offsetTop;
    current = current.offsetParent;/*用于循环*/
  }
  return actualTop;
}

function _step(timestamp) {
  if (start == null) start = timestamp;
  var progress = timestamp - start;
  var tmp_distance = Math.floor(progress / delay * distance);
  window.scrollTo(0, init_pos + tmp_distance);
  if (progress <= delay) {
    requestAnimationFrame(_step);
  } else {
    window.scrollTo(0, final_pos);
    start = null;
  }
}

export default {
  toPosition,
  toAnchor,
  toTop,
}