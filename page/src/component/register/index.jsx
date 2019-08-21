import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Footer from '../public/footer';
import Header from '../public/Header';

const Registger=React.createClass({
    getInitialState:function(){
        return{
          headerTitle:"注册",
          username:'',
          password:''
        }
    },
    handleChange:function(e){
        var newState={};
        newState[e.target.name]=e.target.value;
        this.setState(newState);
        console.log(newState);
    },
    handleClick:function(){
      var data={
        username:this.state.username,
        password:this.state.password
      }
      console.log(data);
    },
    render(){
      return(
        <div>
        <header>
            <div className="ui-header-left">
                <a href="javascript:history.go(-1);">返回</a>
            </div>
            <h3>注册</h3>
            <span className="ui-header-right">
                  <Link to="/user/login"><span className="ui-login-icon">登录</span></Link>
            </span>
        </header>
        <main>
          <div className="content">
                  <div className="ui-from-label">
                      <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="请输入用户名" />
                  </div>
                  <div className="ui-from-label">
                      <input type="text"  value={this.state.password} onChange={this.handleChange} name="password" placeholder="请输入密码" />
                  </div>
                  <div className="ui-from-button">
                      <button onClick={this.handleClick}>注册</button>
                  </div>
          </div>
        </main>
        <Footer />
        </div>
      )
    }
});

export default Registger;
