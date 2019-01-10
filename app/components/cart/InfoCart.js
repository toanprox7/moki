import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';
import {getDataSl} from '../../actions';
class InfoCart extends Component {
    constructor(props) {
        super(props);
        this.state ={
          
        }
    }
    


   
    render() {
        return (
        <div className="info-cart">
            <div className="headdings-info-cart">
              <h5>Thông tin đơn hàng</h5>
            </div>
            <div className="content-info-cart">
              <div className="table_price">
                <div className="table_price_row row1">
                  <span className="col">Tạm tính:</span>
                  <span className="col text-right ng-binding"><NumberFormat value={this.props.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></span>
                </div>
                <div className="table_price_row row1">
                  <span className="col">Khuyến mại:</span>
                  <span className="col text-right ng-binding">Không</span>
                </div>
              </div>
              <div className="table_price2">
                <div className="table_price_row row1">
                  <span className="col total">
                    Tổng<span className="vat">(Đã bao gồm VAT):</span>
                  </span>
                  <span className="col text-right ng-binding">
                  <NumberFormat value={this.props.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
                  </span>
                </div>
              </div>
              <div className="checkoutnow text-center">
                <button className="btn btn-default btn-block">Đặt hàng</button>
                <Link to="/">Tiếp tục mua hàng</Link>
              </div>
            </div>
          </div>
        
        );
    }
}

const mapDispatchToProps = dispatch => ({
      getDataSl: getDataSl => dispatch(getDataSl)
})
const mapStateToProps = (state) => {
  return {
    getDataSl: state.cartReducer.dataSl
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoCart)