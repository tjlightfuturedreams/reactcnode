import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const Footer=React.createClass({
    render:function(){
      return(
      <footer className="ui-footer">
        <nav>
          <Link className="ft-home" activeClassName="active" to='/'>home</Link>
          <Link  className="ft-about" activeClassName="active" to='/about'>about</Link>
          <Link className="ft-shop" activeClassName="active" to='/shop'>shop</Link>
          <Link  className="ft-user" activeClassName="active" to='/user'>user</Link>
        </nav>
      </footer>
      );
    }
});



export default Footer;
