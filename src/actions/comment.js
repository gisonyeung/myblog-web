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

const quote_board = (quoteData) => (dispatch, getState) => {
  dispatch({
    type: Comment.BOARD_QUOTE,
    payload: Object.assign({}, quoteData),
  });
}

// 初始化评论 博客
const initComment_blog = (blogId) => (dispatch) => {
  dispatch(network.requestAction(Comment.BLOG_FETCH_REQUEST));
  fetch.POST(Api.getBlogComment, { blogId })
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Comment.BLOG_FETCH_FAIELD, data.result));
      return false;
    }
    dispatch(network.receiveAction(Comment.BLOG_FETCH_RECEIVE, data));
  })
  .catch(err => {
    dispatch(network.failAction(Comment.BLOG_FETCH_FAIELD, err));
  });
}

const addComment_blog = (formData) => (dispatch, getState) => {
  dispatch(network.requestAction(Comment.BLOG_ADD_REQUEST));
  fetch.POST(Api.addBlogComment, formData)
  .then(data => {
    if ( data.result !== 'success' ) {
      dispatch(network.failAction(Comment.BLOG_ADD_FAIELD, data.result));
      return false;
    }
    dispatch(network.receiveAction(Comment.BLOG_ADD_RECEIVE, data));
  })
  .catch(err => {
    dispatch(network.failAction(Comment.BLOG_ADD_FAIELD, err));
  });
}

const quote_blog = (quoteData) => (dispatch, getState) => {
  dispatch({
    type: Comment.BLOG_QUOTE,
    payload: Object.assign({}, quoteData),
  });
}


export default {
  board: {
    init: initComment_board,
    more: fetchMoreComment_board,
    add: addComment_board,
    quote: quote_board,
  },
  blog: {
    init: initComment_blog,
    add: addComment_blog,
    quote: quote_blog,
  },

  
}