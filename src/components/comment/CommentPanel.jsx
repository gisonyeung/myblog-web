import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CommentItem from './CommentItem';
import CommentBox from './CommentBox';
import { Status } from '../../constants';

require('../../sources/sass/Comment.scss');

class CommentPanel extends Component {

  loadMoreHandle() {
    this.props.loadMore(this.props.pos);
  }

  render() {

    return (
      <div className="comment-panel shadow-1" id="comment">
        <h1 className="panel-title">留言{ this.props.type === 'board' ? '板' : '' }{ this.props.total ? '(' + this.props.total + ')' : ''}<span className="emoji">🌼</span></h1>
        <div className="comments-list">
          <ReactCSSTransitionGroup
            transitionName="blogitem" 
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
          >
          {
            this.props.comments.map((comment, index) => (
              <CommentItem 
                key={comment._id}
                comment={comment}
                handleQuote={this.props.handleQuote}
                floor={this.props.total - index}
              />
            ))
          }
          </ReactCSSTransitionGroup>
          {
            this.props.type !== 'board' 
            || this.props.total === this.props.pos 
            || this.props.fetchStatus.status === Status.FETCHING ? 
            ""
            :
            <p 
              className="loadmore"
              onClick={this.loadMoreHandle.bind(this)}
            ><span>加载更多</span><span className="icon icon-loadmore"></span></p>
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