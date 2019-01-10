import React, { Component } from 'react';

class BannerMain extends Component {
    render() {
        return (
<div className="banner-main">
  <div className="row">
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="banner-main-l">
        <a href="#"><img className="img-responsive	banner" src="/img/devWeb/home/1167610aa17b0813233fe82d99403e41.jpg" alt="banner-l" /></a>
      </div>
    </div>
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="banner-main-r">
        <a href="#"><img className="img-responsive banner" src="/img/devWeb/home/24a24183a231fd83ec5fdcf9fe16cec9.jpg" alt="banner-r" /></a>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default BannerMain;