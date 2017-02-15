import fetch from '../utils/fetch';
import { Comment } from "../constants";
import Api from "../constants/Api";
import _ from "lodash";
import network from './network';

// 初始化评论 留言板
const initComment_board = () => (dispatch) => {
  dispatch(network.requestAction(Comment.BOARD_FETCH_REQUEST));
  fetch.POST(Api.getBoardCommentInit)
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Comment.BOARD_FETCH_FAIELD, data.result));
      return false;
    }
    dispatch(network.receiveAction(Comment.BOARD_FETCH_RECEIVE, data));
  })
  .catch(err => {
  dispatch(network.failAction(Comment.BOARD_FETCH_FAIELD, err));
  });
}

const fetchMoreComment_board = (pos) => (dispatch) => {
  dispatch(network.requestAction(Comment.BOARD_MORE_REQUEST));
  fetch.POST(Api.getBoardCommentMore, {
    index: pos,
  })
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Comment.BOARD_MORE_FAIELD, data.result));
      return false;
    }
    dispatch(network.receiveAction(Comment.BOARD_MORE_RECEIVE, data));
  })
  .catch(err => {
  dispatch(network.failAction(Comment.BOARD_MORE_FAIELD, err));
  });
}

const addComment_board = (formData) => (dispatch, getState) => {
  dispatch(network.requestAction(Comment.BOARD_ADD_REQUEST));
  fetch.POST(Api.addBoardComment, formData)
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Comment.BOARD_ADD_FAIELD, data.result));
      return false;
    }
    dispatch(network.receiveAction(Comment.BOARD_ADD_RECEIVE, data));
  })
  .catch(err => {
  dispatch(network.failAction(Comment.BOARD_ADD_FAIELD, err));
  });
}

export default {
  board: {
    init: initComment_board,
    more: fetchMoreComment_board,
    add: addComment_board,
  }
  
}