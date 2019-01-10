import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import {NavLink, Link} from 'react-router-dom';
class ItemProducts extends Component {
    render() {
        return (
            <div>
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="block-product">
        <div className="block-img-product">
          <Link to={`/chi-tiet/${this.props.dataProduct.id}`}><img className="img-responsive" src={this.props.dataProduct.anh_product} /></Link>
        </div>
        <div className="info-product text-center">
        <Link to={`/chi-tiet/${this.props.dataProduct.id}`}><p className="name-product">{this.props.dataProduct.title}</p></Link>
          <div className="ratting">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <div className="price-product">
            <p className="price"><NumberFormat value={this.props.dataProduct.price} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></p>
          </div>
        </div>
        <div className="bottom-box-list" />
      </div>
    </div>
                 
            </div>
        );
    }
}

export default ItemProducts;