import React, { Component } from 'react';
import ListCategory from './ListCategory';
import BannerL from './BannerL';
import NewProduct from './NewProduct';
import {connect} from 'react-redux';
class LeftMain extends Component {
    render() {
        return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{padding: 0}}>
            <ListCategory/>
            <BannerL/>
            <NewProduct/>
      </div>
        );
    }
}

export default connect()(LeftMain);