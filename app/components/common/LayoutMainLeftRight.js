import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import LayoutTitlePink from './LayoutTitlePink';
import LeftMain from './LeftMain';
import ListCategory from './ListCategory';
import {connect} from 'react-redux';
class LayoutMainLeftRight extends Component {
    render() {
        return (
            <LayoutTitlePink>
                    <Switch>
                        <Route exact path="/" component={LeftMain} />
                        <Route exact path="/san-pham/:id/:idpage" component={LeftMain} />
                        <Route exact path="/chi-tiet/:id" component={LeftMain} />
                    </Switch>     
                {/* <LeftMain/> */}
                {this.props.children}
            </LayoutTitlePink>
          
        );
    }
}

export default connect()(LayoutMainLeftRight);