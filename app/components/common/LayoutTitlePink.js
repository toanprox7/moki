import React, { Component } from 'react';
import Main from './Main';
import TitlePink from '../sanpham/TitlePink';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import LeftMain from './LeftMain';
class LayoutTitlePink extends Component {
    render() {
        return (
            
            <Main>
                <Switch>
                    <Route path="/san-pham/:id" component={TitlePink} />
                </Switch>
                {this.props.children}
            </Main>
        );
    }
}

export default LayoutTitlePink;