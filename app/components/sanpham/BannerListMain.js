import React, { Component } from 'react';

class BannerListMain extends Component {
    render() {
        return (
<div className="row">
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div className="banner-list-main">
      <img src={this.props.banner} className="img-responsive" />
    </div>        
  </div>
</div>
        );
    }
}

export default BannerListMain;