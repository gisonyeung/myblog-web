import React, { Component } from 'react';
import Nav from './Nav';
// import SiteAction from '../actions/SiteAction';

class App extends Component {
  
  componentDidMount() {
    // 增加博客访问量
    // SiteAction.addSiteView();
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App;