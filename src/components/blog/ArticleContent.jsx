import React, { Component } from 'react';
import { Link } from 'react-router';
import dateFormat from '../../utils/dateFormat';


class ArticleContent extends Component {

  render() {

    let content = {
      __html: this.props.content,
    }

    const nearBlog = this.props.nearBlog || {};

    return (
      <article className="content shadow-1">
        <div className="atc-top">
          <h1 className="title">{this.props.title}</h1>
          {
            !this.props.blogId || this.props.blogId == -1 ? '' :
            <div className="subtitle">
              <span>
                <i className="icon icon-time" title={`发表时间: ${dateFormat(this.props.createAt, "YYYY-MM-DD hh:mm:ss")}`}></i>
                <time>{dateFormat(this.props.createAt || '2016-08-15', "YYYY-MM-DD hh:mm")}</time>
              </span>
              <span>
                <i className="icon icon-update" title={`最后更新时间: ${dateFormat(this.props.createAt, "YYYY-MM-DD hh:mm:ss")}`}></i>
                <time>{dateFormat(this.props.updateAt || '2016-08-15', "YYYY-MM-DD hh:mm")}</time>
              </span>
              <Link to={`/archives?type=category&category=${this.props.category}`} title="分类">{this.props.category}</Link>
              <a href="#comment" className="toComment">#跳到评论#</a>
            </div>
          }
        </div>
        <div className="atc-content" dangerouslySetInnerHTML={content} />
        <div className="atc-bottom">
        	<ul className="tags">
              {
                this.props.tags && this.props.tags.split(',').map(function(tag, index) {

                    return (
                      tag ? 
                      <li className="tag" key={index}><Link to={`/archives?type=tag&tag=${tag}`}>{tag}</Link></li>
                      :
                      ""
                    )
                })
              }
        	</ul>
        	<div className="page">
            {
              nearBlog.next && nearBlog.next.blogId != -1 ? 
              <Link to={`/article/${nearBlog.next.blogId}`} className="left">
                <span className="icon icon-pageleft"></span>
                <span className="text">{nearBlog.next.title}</span>
              </Link>
              : ''
            }
            { 
              nearBlog.prev && nearBlog.prev.blogId != -1 ? 
              <Link to={`/article/${nearBlog.prev.blogId}`} className="right">
                <span className="text">{nearBlog.prev.title}</span>
                <span className="icon icon-pageright"></span>
              </Link>
              : ''
            }
        	</div>
        </div>



      </article>
    )
  }

};

export default ArticleContent;