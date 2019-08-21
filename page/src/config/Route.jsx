import {Router,route,IndexRoute,browserHistory,hashHistory} from 'react-router';

import indexList from '../component/indexList'

class Roots extends component{
    render{
        return(
            <div>{this.props.children}</div>
        );
    }
}

const RouteConfig=(
      <Router>
          <Route path="/" component={Roots}>
              <IndexRoute component={indexList} />
          </Route>
      </Router>
)

export default RouteConfig;
