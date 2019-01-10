import React, { Component } from 'react';
import {deleteId,editData} from '../../actions/index';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import NumericInput from 'react-numeric-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ItemProductCart extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  
  
 
  
  handleDelete=(id)=>{
   this.props.deleteId(id)

  }
   handChange= valueAsNumber=>{
     var objInfo={ id:this.props.data.id,
      soLuong:valueAsNumber};
    this.props.dataInfoId(objInfo);
  }



    render() {
        return (
            <tr>
            <td className="img-name-tab"><a href="#"><img width="70px" height="70px" src={this.props.data.anh_product} className="img-responsive" /></a></td>
            <td className="name-tab">
              <p className="name-ng-binding">{this.props.data.title}</p>
              <p className="shopping-name">Shop <a href="#" className="ng-binding">{this.props.data.idShop[0].name}</a></p>
            </td>
            <td className="price-tab">
              <p className="ng-binding"><NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></p>
            </td>
            <td className="coupon-tab">
              <input type="text" placeholder="Ma khuyen mai" className="form-control" />
            </td>
            <td><NumericInput min={0} max={100} onChange={this.handChange} value={this.props.data.soLuong} className="form-control" /></td>
            <td className="del">
                <span><FontAwesomeIcon onClick={(id) => this.handleDelete(this.props.data.id)} icon="times" /></span>
            </td>
          </tr>
        
        );
    }
}

const mapDispatchToProps = dispatch => ({
  deleteData: dataCart => dispatch(deleteId(dataCart)),
  editDataCart: getInfo => dispatch(editData(getInfo))
})

const mapStateToProps = (state) => {
  return {
    getDataCart:state.cartReducer.dataCart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemProductCart)
