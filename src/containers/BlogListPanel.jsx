import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from "react-redux";
import BlogItem from '../components/blog/BlogItem';
import Pagination from '../components/global/Pagination';
import blog from '../actions/blog';
import { Status } from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../sources/sass/HomeBlog.scss');

class BlogListPanel extends Component {
  constructor(props) {
    super(props);

    let _page = parseInt(props.query.page, 10);

    if ( !props.page.hasInit ) {
      props.initPageNum(_page);
    }

    if ( !props.hasBlogInit || _page !== props.page.current ) {
      props.fetchPageBlogs(_page);
    }

  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.query.page !== nextProps.query.page ) {
      nextProps.fetchPageBlogs(nextProps.query.page);
    }
  }

  render() {
    const { fetchStatus, blogs, page } = this.props;

    return (
      <div className="home-blogs">
        <section className="blog-list">
          <ReactCSSTransitionGroup
            transitionName="blogitem" 
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
          >
          {
            fetchStatus.status === Status.FETCHING && !blogs.length ?
            <p className="no-blog">正在获取博文信息...</p>
            : ''
          }

          {
            fetchStatus.status === Status.DONE && !blogs.length ?
            <p className="no-blog">暂无博文</p>
            : ''
          }

          {
            fetchStatus.status === Status.FAILED ?
            <p className="no-blog">请求博文失败，{ fetchStatus.msg }</p>
            : ''
          }

          {
            fetchStatus.status === Status.DONE && 
            blogs.map(function(blog, index) {
              return (
                <BlogItem
                  key={blog._id}
                  id={blog.blogId}
                  data={blog}
                  title={blog.title}
                  createAt={blog.time.createAt}
                  updateAt={blog.time.updateAt}
                  category={blog.category}
                  summary={blog.summary}
                  tags={blog.tags}
                  numbers={blog.numbers}
                />
              )
            })
          }
          </ReactCSSTransitionGroup>
        </section>
        {
          fetchStatus.status !== Status.FAILED ? 
          <Pagination
            total={page.total} 
            current={page.current} 
            onChange={this.onPageChange.bind(this)}
            preventDefault={true}
            linkFormat='/?page={{page}}'
          />
          : ''
        }
        
      </div>
    )
  }

  onPageChange(nextPage) {
    browserHistory.push(`/?page=${nextPage}`);
    // this.props.fetchPageBlogs(nextPage);
  }

};

const mapStateToProps = (state) => {

  const branch_state = state.blog.blogList;

  return branch_state;
} 

const mapDispatchToProps = (dispatch) => ({
  initPageNum: (current) => dispatch(blog.initPageNum(current)),
  fetchPageBlogs: (current) => dispatch(blog.fetchPageBlogs(current)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogListPanel);