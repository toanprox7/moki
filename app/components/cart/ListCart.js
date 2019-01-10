import React, { Component } from 'react';
import ItemProductCart from './ItemProductCart';

class ListCart extends Component {
  constructor(props) {
    super(props);
    this.state={
    
    }
  }
  
  handleGetDataInfoId=(dataId) =>{
    this.props.dataInfoId(dataId)
  }
  deleteId =(id) =>{
    this.props.deleteId(id);
  }
    render() {
      // console.log(this.state.data);
      const checkData = (this.props.data != null)?this.props.data.length:console.log("ko co data");
    const Mapping =(this.props.data != null) ? this.props.data.map((item,key) => {
      return (<ItemProductCart deleteId={id => this.deleteId(id)} dataInfoId={dataId => this.handleGetDataInfoId(dataId)} key={key} data={item}/>)
  }) : console.log("Khong ton tai san pham nao he");
        return (
<div className="products-list-cart">
          <div className="headdings-cart">
            <h5>Giỏ hàng của tôi</h5>
            <span className="number-products-list">( {checkData}/{checkData} sản phẩm mua được)</span>
          </div>
          <div className="content-list-cart">
            <table className="table">
              <thead className="head-table-moki">
                <tr>
                  <th>Sản phẩm</th>
                  <th />
                  <th>Giá</th>
                  <th>Mã khuyến mại</th>
                  <th>số lượng</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              {Mapping}
              </tbody>
            </table>                            
          </div>
        </div>
      
        );
    }
}

export default ListCart;