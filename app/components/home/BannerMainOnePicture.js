import React, { Component } from 'react';

class BannerMainOnePicture extends Component {
    render() {
        return (
<div className="banner-main-one-picture">
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <a href="#"><img className="img-responsive" src={this.props.data.banner_across} /></a>
    </div>
  </div>
</div>

        );
    }
}

export default BannerMainOnePicture;