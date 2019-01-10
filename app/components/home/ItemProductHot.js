import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
class ItemProductHot extends Component {
    render() {
        return (
            <div className="item">
            <Link to={`/chi-tiet/${this.props.data.id}`}><img className="img-responsive" src={this.props.data.anh_product} /></Link>
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
                <p className="price"><NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></p>
              </div>
            </div>
          </div>
        );
    }
}

export default ItemProductHot;