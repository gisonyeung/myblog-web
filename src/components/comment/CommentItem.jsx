import React, { Component } from 'react';
import { Link } from 'react-router';
import parseComment from '../../utils/parseComment';
import dateFormat from '../../utils/dateFormat';

class CommentItem extends Component {

  handleQuote() {
    this.props.handleQuote(this.props.comment);
  }

  render() {
    const { comment } = this.props
    return (
      <div className="comment">
        <div className="cm-top clearfix">
          <p className="info">
            {
              comment.user.website ? 
              <a href={comment.user.website} className="name" target="_blank">{comment.user.nickname}</a>
              :
              <span className="name">{comment.user.nickname}</span>
            }
            <span className="time">{dateFormat(comment.time, "YYYY-MM-DD hh:mm:ss")}</span>
          </p>
          <p className="handle">
            <span className="quote" onClick={this.props.handleQuote} title="当您引用对方评论时，系统将会通过邮件通知对方">引用</span>
            <span className="floor">{this.props.floor}楼</span>
          </p>
        </div>
        <div className="cm-content" dangerouslySetInnerHTML={parseComment(comment.content)} />
      </div>
    )
  }

};

export default CommentItem;