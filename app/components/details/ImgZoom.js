import React, { Component } from 'react';

class ImgZoom extends Component {
    render() {
        return (
<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
  <div className="img-product-moki">
    <img src={this.props.info.anh_product} alt="img" width="400px" height="400px" />
  </div>
</div>

        );
    }
}

export default ImgZoom;