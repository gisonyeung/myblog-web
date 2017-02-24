import React, { Component } from 'react';
import { connect } from "react-redux";
import { Status } from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CommentPanel from '../components/comment/CommentPanel';
import comment from '../actions/comment';

class BoardPanel extends Component {
  constructor(props) {
    super(props);

    // 初始化加载评论
    if (!props.hasCommentInit) {
      props.initComment();
    }

  }

  render() {
    return (
      <div className="article-main">
        <CommentPanel
          handleQuote={this.props.handleQuote}
          comments={this.props.comments}
          type="board"
          loadMore={this.props.loadMore}
          addComment={this.props.addComment}
          fetchStatus={this.props.fetchStatus}
          addStatus={this.props.addStatus}
          initComment={this.props.initComment}
          quoteData={this.props.quoteData}
          pos={this.props.pos}
          total={this.props.total}
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
  handleQuote: (quoteData) => dispatch(comment.board.quote(quoteData)),
  initComment: () => dispatch(comment.board.init()),
  loadMore: (pos) => dispatch(comment.board.more(pos)),
  addComment: (formData) => dispatch(comment.board.add(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPanel);