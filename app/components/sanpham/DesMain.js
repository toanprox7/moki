import React, { Component } from 'react';

class DesMain extends Component {
    render() {
        return (
<div className="des-category">
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h3 className="title-des-category">{this.props.titleDes}</h3>
      <p className="content-des-category">
      {this.props.contentDes}
      </p>
      <h4 className="back-home"><a href="/index.html">MOKI - Giúp các mẹ trao đổi đồ.</a></h4>
    </div>
  </div>
</div>

        );
    }
}

export default DesMain;