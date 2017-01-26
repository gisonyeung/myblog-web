import { Blog, Status } from "../constants";
import { combineReducers } from "redux";
import _ from 'lodash';
import getStatus from '../utils/getStatus';

const bloglist_state_initial = {
  blogs: [],
  page: {
    current: 1,
    total: 1,
    hasInit: false,
  },
  hasBlogInit: false,
  fetchStatus: getStatus(),
}

const blogList = (state = bloglist_state_initial, action) => {
  switch(action.type) {
    case Blog.REQUEST_FETCH_BLOGS:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Blog.RECEIVE_FETCH_BLOGS:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        blogs: action.payload,
        hasBlogInit: true,
      });
    case Blog.FAILED_FETCH_BLOGS:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) });
    case Blog.UPDATE_PAGE_INFO:
      return Object.assign({}, state, { page: action.payload });
    case Blog.CHANGE_PAGE:
      return Object.assign({}, state, { 
        page: {
          current: action.payload,
          total: state.page.total
        }
      });
    default:
      return state;
  }
}

const blog_state_initial = {
  blog: {},
  nearBlog: {},
  fetchStatus: getStatus(),
  is_like_success: null,
}

const currentBlog = (state = blog_state_initial, action) => {
  switch(action.type) {
    case Blog.REQUEST_FETCH_BLOG:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Blog.RECEIVE_FETCH_BLOG:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        blog: action.payload,
        is_like_success: null,
      });
    case Blog.FAILED_FETCH_BLOG:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) });
    case Blog.UPDATE_NEARBLOG:
      return Object.assign({}, state, { nearBlog: action.payload });
    case Blog.RECEIVE_ADD_LIKE:
      return Object.assign({}, state, { is_like_success: true });
    case Blog.FAILED_ADD_LIKE:
      return Object.assign({}, state, { is_like_success: false });
    default:
      return state;
  }
}

export default combineReducers({
	blogList,
  currentBlog,
});