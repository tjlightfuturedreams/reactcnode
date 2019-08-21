import React from 'react';

import Footer from '../public/footer';
import Header from '../public/Header';
import IndexList from '../indexList';

const Shop=React.createClass({
      getInitialState:function(){
            return {
                headerTitle:'视频列表',
                listTitle:'热门视频'
            }
      },
      render(){
          return(
          <div>
          <Header headerTitle={this.state.headerTitle} />
          <main>
              <IndexList listTitle={this.state.listTitle} />
          </main>
          <Footer />
          </div>
          )
      }
});

export default Shop;
