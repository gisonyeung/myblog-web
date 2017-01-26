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
  dispatch(network.requestAction(Blog.REQUEST_FETCH_BLOGS));
  fetch.POST(Api.getBlogsByPage, {
    page: current
  })
  .then(data => {
  	if ( data.result !== 'success' ) {
  	  dispatch(network.failAction(Blog.FAILED_FETCH_BLOGS, data.reason));
  	  return false;
  	}
  	dispatch(network.receiveAction(Blog.RECEIVE_FETCH_BLOGS, data.blogs));
  })
  .catch(err => {
	 dispatch(network.failAction(Blog.FAILED_FETCH_BLOGS, err));
  });

}


// 请求博文详情
const getBlogDetail = (blogId) => (dispatch) => {

  dispatch(network.requestAction(Blog.REQUEST_FETCH_BLOG));
  fetch.POST(Api.getBlogDetail, {
    blogId: blogId
  })
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Blog.FAILED_FETCH_BLOG, data.reason));
      return false;
    }
    dispatch(network.receiveAction(Blog.RECEIVE_FETCH_BLOG, data.blog));
  })
  .catch(err => {
    dispatch(network.failAction(Blog.FAILED_FETCH_BLOG, err));
  });

}


// 请求博文详情
const getNearBlog = (blogId) => (dispatch) => {

  fetch.POST(Api.getNearBlog, {
    blogId: blogId
  })
  .then(data => {
    if ( data.result !== 'success' ) {
      console.log('请求相邻博文失败，' + data.reason);
      return false;
    }
    dispatch(network.receiveAction(Blog.UPDATE_NEARBLOG, data.nearBlog));
  })
  .catch(err => {
    console.log('请求相邻博文失败，' + err);
  });

}

// 点赞增加
const addLike = (blogId) => (dispatch) => {

  fetch.POST(Api.addBlogLike, {
    blogId: blogId
  })
  .then(data => {
    if ( data.status !== 'success' ) { // 这里是坑，应该返回 result
      dispatch({ type: Blog.FAILED_ADD_LIKE });
      console.log('点赞博文失败，' + data.reason);
      return false;
    }
    dispatch({ type: Blog.RECEIVE_ADD_LIKE });
  })
  .catch(err => {
    dispatch({ type: Blog.FAILED_ADD_LIKE });
    console.log('点赞博文失败，' + err);
  });

}


export default {
  initPageNum,
  fetchPageBlogs,
  getBlogDetail,
  getNearBlog,
  addLike,
}