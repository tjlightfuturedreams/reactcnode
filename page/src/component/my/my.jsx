import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

const Content=React.createClass({
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
});

export default Content;
