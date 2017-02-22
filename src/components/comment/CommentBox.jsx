import React, { Component } from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import infoCache from '../../utils/infoCache';
import { checkHelper } from '../../utils/formCheck';
import formatter from '../../utils/formatter';
import smoothScoll from '../../utils/smoothScoll';
import { Status } from '../../constants';

class CommentBox extends Component{
  constructor(props) {
    super(props);

    /*
      读取个人信息cookie
    */
    let cookieForm = infoCache.get();
    let isChecked = false;

    if( /\S/.test(cookieForm.email) ) {
      // 打勾
      isChecked = true;
    };

    this.state = {
      isChecked: isChecked,
      isOpen: false,  
      isTip: {
        status: false,
        type: 'error', // 'error' or 'success'
        text: '',
      },
      cookieForm: cookieForm,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { addStatus, quoteData } = nextProps;

    if ( addStatus.status !== this.props.addStatus.status 
         && addStatus.status === Status.DONE ) {
      this.handleTip('success', '发表评论成功');
      this.refs.content.value = '';
      this.props.initComment();
      setTimeout(() => {
        smoothScoll.toAnchor('comment')
      }, 300);
    } else if ( addStatus.status === Status.FAILED ) {
      this.handleTip('error', addStatus.msg);
    }

    if (quoteData.content) {
      this.quoteComment(quoteData);
      this.handleFocus(); // 开发时发现此版本 React 的 onFocus 事件不能通过 focus() 触发，所以这里主动触发
    }

  }

  handleFocus() {
    if( !this.state.isOn ) {
      this.setState({
        isOpen: true
      });
    }
  }

  handleClick() {

    if ( this.props.addStatus.status === Status.FETCHING ) {
      this.handleTip('error', '发布评论中，请勿重复操作');
      return false;
    }

    let formData = {
      nickname: this.refs.nickname.value,
      email: this.refs.email.value,
      content: this.refs.content.value,
      website: this.refs.website.value,
      quoteData: this.props.quoteData,
    }

    let check_result = '';
    if ( check_result = checkHelper.content(formData.content).error ) {
      this.handleTip('error', check_result);
      this.refs.content.focus();
    } else if ( check_result = checkHelper.nickname(formData.nickname).error ) {
      this.handleTip('error', check_result);
      this.refs.nickname.focus();
    } else if ( check_result = checkHelper.email(formData.email).error ) {
      this.handleTip('error', check_result);
      this.refs.email.focus();
    } else if ( check_result = checkHelper.website(formData.website).error ) {
      this.handleTip('error', check_result);
      this.refs.website.focus();
    }

    if ( check_result ) { return false; }

    formData.website = formatter.website(formData.website);
    infoCache.save(formData, this.refs.remember.checked);
    this.clearTip();
    this.props.addComment(formData);
  }

  quoteComment(data) {
    data.content = data.content.replace(/<blockquote>[\s\S]*<\/blockquote>\n?/, '');
    let prefixComment = `<blockquote>\n<pre>引用 ${data.user.nickname} 的发言：</pre>\n\n${data.content}\n\n</blockquote>\n`;
    this.refs.content.value = prefixComment + this.refs.content.value.replace(/<blockquote>[\s\S]*<\/blockquote>\n?/, '');
    this.refs.content.focus();
  }

  handleTip(type, text) {
    this.setState({
      isTip: {
        status: true,
        type: type,
        text: text,
      },
    });
  }

  clearTip() {
    this.setState({
      isTip: {
        status: false,
        type: 'error',
        text: '',
      },
    });
  }


  render() {
    return (
      <div className="comment-box">
        <p className="label">评论（部分HTML标签可用）</p>
        <textarea 
          className={`form-text msg ${this.state.isOpen ? 'on' : ''}`}
          onFocus={this.handleFocus.bind(this)}
          ref="content"
        />
        <p className="label">您的昵称<span className="important">*</span>：</p>
        <input
          className="form-text"
          name="nickname" 
          placeholder="必填" 
          ref="nickname"
          defaultValue={this.state.cookieForm.nickname}
        />
        <p className="label">Email<span className="important">*</span>：</p>
        <input 
          className="form-text" 
          name="email" 
          placeholder="必填，不公开" 
          ref="email"
          defaultValue={this.state.cookieForm.email}
        />
        <p className="label">个人网址：</p>
        <input 
          className="form-text" 
          name="website" 
          placeholder="我信任你，不会填写广告链接"
          ref="website"
          defaultValue={this.state.cookieForm.website}
        />
        <p className="remember">
          <label htmlFor="remember">
            <input 
              type="checkbox" 
              id="remember" 
              defaultChecked={this.state.isChecked}
              ref="remember"
            />
            <span>记住个人信息</span>
          </label>
        </p>
        {
          this.state.isTip.status ? 
          <p className="error-tip">
            <span className={`icon ${this.state.isTip.type == 'error' ? 'icon-error' : 'icon-ok'}`}></span>
            <span className={`text ${this.state.isTip.type == 'error' ? '' : 'success'}`}>{this.state.isTip.text}</span>
          </p>
          : 
          ''
        }
        
        <button 
          className="submit"
          onClick={this.handleClick.bind(this)}
        >发表</button>
      </div>
    )
  }
};

export default CommentBox;