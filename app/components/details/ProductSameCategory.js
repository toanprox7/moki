import React, { Component } from 'react';
import ItemProductSameCategory from './ItemProductSameCategory';
import OwlCarousel from 'react-owl-carousel2';

const options = {
  items: 3,
  loop: true,
  autoplay: true,
  dots:false,
  nav:true,
  margin:10
};

class ProductSameCategory extends Component {
    render() {
      const mapProduct= this.props.data.map((item,key) =>{
        if(item.idDm[0].id === this.props.info.idDm[0].id){
          return <ItemProductSameCategory key={key} data={item}/>
        }
      })
        return (
<div className="product-from-shop">
  <div className="box-detail">
    <p className="detail-p">Cac san pham cung danh muc</p> 
  </div>
<OwlCarousel ref="car" options={options} >
  {mapProduct}
</OwlCarousel>
</div>

        );
    }
}

export default ProductSameCategory;