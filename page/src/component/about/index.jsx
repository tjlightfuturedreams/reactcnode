import React from 'react';

import Footer from '../public/footer';
import Header from '../public/Header';


const About=React.createClass({
      getInitialState:function(){
            return {
                headerTitle:'关于我们',
            }
      },
      render(){
          return(
          <div>
          <Header
          headerTitle={this.state.headerTitle}/>
          <main>
              <div className="content">
                <div className="ui-article-title">
                    <span>关于我们</span>
                </div>
                <div className="ui-article-content">
                <p>未来之光成为国内最大最具影响力的 《免费培训机构》，致力于《 培训事业》的研究。未来之光由一批热爱 教育事业的工程师发起，目前已经吸引了互联网各个公司热爱教育的爱心人士组成，我们非常欢迎更多对热爱教育事业，有爱心的朋友。</p>
                <p>交流群：<a href="https://jq.qq.com/?_wv=1027&k=42y4Kav">424734136</a>—<a href="https://jq.qq.com/?_wv=1027&k=42y4Kav">点击加入》</a></p>
                </div>
              </div>
          </main>
          <Footer />
          </div>
          )
      }
});


export default About;
