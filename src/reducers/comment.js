import { Comment, Status } from "../constants";
import { combineReducers } from "redux";
import _ from 'lodash';
import getStatus from '../utils/getStatus';

const board_state_initial = {
  comments: [],
  total: 0,
  pos: 0,
  hasCommentInit: false,
  fetchStatus: getStatus(),
  addStatus: getStatus(),
  quoteData: {},
  forceUpdate: false,
}

const board = (state = board_state_initial, action) => {
  switch(action.type) {
    case Comment.BOARD_FETCH_REQUEST:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Comment.BOARD_FETCH_RECEIVE:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        comments: action.payload.comments,
        total: action.payload.allCount,
        pos: action.payload.comments.length,
        hasCommentInit: true,
      });
    case Comment.BOARD_FETCH_FAIELD:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) });
    case Comment.BOARD_MORE_REQUEST:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Comment.BOARD_MORE_RECEIVE:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        comments: state.comments.concat(action.payload.comments),
        pos: state.pos + action.payload.comments.length,
      });
    case Comment.BOARD_MORE_FAIELD:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) });
    case Comment.BOARD_ADD_REQUEST:
      return Object.assign({}, state, { addStatus: getStatus(Status.FETCHING) });
    case Comment.BOARD_ADD_RECEIVE:
      return Object.assign({}, state, { addStatus: getStatus(Status.DONE, action.payload), quoteData: {} });
    case Comment.BOARD_ADD_FAIELD:
      return Object.assign({}, state, { addStatus: getStatus(Status.FAILED, action.payload) });
    case Comment.BOARD_QUOTE:
      return Object.assign({}, state, { quoteData: action.payload, addStatus: getStatus(), forceUpdate: !state.forceUpdate });
    default:
      return state;
  }
}

const blog_state_initial = {
  comments: [],
  total: 0,
  pos: 0,
  fetchStatus: getStatus(),
  addStatus: getStatus(),
  quoteData: {},
  forceUpdate: false,
}

const blog = (state = blog_state_initial, action) => {
  switch(action.type) {
    case Comment.BLOG_FETCH_REQUEST:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Comment.BLOG_FETCH_RECEIVE:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        comments: action.payload.comments,
        total: action.payload.allCount,
        pos: action.payload.comments.length,
      });
    case Comment.BLOG_FETCH_FAIELD:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) });
    case Comment.BLOG_ADD_REQUEST:
      return Object.assign({}, state, { addStatus: getStatus(Status.FETCHING) });
    case Comment.BLOG_ADD_RECEIVE:
      return Object.assign({}, state, { addStatus: getStatus(Status.DONE, action.payload), quoteData: {} });
    case Comment.BLOG_ADD_FAIELD:
      return Object.assign({}, state, { addStatus: getStatus(Status.FAILED, action.payload) });
    case Comment.BLOG_QUOTE:
      return Object.assign({}, state, { quoteData: action.payload, addStatus: getStatus(), forceUpdate: !state.forceUpdate });
    default:
      return state;
  }
}



export default combineReducers({
  board,
	blog,
});