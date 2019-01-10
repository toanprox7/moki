import React, { Component } from 'react';

class ItemCmt extends Component {
    render() {
        return (
            <div className="list-cmt-moki">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{width: '1%'}}>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{paddingRight: 0}}>
                {/* <p>tets</p> */}
                <div className="img-cmt">
                  <img src="/img/product/bc712c3e15a864c2a520e7ac05c6d8bf.jpg" className="img-responsive" alt="img" />
                </div>
              </div>
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="cmt-item">
                  <p className="top-head-cmt">Boi <span className="time-pink"> {this.props.data.name_user}</span> luc <span className="time-pink">03:30pm 01/02/2018</span></p>
                  <p className="cmt-content">{this.props.data.noi_dung}</p>
                </div>
              </div>
            </div>
          </div>
        
        );
    }
}

export default ItemCmt;