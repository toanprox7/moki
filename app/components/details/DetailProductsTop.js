import React, { Component } from 'react';
import ImgZoom from './ImgZoom';
import InfoProductDetails from './InfoProductDetails';

class DetailProductsTop extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
   
    render() {
        // console.log(this.state.infoId)
        return (
<div className="detail-product-moki">
  <div className="row">
  <ImgZoom info={this.props.info}/>
  <InfoProductDetails 
  info={this.props.info}
  />  
  </div>
</div>

        );
    }
}

  export default DetailProductsTop;