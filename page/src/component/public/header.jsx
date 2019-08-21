import React from 'react';

const Header=React.createClass({
  getInitialState:function(){
        return{
          headerTitle:'加载中...'
        }
  },
    render(){
        return(
          <header>
              <div className="ui-header-left" dangerouslySetInnerHTML={{__html:this.props.headerLeft}}></div>
              <h3>{this.props.headerTitle.substring(0,15)+'..'}</h3>
              <span className="ui-header-right" dangerouslySetInnerHTML={{__html:this.props.headerRright}}></span>
          </header>
        );
    }
});

export default Header;
