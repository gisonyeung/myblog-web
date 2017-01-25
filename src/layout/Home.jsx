import React, { Component } from 'react';
import BlogListPanel from '../containers/BlogListPanel';
import SelfInfoBar from '../containers/SelfInfoBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="inner-wrapper">
          <ReactCSSTransitionGroup
            transitionName="blog" 
            transitionAppear={true} 
            transitionAppearTimeout={400}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
          >
            <BlogListPanel query={this.props.location.query} />
          </ReactCSSTransitionGroup>
          <SelfInfoBar />
        </div>
        <div className="icp">
          ICP：
          <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备16069727号</a>
        </div>
      </div>
    )
  }

};

export default Home;


