import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Footer from '../public/footer';
import Header from '../public/Header';
import IndexList from '../indexList';

const Index=React.createClass({
    getInitialState:function(){
          return {
              headerTitle:'未来之光，专注教育事业《免费培训》',
              listTitle:'最新文章'
          }
    },
    render(){
      // console.log(this.props.params);
      const {typeName} = this.props.params
        return(
        <div>
              <Header  headerTitle={this.state.headerTitle} />
              <div className="shop-item">
                  <ul>
                      <li className="item-class">
                          <Link to="home/我的课程"><i></i>我的课程</Link>
                      </li>
                      <li className="item-online">
                          <Link to="home/面试题库"><i></i>面试题库</Link>
                      </li>
                      <li className="item-order">
                          <Link to="home/我的订单"><i></i>我的订单</Link>
                      </li>
                      <li  className="item-cart">
                          <Link to="home/购物车"><i></i>购物车</Link>
                      </li>
                  </ul>
              </div>
              <main>
                <IndexList  listTitle={this.state.listTitle} />
              </main>
              <Footer />
              </div>
        )
    }
});

export default Index
