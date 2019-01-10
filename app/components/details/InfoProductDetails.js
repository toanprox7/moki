import React, { Component } from 'react';
import {infoId,getDataSl,editData} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
class InfoProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
    }

  }
  
  
handButton=  (info) =>{
  var arraySl = [];
  this.props.getDataCart.map( item => {
    if(info.id === item.id){
      let info= {
        id:item.id,
        title:item.title,
        rateting:item.rateting,
        price:item.price,
        idShop:item.idShop,
        status:item.status,
        idDm:item.idDm,
        Des:item.Des,
        idCmt:item.idCmt,
        anh_product:item.anh_product,
        ngay_dang:item.ngay_dang,
        ngay_update:item.ngay_update,
        soLuong:++item.soLuong
    };
       arraySl.push(info);
      return arraySl;
    }
  })
   this.props.editDataCart(arraySl);

  var arrayIdLocal=  [];
  this.props.getDataCart.map(item => {
    if(item.soLuong > 0){
      return arrayIdLocal.push(item)
    }
  })

  localStorage.setItem("cart", JSON.stringify(arrayIdLocal));

  alert("Ban da mua san pham thanh cong, vui long xem trong gio hang");
}
checkStatus=()=>{
  if(this.props.info.status ===1){
    return "new 100%"
  }else if(this.props.info.status ===2){
    return "new 99%"
  }else if(this.props.info.status ===3){
    return "new 95%"
  }
}
    render() {
      // console.log(this.state.listInfo);
      const mapCate = this.props.info.idDm.map((item,key) => {
        return <Link key={key} to={`/san-pham/${item.id}/1`}>{item.name} , </Link>
      })

        return (
<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
  <div className="product-detail-right">
    <div className="info-name-price-product">
      <div className="info-product text-left">
        <p className="name-product">{this.props.info.title}</p>
        <div className="ratting">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
        <div className="price-product">
          <p className="price"> <NumberFormat value={this.props.info.price} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></p>
        </div>
      </div>
      <hr className="box-short" />
      <div className="info-about-product">
        <p className="info-perty-value">
          <span className="perty-product">San pham ban tu shop:</span> 
          <span className="value-product"><a href="#">{this.props.info.idShop[0].name}</a></span>
        </p>
        <p className="info-perty-value">
          <span className="perty-product">Diem uy tin shop:</span> 
          <span className="value-product">{this.props.info.idShop[0].diem_uy_tin}</span>
        </p>
        <p className="info-perty-value">
          <span className="perty-product">so san pham:</span> 
          <span className="value-product">{this.props.info.idShop[0].so_san_pham}</span>
        </p>
        <p className="info-perty-value">
          <span className="perty-product">Ngay tham gia:</span> 
          <span className="value-product">{this.props.info.idShop[0].ngay_dang_ky}</span>
        </p>
      </div>
      <hr className="box-long" />
      <div className="info-about-category">
        <p className="info-perty-value">
          <span className="perty-product">Trang thai:</span> 
          <span className="value-product">{this.checkStatus()}</span>
        </p>
        <p className="info-perty-value">
          <span className="perty-product">Thuoc danh muc:</span> 
          <span className="value-product">{mapCate}</span>
        </p>
        <p className="info-perty-value">
          <span className="perty-product">Tag:</span> 
          <span className="value-product"><a href="#">bmyt</a>,<a href="#">bmyt</a>,<a href="#">bmyt</a>,<a href="#">bmyt</a>,<a href="#">bmyt</a></span>
        </p>
      </div>
      <div className="click-buying">
        <button className="buying" onClick={info => this.handButton(this.props.info)}>Mua ngay</button>
      </div>
    </div>
  </div>
</div>

        );
    }
}
const mapDispatchToProps = dispatch => ({
  infoId: getInfoId => dispatch(infoId(getInfoId)),
  getDataSoLuong: getDataSoLuong => dispatch(getDataSl(getDataSoLuong)),
  editDataCart: getInfo => dispatch(editData(getInfo))
})
const mapStateToProps = state => ({
  products:state.productsReducer.products,
  getDataCart:state.cartReducer.dataCart
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoProductDetails);