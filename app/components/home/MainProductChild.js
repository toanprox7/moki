import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CategoryHomeLeft from './CategoryHomeLeft';
import ProductsHomeRight from './ProductsHomeRight';
class MainProductChild extends Component {
    render() {
        return (
<div className="main-product-child">
  <div className="row">
    <CategoryHomeLeft data={this.props.data} />
    <ProductsHomeRight data={this.props.data} />
  </div>
</div>

        );
    }
}

export default MainProductChild;