import React, { Component } from 'react';
import BoardPanel from '../containers/BoardPanel';
import SelfInfoBar from '../containers/SelfInfoBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Board extends Component {

  render() {
    return (
      <div className="inner-wrapper">
        <ReactCSSTransitionGroup
          transitionName="blog" 
          transitionAppear={true} 
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={300}
        >
          <BoardPanel query={this.props.location.query} />
        </ReactCSSTransitionGroup>
        <SelfInfoBar />
      </div>
    )
  }

};

export default Board;


