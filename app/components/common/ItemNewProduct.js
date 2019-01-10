import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
class ItemNewProduct extends Component {
    render() {
        return (
            <div className="block-product-new">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="image-product-new">
                  <img src={this.props.data.anh_product} className="img-responsive" />
                </div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{paddingLeft: 0}}>
                <div className="main-product-new">
                  <div className="info-product text-left">
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="bottom-box" />
              </div>
            </div>
          </div>
        
        );
    }
}

export default ItemNewProduct;