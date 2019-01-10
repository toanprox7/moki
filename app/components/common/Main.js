import React, { Component } from 'react';
import LeftMain from './LeftMain';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import HomeCart from '../cart/HomeCart';
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/shopping-cart" component={HomeCart} />
        </Switch>
      <div id="main">
  <div className="container">
    <div className="row">
    {this.props.children}

    </div>
  </div>
</div>
</div>
    );
  }
}

export default Main;