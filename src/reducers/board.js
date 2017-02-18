import { Blog, Status } from "../constants";
import { combineReducers } from "redux";
import _ from 'lodash';
import getStatus from '../utils/getStatus';
import { Board } from '../constants';

const comment_state_initial = {
  comments: [],
  max_pos: 0,
  total: 0,
  allowLoadmore: false,
  fetchStatus: getStatus(),
  hasInit: false,
  sendStatus: getStatus(),
};

const comment = (state = comment_state, action) => {
  switch(action.type) {
    case Board.REQUEST_FETCH_COMMENT:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FETCHING) });
    case Board.RECEIVE_FETCH_COMMENT:
      return Object.assign({}, state, { 
        fetchStatus: getStatus(Status.DONE), 
        comments: action.payload.comments,
        max_pos: action.payload.comments.length,
        total: action.payload.total,
        allowLoadmore: action.payload.comments.length < action.payload.total,
        hasInit: true,
      });
    case Board.FAILED_FETCH_COMMENT:
      return Object.assign({}, state, { fetchStatus: getStatus(Status.FAILED, action.payload) });
    case Board.REQUEST_FETCH_COMMENT_MORE:
      return Object.assign({}, state, { 
        allowLoadmore: true,
      });
    case Board.RECEIVE_FETCH_COMMENT_MORE:
      const _max_pos = state.max_pos + action.payload.comments.length;
      return Object.assign({}, state, { 
        comments: state.comments.concat(action.payload.comments),
        max_pos: _max_pos,
        allowLoadmore: _max_pos < state.total,
      });
    case Board.FAILED_FETCH_COMMENT_MORE:
      return Object.assign({}, state, { allowLoadmore: true });
    case Board.SEND_COMMENT_SUCCESS:
      return Object.assign({}, state, { 
        sendStatus: getStatus(Status.DONE),
        max_pos: state.max_pos + 1,
        total: state.total + 1,
      });
    case Board.SEND_COMMENT_FAILED:
      return Object.assign({}, state, { sendStatus: getStatus(Status.FAILED, action.payload) });
  }
}

export default combineReducers({
	comment,
});