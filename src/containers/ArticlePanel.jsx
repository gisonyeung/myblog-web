import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import ArticleContent from '../components/blog/ArticleContent';
import ArticleHot from './ArticleHot';
// import ArticleComment from './ArticleComment';
import blog from '../actions/blog';
import { Status } from '../constants';


class ArticlePanel extends Component {
  constructor(props) {
    super(props);
    props.getBlogDetail(props.blogId);
    props.getNearBlog(props.blogId);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.blogId != this.props.blogId ) {
      nextProps.getBlogDetail(nextProps.blogId);
      nextProps.getNearBlog(nextProps.blogId);
    }
  }

  render() {
    const { fetchStatus, blog, nearBlog } = this.props;

    return (
      <div className="article-main">
        {
          fetchStatus.status === Status.FETCHING ?
          <ArticleContent 
            title="正在加载文章内容..."
          />
          : ''
        }
        {
          fetchStatus.status === Status.FAILED ?
          <ArticleContent 
            title={'此文章不存在'}
          />
          : ''
        }
        {
          fetchStatus.status === Status.DONE ?
          <ArticleContent 
            blogId={blog.blogId}
            title={blog.title}
            createAt={blog.time.createAt}
            updateAt={blog.time.updateAt}
            category={blog.category}
            content={blog.content}
            tags={blog.tags}
            nearBlog={nearBlog}
          />
          : ''
        }
        {
          fetchStatus.status === Status.DONE ?
          <ArticleHot
            blogId={blog.blogId}
            numbers={blog.numbers}
          />
          : ''
        }
        {/*
          fetchStatus.status === Status.DONE ?
          <ArticleComment
            blogId={blog.blogId || -1}
          />
          : ''
        */}
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  const branch_state = state.blog.currentBlog;
  return branch_state;
} 

const mapDispatchToProps = (dispatch) => ({ 
  getBlogDetail: (blogId) => dispatch(blog.getBlogDetail(blogId)),
  getNearBlog: (blogId) => dispatch(blog.getNearBlog(blogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePanel);