import React, { Component } from 'react';
import { connect } from "react-redux";
import { Status } from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CommentPanel from '../components/comment/CommentPanel';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div>
        <CommentPanel
          handleQuote={this.props.handleQuote}
          comments={this.props.comments}
          type="board"
        />
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  const branch_state = state.comment.board;
  return branch_state;
} 

const mapDispatchToProps = (dispatch) => ({
  initPageNum: (current) => dispatch(blog.initPageNum(current)),
  fetchPageBlogs: (current) => dispatch(blog.fetchPageBlogs(current)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);