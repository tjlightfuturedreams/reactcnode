import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Footer from '../public/footer';
import Header from '../public/Header';

const Ente=React.createClass({
  render(){
    return(
      <div>
          {this.props.children}
          <Footer />
      </div>
    )
  }
});

export default Ente;
