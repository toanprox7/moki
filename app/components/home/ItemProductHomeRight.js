import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
class ItemProductHomeRight extends Component {
    render() {
        return (
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{paddingLeft: 5, paddingRight: 5}}>
                  <div className="block-product-l">
                    <div className="block-img-product-l">
                      <Link to={`/chi-tiet/${this.props.data.id}`}><img className="img-responsive" src={this.props.data.anh_product} /></Link>
                    </div>
                    <div className="info-product text-center">
                      <Link to={`/chi-tiet/${this.props.data.id}`}><p className="name-product">{this.props.data.title}</p></Link>
                      <div className="ratting">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="price-product">
                        <p className="price"> <NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></p>
                      </div>
                    </div>
                  </div>
                </div>
              
        );
    }
}

export default ItemProductHomeRight;