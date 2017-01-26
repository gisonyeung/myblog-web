import React, { Component } from 'react';
import { Link } from 'react-router';
import SelfInfoBar from '../containers/SelfInfoBar';
import ArticlePanel from '../containers/ArticlePanel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../sources/sass/Article.scss');

class Article extends Component {
  render() {
    return (
      <div className="inner-wrapper">
      <ReactCSSTransitionGroup
          transitionName="blog"
          transitionAppear={true} 
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          <ArticlePanel 
            key={this.props.params.articleId}
            blogId={this.props.params.articleId} 
          />
        </ReactCSSTransitionGroup>
        <SelfInfoBar />
      </div>
    )
  }
};

export default Article;