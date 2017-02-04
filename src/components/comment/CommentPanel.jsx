import React, { Component } from 'react';
import { Link } from 'react-router';
import CommentItem from './CommentItem';

class CommentPanel extends Component {
  render() {
    return (
      <div className="comment-panel shadow-1" id="comment">
        <h1 className="panel-title">留言{ this.props.type === 'board' ? '板' : '' }{ this.props.comments.length ? '(' + this.props.comments.length + ')' : ''}</h1>
        <div className="comments-list">
          {
            this.props.comments.map(function(comment, index) {
              return (
                <CommentItem 
                  key={comment._id}
                  comment={comment}
                  handleQuote={this.props.handleQuote}
                  floor={this.props.comments.length - index}
                />
              )
            })
          }
        </div>
        {/*<CommentBox 
          blogId={this.props.blogId} 
          type={this.props.type}
        />*/}
      </div>
    )
  }

};

export default CommentPanel;