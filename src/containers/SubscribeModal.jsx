import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from "react-redux";
import { Status } from '../constants';
import site from '../actions/site';
import { checkHelper } from '../utils/formCheck';

class SubscribeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTip: {
        status: !!props.fetchStatus.status && props.fetchStatus.status !== Status.FETCHING,
        type: props.fetchStatus.status === Status.DONE ? 'success' : 'error', // 'error' or 'success'
        text: props.fetchStatus.msg,
      },
      hasSub: props.fetchStatus.status === Status.DONE,
    }
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      isTip: {
        status: !!nextProps.fetchStatus.status && nextProps.fetchStatus.status !== Status.FETCHING,
        type: nextProps.fetchStatus.status === Status.DONE ? 'success' : 'error', // 'error' or 'success'
        text: nextProps.fetchStatus.msg,
      },
      hasSub: nextProps.fetchStatus.status === Status.DONE,
    });
  }

  handleSub() {

    const _status = this.props.fetchStatus.status;

    // 正在请求中 或 已经订阅完毕，则不执行订阅
    if ( _status === Status.FETCHING || _status === Status.DONE ) {
      return false;
    }

    let formData = {
      nickname: this.refs.subNickname.value,
      email: this.refs.subEmail.value,
    };

    let check_result = '';
    if ( check_result = checkHelper.nickname(formData.nickname).error ) {
      this.handleTip('error', check_result);
      this.refs.subNickname.focus();
      return false;
    } else if ( check_result = checkHelper.email(formData.email).error ) {
      this.handleTip('error', check_result);
      this.refs.subEmail.focus();
      return false;
    }

    this.props.addSubscribe(formData);

  }

  handleTip(type, text) {

    this.setState({
      isTip: {
        status: true,
        type: type,
        text: text,
      },
      hasSub: type === 'success',
    });
  }

  clearTip() {
    this.setState({
      isTip: {
        status: false,
        type: 'error',
        text: '',
      },
      hasSub: false,
    });
  }

  clickPanel(e) {
  	e.stopPropagation();
  }

  handleKeyUp(e) {
  	// 回车
  	if( e.which == 13 ) {
  		this.handleSub(this);
  	}
  }

  render() {

  	return (
      <ReactCSSTransitionGroup
          transitionName="dropdown" 
          transitionAppear={true} 
          transitionAppearTimeout={800}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
        {
          this.props.isOpen ?
      	  <div
      	    className="modal modal-sub"
      	    onClick={this.props.closeSubscribeModal}
      	  >
            <div className="mask"></div>
            <div
              className="panel"
              onClick={this.clickPanel}
            >
              <h2>欢迎订阅</h2>
              <div className="m-middle">
                <input
                  type="text" 
                  className="text" 
                  placeholder="昵称" 
                  name="nickname"
                  ref="subNickname"
                  onKeyUp={this.handleKeyUp}
                />
                <input 
                  type="email" 
                  className="text" 
                  placeholder="常用邮箱" 
                  name="email"
                  ref="subEmail"
                  onKeyUp={this.handleKeyUp}
                />
                {
                  this.state.hasSub ? 
                  <span
    	            className="btn success"
    	          >✔ 已订阅</span>
    	          :
    	          <button
                    className="btn"
                    onClick={this.handleSub.bind(this)}
                  >订&nbsp;&nbsp;阅</button>
                }
              </div>
              <div className="m-bottom">
                {
                  this.state.isTip.status ? 
                  <p className="error-tip">
                    <span className={`icon ${this.state.isTip.type == 'error' ? 'icon-error' : 'icon-ok'}`}></span>
                    <span className={`text ${this.state.isTip.type == 'error' ? '' : 'success'}`}>{this.state.isTip.text}</span>
                  </p>
                  :
                  <div>
                    <p>当有新博文发表时，将会以邮件形式通知您。</p>
                    <p>所填信息不会被公开。</p>
                  </div>
                }
              </div>
            </div>
          </div>
          : ''
        }
      </ReactCSSTransitionGroup>
  	);

  }

};

const mapStateToProps = (state) => {
  const branch_state = state.site.subscribeModal;
  return branch_state;
};

const mapDispatchToProps = (dispatch) => ({
  openSubscribeModal: () => dispatch(site.openSubscribeModal),
  closeSubscribeModal: () => dispatch(site.closeSubscribeModal),
  addSubscribe: (formData) => dispatch(site.addSubscribe(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeModal);