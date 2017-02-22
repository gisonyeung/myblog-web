import React, { Component } from 'react';
import { connect } from "react-redux";
import { Status } from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CommentPanel from '../components/comment/CommentPanel';
import comment from '../actions/comment';

class ArticleComment extends Component {
  constructor(props) {
    super(props);

    // 初始化加载评论
    if (!props.hasCommentInit) {
      props.initComment(this.props.blogId);
    }

  }

  render() {
    return (
      <CommentPanel
        handleQuote={this.props.handleQuote}
        comments={this.props.comments}
        type="blog"
        blogId={this.props.blogId}
        loadMore={this.props.loadMore}
        addComment={this.props.addComment}
        fetchStatus={this.props.fetchStatus}
        addStatus={this.props.addStatus}
        initComment={this.props.initComment}
        quoteData={this.props.quoteData}
      />
    )
  }

};

const mapStateToProps = (state) => {
  const branch_state = state.comment.blog;
  return branch_state;
} 

const mapDispatchToProps = (dispatch) => ({
  handleQuote: (quoteData) => dispatch(comment.blog.quote(quoteData)),
  initComment: (blogId) => dispatch(comment.blog.init(blogId)),
  loadMore: (pos) => dispatch(comment.blog.more(pos)),
  addComment: (formData) => dispatch(comment.blog.add(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComment);