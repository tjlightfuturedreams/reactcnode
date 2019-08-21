import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Header from '../public/Header';
import IndexList from '../indexList';

const Type=React.createClass({
  getInitialState: function() {
       return {
       			// comment:this.props.comment,
        	}
    },
  render(){
    const { typeName } = this.props.params
    return(
      <div>
      <Header
      headerLeft={'<a href="javascript:history.go(-1);">返回</a>'}
      headerTitle={typeName} />
        <main>
            <IndexList  listTitle={typeName} data-type={typeName} />
        </main>
      </div>
    )
  }
});


export default Type;
