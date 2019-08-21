import React from 'react';
import { Router, Route, IndexRoute, Link,hashHistory,IndexLink } from 'react-router';
import {createHistory,useBasename} from 'history';


import Index from './component/home/index';
import Ente from './component/home/app';
import About from './component/about/index';
import My from './component/my/index';
import Content from './component/my/my';
import Shop from './component/shop/index';
import Registger from './component/register/index';
import Login from './component/login/index';
import Type from './component/type/index';
import Topic from './component/topic/index';

require('./style/comm.css');
/**const history = useBasename(createHistory)({
  basename: '/reactcnode'
});**/
{/**  {this.props.children}   非常重要**/}



class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
              <Route path="/" component={Ente}>
                <IndexRoute component={Index} />
                <Route path="/home/:typeName" component={Type}/>
                <Route path="/topic/:id" component={Topic}/>
              </Route>
              <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route path="/user" component={Content}>
                    <IndexRoute component={My}/>
                    <Route  path="register" component={Registger} />
                    <Route  path="login" component={Login} />
                </Route>
            </Router>
        )
    }
}

export default App;
