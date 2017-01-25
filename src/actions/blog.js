import fetch from '../utils/fetch';
import { Blog } from "../constants";
import Api from "../constants/Api";
import _ from "lodash";

import network from './network';

function _changePageActionCreator(nextPage) {
  return {
    type: Blog.CHANGE_PAGE,
    payload: nextPage
  };
}


// 初始化页码信息，请求总页数
const initPageNum = (current) => (dispatch) => {
  current = parseInt(current, 10);

  dispatch(_changePageActionCreator(current));
  fetch.POST(Api.getBlogTotalPage)
  .then(data => {
  	if ( data.result !== 'success' ) {
  	  console.log('请求总页码失败: ', data.reason)
  	  return false;
  	}
  	dispatch({
  	  type: Blog.UPDATE_PAGE_INFO,
  	  payload: {
  	  	current: current,
  	  	total: data.page,
        hasInit: true,
  	  }
  	});
  })
  .catch(err => {
  	console.log('请求总页码失败: ', err)
  });
}

// 修改页码，并请求当前页码下的博文
const fetchPageBlogs = (current) => (dispatch) => {
  current = parseInt(current, 10);

  dispatch(_changePageActionCreator(current));
  dispatch(network.requestAction(Blog.REQUEST_FETCH));
  fetch.POST(Api.fetchBlogByPage, {
    page: current
  })
  .then(data => {
  	if ( data.result !== 'success' ) {
  	  dispatch(network.failAction(Blog.FAILED_FETCH, data.reason));
  	  return false;
  	}
  	dispatch(network.receiveAction(Blog.RECEIVE_FETCH, data.blogs));
  })
  .catch(err => {
	dispatch(network.failAction(Blog.FAILED_FETCH, err));
  });

}

export default {
  initPageNum,
  fetchPageBlogs,
}