import React from 'react';
// import { DataLoad, Footer, UserHeadImg, TabIcon, GetNextPage } from './data/getPages';
import { Router, Route, IndexRoute, Link,hashHistory,IndexLink } from 'react-router';
import sup from 'superagent';
import S from 'jquery';
import * as Config from '../config/Config';
const {target}=Config;
// console.log(s);
// s.get(target).end(function(err,data){
//   console.log(data);
// });


const IndexList=React.createClass({
        getInitialState: function() {
             return {
             			data:[]
              	}
          },
          componentDidMount(){
            this.loadData();
            // let objs=this;
            //     S.ajax({
            //       url:'https://cnodejs.org/api/v1/topics?tab=all&page=1&limit=10&mdrender=false&1483406507590',
            //       type:'get',
            //       dataType:'json',
            //       success:function(data){
            //         console.log(data)
            //         objs.setState({
            //           datas:data
            //         })
            //       }.bind(this);
            //     });
          },
          loadData(){
            sup.get('https://cnodejs.org/api/v1/topics?tab=all&page=1&limit=10&mdrender=false&1483406507590')
            .end(function(err,res){
                  if(res){
                    this.setState({
                      data:JSON.parse(res.text).data
                    });
                  }
            }.bind(this));
          },
      render(){
        console.log(this);
          let conde=this.state.data.map((data,index)=>{
            return(
              <dl key={index} className="ui-shop-dl">
                  <Link to={`/topic/${data.id}`} >
                  <dt>
                      <img src={data.author.avatar_url} alt="" />
                  </dt>
                  <dd>
                      <h5>{data.title}</h5>
                      <p>{data.content.substring(0,30)+'...'}:</p>
                  </dd>
                  </Link>
              </dl>
            )
          })
          return(
              <div>
                  <div className="ui-content">
                      <div className="ui-shop-title">{this.props.listTitle}</div>
                      <div className="ui-shop-list">
                          {conde}
                      </div>
                  </div>
              </div>
          )
      }
});

export default IndexList;

// export default GetNextPage({
//     id: 'IndexList',  //应用关联使用的redux
//     component: IndexList, //接收数据的组件入口
//     url: '/api/v1/topics',
//     data: (props, state) => { //发送给服务器的数据
//         var {page, limit, mdrender} = state;
//         return {
//             tab: props.location.query.tab || 'all',
//             page,
//             limit,
//             mdrender
//         }
//     },
//     success: (state) => { return state; }, //请求成功后执行的方法
//     error: (state) => { return state } //请求失败后执行的方法
// });
