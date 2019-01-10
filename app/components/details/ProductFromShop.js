import React, { Component } from 'react';
import ItemProductFromShop from './ItemProductFromShop';
import OwlCarousel from 'react-owl-carousel2';
import {Link} from 'react-router-dom';
const options = {
  items: 3,
  dots: false,
  autoplay: true,
  loop:true,
  nav:true,
  
  margin:10
};
class ProductFromShop extends Component {
    render() {
        const mapShop = this.props.data.map((item,key) => {
            if(item.idShop[0].id === this.props.info.idShop[0].id){
                return <ItemProductFromShop key={key} data={item}/>
            }
        })
        return (
<div className="product-from-shop">
  <div className="box-detail">
    <p className="detail-p">Cac san pham ban tu shop: <Link to="/">{this.props.info.idShop[0].name}</Link></p>
  </div>
<OwlCarousel ref="car" options={options} >
{mapShop}
</OwlCarousel>

</div>

        );
    }
}

export default ProductFromShop;