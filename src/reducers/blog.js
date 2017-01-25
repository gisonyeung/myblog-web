import { Blog, Status } from "../constants";
import { combineReducers } from "redux";
import _ from 'lodash';
import getStatus from '../utils/getStatus';

const blog_state_initial = {
  blogs: [],
  page: {
    current: 1,
    total: 1,
    hasInit: false,
  },
  hasBlogInit: false,
  fetchStatus: getStatus(),
}

const blogList = (state = blog_state_initial, action) => {
  switch(action.type) {
    case Blog.REQUEST_FETCH:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Blog.RECEIVE_FETCH:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        blogs: action.payload,
        hasBlogInit: true,
      });
    case Blog.FAILED_FETCH:
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

export default combineReducers({
	blogList,
});