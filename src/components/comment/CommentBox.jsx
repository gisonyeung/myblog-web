import React, { Component } from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import infoCache from '../../utils/infoCache';

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

  handleFocus() {
    if( !this.state.isOn ) {
      this.setState({
        isOpen: true
      });
    }
  }

  handleClick() {

    const that = this;

    let formData = {
      nickname: that.refs.nickname.value,
      email: that.refs.email.value,
      content: that.refs.content.value,
      website: that.refs.website.value,
    }

    
    /*
      表单验证
    */
    if ( !/\S/.test(formData.content.replace(/<blockquote>[\s\S]*<\/blockquote>/g, '')) ) {
      this.handleTip('error', '评论内容不能为空');
      this.refs.content.focus();
      return false;
    } else if ( !/\S/.test(formData.nickname) ) {
      this.handleTip('error', '昵称不能为空');
      this.refs.nickname.focus();
      return false;
    } else if ( !/\S/.test(formData.email) ) {
      this.handleTip('error', '电子邮箱不能为空');
      this.refs.email.focus();
      return false;
    } else if ( !/^\w+@\w+\.\w+(\.\w+)?$/.test(formData.email) ) {
      this.handleTip('error', '电子邮箱格式错误');
      this.refs.email.focus();
      return false;
    } else if ( formData.content.length > 1500 ) {
      this.handleTip('error', '评论内容过长');
      this.refs.content.focus();
      return false;
    } else if ( formData.nickname.length > 15 ) {
      this.handleTip('error', '昵称过长');
      this.refs.nickname.focus();
      return false;
    } else if ( formData.email.length > 50 ) {
      this.handleTip('error', '电子邮箱过长');
      this.refs.email.focus();
      return false;
    }  else if ( formData.website.length > 100 ) {
      this.handleTip('error', '个人网站过长');
      this.refs.website.focus();
      return false;
    } 
    /*
      个人网站不为空时，检测有无https?://前缀，无则添加http://
    */
    if ( /\S/.test(formData.website) ) {
      formData.website = formData.website.replace(/^(https?:\/\/)?.*/, function(match, capture) {
        // 有捕获组，已有前缀
        if ( capture ) {
          return match;
        } else {
          return 'http://' + match;
        }
      });
    }

    infoCache.save(formData, this.refs.remember.checked);
    
    this.clearTip();

    // BlogAction.sendBoardComment(formData);

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