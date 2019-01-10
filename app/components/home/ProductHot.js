import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OwlCarousel from 'react-owl-carousel2';
import ItemProductHot from './ItemProductHot';
const options = {
  items: 4,
  dots: false,
  autoplay: true,
  loop:true,
  margin:10
};

class ProductHot extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  
    render() {
      const mapProduct = this.props.data.map((item,key) => {
        return <ItemProductHot key={key} data={item}/>
      })
        return (
<div className="product-hot">
  <div className="head-product-hot">
    <h1>Sản Phẩm Ưu Đãi Nổi Bật</h1>
    <hr />
  </div>
  <OwlCarousel ref="car" options={options} >
  {mapProduct}
</OwlCarousel>

</div>

        );
    }
}

export default ProductHot;