import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import ls from '../utils/localStorage';
import blog from '../actions/blog';

class ArticleHot extends Component {
  constructor(props) {
    super(props);
    
    // 获取localStorage中点赞列表是否有此博文
    let BlogLike = ls.get('BlogLike');
    let isLike = false;

    // 存在此键，则isLike设为true
    if( BlogLike[props.blogId] ) {
      isLike = true;
    }

    this.state = {
      isLike: isLike,
      likeNum: props.numbers.like,
    }; 

  }

  componentWillReceiveProps(nextProps) {
    // 点赞成功，存进localStorage
    if ( nextProps.is_like_success === true ) {
      let BlogLike = ls.get('BlogLike');
      BlogLike[this.props.blogId] = 1;
      ls.set('BlogLike', BlogLike);
    } else if ( nextProps.is_like_success === false ) { // 点赞失败，转换回原来状态
      this.setState({
        isLike: false,
        likeNum: this.state.likeNum - 1,
      });
    }
  }

  addLike() {
    // 点赞开关
    if( !this.state.isLike ) {

      // 转换状态
      this.setState({
        isLike: true,
        likeNum: this.state.likeNum + 1,
      });

      this.props.addLike(this.props.blogId);
    }
  }

  render() {
    return (
      <div className="atc-hot">
        <div className={`widget ${this.state.isLike ? 'active' : ''}`}>
          <span className="icon icon-like" onClick={this.addLike.bind(this)}></span>
          <p>点赞{ this.state.likeNum ? '(' + this.state.likeNum + ')' : '' }</p>
        </div>
        <div className="widget">
          <span className="icon icon-share"></span>
          <p>分享</p>
        </div>
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  const branch_state = state.blog.currentBlog;
  return branch_state;
} 

const mapDispatchToProps = (dispatch) => ({ 
  addLike: (blogId) => dispatch(blog.addLike(blogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleHot);
