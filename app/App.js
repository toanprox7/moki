import {connect} from 'react-redux';
import React, { Component } from 'react';
import Layout from './components/common/Layout';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import HomeRightMain from './components/home/HomeRightMain';
import ListProductsRight from './components/sanpham/ListProductsRight';
import HomeDetails from './components/details/HomeDetails';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes,faStar);

class App extends Component {
    render() {
        return (
<Router>
  <Layout>
           <Switch>
                <Route exact path="/" component={HomeRightMain} />
                <Route path="/san-pham/:id/:idpage" component={ListProductsRight} />
                <Route path="/chi-tiet/:id" component={HomeDetails} />
            </Switch>
  </Layout>
</Router>
        );
    }
}

export default connect()(App);