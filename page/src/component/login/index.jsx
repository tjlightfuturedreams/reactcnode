import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Footer from '../public/footer';
import Header from '../public/Header';

const Login=React.createClass({
    getInitialState:function(){
        return{
          headerTitle:"登录",
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
            <h3>登录</h3>
            <span className="ui-header-right">
                  <Link to="/user/register"><span className="ui-login-icon">注册</span></Link>
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
                      <button onClick={this.handleClick}>登录</button>
                  </div>
          </div>
        </main>
        <Footer />
        </div>
      )
    }
});

export default Login;
