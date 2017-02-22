import React, { Component } from 'react';
import { Link } from 'react-router';
import CommentItem from './CommentItem';
import CommentBox from './CommentBox';

require('../../sources/sass/Comment.scss');

class CommentPanel extends Component {
  render() {
    return (
      <div className="comment-panel shadow-1" id="comment">
        <h1 className="panel-title">留言{ this.props.type === 'board' ? '板' : '' }{ this.props.comments.length ? '(' + this.props.comments.length + ')' : ''}<span className="emoji">🌼</span></h1>
        <div className="comments-list">
          {
            this.props.comments.map((comment, index) => (
              <CommentItem 
                key={comment._id}
                comment={comment}
                handleQuote={this.props.handleQuote}
                floor={this.props.comments.length - index}
              />
            ))
          }
        </div>
        <CommentBox 
          blogId={this.props.blogId} 
          type={this.props.type}
          addComment={this.props.addComment}
          addStatus={this.props.addStatus}
          initComment={this.props.initComment}
          quoteData={this.props.quoteData}
        />
      </div>
    )
  }

};

export default CommentPanel;