import React, { Component } from 'react';
import Menu from './Menu';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import BreadCrumb from '../sanpham/BreadCrumb';
import LayoutMainLeftRight from './LayoutMainLeftRight';
class Layout extends Component {
    render() {
        return (
          <div>
            <Menu>
                <Switch>
                    <Route path="/san-pham/:idCate" component={BreadCrumb} />
                    <Route path="/chi-tiet/:idSp" component={BreadCrumb} />
                </Switch>
            </Menu>
           <LayoutMainLeftRight>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        {this.props.children}               
                    </div>
            </LayoutMainLeftRight>
           </div>
        );
    }
}

export default Layout;