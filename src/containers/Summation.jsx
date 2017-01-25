import React, { Component } from 'react';
import { connect } from "react-redux";
import site from '../actions/site';

class Summation extends Component {
  constructor(props) {
    super(props);
    
    if ( !props.hasInit ) {
      props.fetchSiteNumbers();
    }

  }

  render() {
    return (
      <section className="summation clearfix">
        <div className="data">
          <h3 className="value">{this.props.numbers.blog}</h3>
          <p className="key">博客</p>
        </div>
        <div className="data">
          <h3 className="value">{this.props.numbers.comment}</h3>
          <p className="key">留言</p>
        </div>
        <div className="data">
          <h3 className="value">{this.props.numbers.subscribe}</h3>
          <p className="key">订阅数</p>
        </div>
      </section>
    )
  }

};

const mapStateToProps = (state) => {
  const branch_state = state.site.summation;
  return branch_state;
};

const mapDispatchToProps = (dispatch) => ({
  fetchSiteNumbers: () => dispatch(site.fetchSiteNumbers),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summation);
