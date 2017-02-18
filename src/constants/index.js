/*
	actionType 出入口
*/

// 请求状态
const Status = {
	FETCHING: 'FETCHING',
	DONE: 'DONE',
	FAILED: 'FAILED',
}

// 博客
const Blog = {
  REQUEST_FETCH_BLOGS: 'REQUEST_FETCH_BLOGS',
  RECEIVE_FETCH_BLOGS: 'RECEIVE_FETCH_BLOGS',
  FAILED_FETCH_BLOGS: 'FAILED_FETCH_BLOGS',
  UPDATE_PAGE_INFO: 'UPDATE_PAGE_INFO_BLOGS',
  CHANGE_PAGE: 'CHANGE_PAGE_BLOGS',

  REQUEST_FETCH_BLOG: 'REQUEST_FETCH_BLOG',
  RECEIVE_FETCH_BLOG: 'RECEIVE_FETCH_BLOG',
  FAILED_FETCH_BLOG: 'FAILED_FETCH_BLOG',
  UPDATE_NEARBLOG: 'UPDATE_NEARBLOG',
  RECEIVE_ADD_LIKE: 'RECEIVE_ADD_LIKE_BLOG',
  FAILED_ADD_LIKE: 'FAILED_ADD_LIKE_BLOG',
}



// 站点信息
const Site = {
  RECEIVE_FETCH_SUMMATION: 'RECEIVE_FETCH_SUMMATION',

  OPEN_SUBSCRIBE: 'OPEN_SUBSCRIBE',
  CLOSE_SUBSCRIBE: 'CLOSE_SUBSCRIBE',

  REQUEST_SUBSCRIBE: 'REQUEST_SUBSCRIBE_SUBMODAL',
  RECEIVE_SUBSCRIBE: 'RECEIVE_SUBSCRIBE_SUBMODAL',
  FAILED_SUBSCRIBE: 'FAILED_SUBSCRIBE_SUBMODAL',

}


// 留言板
const Board = {
  REQUEST_FETCH_COMMENT: 'REQUEST_FETCH_COMMENT_BOARD',
  RECEIVE_FETCH_COMMENT: 'RECEIVE_FETCH_COMMENT_BOARD',
  FAILED_FETCH_COMMENT: 'FAILED_FETCH_COMMENT_BOARD',

  REQUEST_FETCH_COMMENT_MORE: 'REQUEST_FETCH_COMMENT_BOARD_MORE',
  RECEIVE_FETCH_COMMENT_MORE: 'RECEIVE_FETCH_COMMENT_BOARD_MORE',
  FAILED_FETCH_COMMENT_MORE: 'FAILED_FETCH_COMMENT_BOARD_MORE',

  SEND_COMMENT: 'SEND_COMMENT_BOARD',
  SEND_COMMENT_SUCCESS: 'SEND_COMMENT_SUCCESS_BOARD',
  SEND_COMMENT_FAILED: 'SEND_COMMENT_FAILED_BOARD',

}



export {
	Status,
	Blog,
	Site,
}