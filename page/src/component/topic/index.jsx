import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';
import sup from 'superagent';
import Header from '../public/Header';
import IndexList from '../indexList';

const Type=React.createClass({ 
  getInitialState: function() {
       return {
             data:[],
             headerTitle:'加载中...',
             list:[]
          }
    },
    componentDidMount(){
		// console.log(this);
      sup.get('https://cnodejs.org/api/v1/topic/'+(this.props.params.id || ''))
	  .send({ name: 'tj', species: 'man' })
	  .set('X-API-Key', 'foobar')
	  .set('Accept', 'application/json')
	  .type('json')
      .end(function(err,res){
		  // console.log(res);
		  if(err){
			  console.log(err);
			  return false;
		  }
            if(res){
				if(res.statusCode=='200'){
					// console.log(this);
				  this.setState({
					data:JSON.parse(res.text).data
				  },function(){
					  // console.log(this.state);
				  });
			}else{
				// console.log(res);
				return false;
			}
			}
      }.bind(this));
    },
  render(){
		let {id,content,author,title,replies,reply_count,visit_count}=this.state.data;
    // let conde=replies.map((data,index)=>{
    //   return(
    //     <li>13213</li>
    //   )
    // })
    console.log(this.state.data);
    return(
      <div>
      <Header
      headerLeft={'<a href="javascript:history.go(-1);">返回</a>'}
      headerTitle={`${title?title:this.state.headerTitle}`} />
            <div className="detail-wrapper">
			<div className="ui-user-title">
				<div className="ui-user-img">
					<img src={(author)?(author.avatar_url):''} />
				</div>
				<div className="ui-user-data">
					<p>{author?author.loginname:'admin'}</p>
					<p>
						<span>阅读数:{visit_count}</span>
						<span>回复数:{reply_count}</span>
					</p>
				</div>
			</div>
              <h6>{title}</h6>
              <main>
                  <div className="ui-ariticel-detail" dangerouslySetInnerHTML={{__html:content}}></div>
              </main>
			  <h6 className="ui-replay-title">共回复:{reply_count}条</h6>
                  <ul className="re-list">
                      <RplayBox  id={id} reli={replies} rcount={reply_count} visit_count={visit_count} />
                  </ul>
            </div>
      </div>
    )
  }
});

/* const headImg=React.createClass({
	render(){
		return(
				<div style={{ backgroundImage: 'url(' + this.props.urls + ')' }}></div>
		)
	}
}); */
const RplayBox=React.createClass({
      getInitialState: function() {
          return {
			  list:[]
		  }
        },
      render() {
		 console.log(Object.prototype.toString.call(eval(this.props.reli)) ==='[object Array]')
		/* for(var i=0;i<JSON.stringify(this.props.reli).length;i++){
			ldata[i].push(this.props.reli[i]);
		} */
		// ldata.push(this.props.reli);
		let lt=[];
		if(Object.prototype.toString.call(eval(this.props.reli)) ==='[object Array]'){
			lt=this.props.reli;
		}else{
			lt=[{content:'加载中...'}];
		}
          // console.log(this.props.reli);
			  let relists=lt.map((data,index)=>{
              return(
                <li className="ui-detail-list" key={index}>
					
					<p dangerouslySetInnerHTML={{__html:data.content}}></p>
				</li>
              )
			})
          return (
                    <div>
						{relists}
					</div>
                )
    }
});
export default Type;
