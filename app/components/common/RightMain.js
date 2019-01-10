
import React, { Component } from 'react';
// import LeftMain from './LeftMain';
// import RightMain from './RightMain';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import HomeRightMain from '../home/HomeRightMain';
import ListProductsRight from '../sanpham/ListProductsRight';
import LayoutMainLeftRight from './LayoutMainLeftRight';
import HomeDetails from '../details/HomeDetails';
import {connect} from 'react-redux';
class RightMain extends Component {
    render() {
        return (
            <LayoutMainLeftRight>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <Switch>
                        <Route exact path="/" component={HomeRightMain} />
                        <Route exact path="/san-pham" component={ListProductsRight} />
                        <Route exact path="/chi-tiet/:id" component={HomeDetails} />
                    </Switch>
                       
                    </div>
            </LayoutMainLeftRight>

        );
    }
}

export default connect()(RightMain);