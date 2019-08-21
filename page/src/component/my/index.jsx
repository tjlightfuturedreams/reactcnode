import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

import Footer from '../public/footer';
import Header from '../public/Header';

const My=React.createClass({
      getInitialState:function(){
            return {
                headerTitle:'用户中心，安全可靠',
            }
      },
      render(){
          return(
          <div>
          <header>
              <h3>用户中心</h3>
              <span className="ui-header-right">
                    <Link to="/user/register"><span className="ui-login-icon">注册</span></Link>
              </span>
          </header>
            <div className="list-cts">
            <div className="user-list-item">
              <ul>
                <li>
                    <Link to="/type/关注">关注(20)</Link>
                </li>
                <li>
                    <Link to="/type/收藏">收藏(20)</Link>
                </li>
                <li>
                    <Link to="/type/粉丝">粉丝((20)</Link>
                </li>
              </ul>
            </div>
              <div className="content">
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-file"></i>
                      </div>
                      <div className="list-midle">
                        <p>我的订单</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-cart"></i>
                      </div>
                      <div className="list-midle">
                        <p>购物车</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-local"></i>
                      </div>
                      <div className="list-midle">
                        <p>收货地址</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-mycs"></i>
                      </div>
                      <div className="list-midle">
                        <p>我的课程</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-star"></i>
                      </div>
                      <div className="list-midle">
                        <p>会员俱乐部</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-set"></i>
                      </div>
                      <div className="list-midle">
                        <p>设置</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui-nav-list">
                      <div className="list-left">
                        <i className="list-icon-money"></i>
                      </div>
                      <div className="list-midle">
                        <p>余额</p>
                      </div>
                      <div className="list-right">
                        <i className="right-icon-arrow"></i>
                      </div>
                  </div>
                </a>
              </div>
            </div>
          <Footer />
          </div>
          )
      }
});


export default My;
