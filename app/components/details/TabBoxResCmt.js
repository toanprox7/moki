import React, { Component } from 'react';
import ItemCmt from './ItemCmt';

class TabBoxResCmt extends Component {
    render() {
      const mapItem= this.props.info.idCmt.map((item,key) => {
        return <ItemCmt key={key} data={item}/>
      })
        return (
<div className="tab-box">
  <div className="box-tab-moki">
    <ul className="nav-tabs">
      <li className="active"><a data-toggle="tab" href="#des">Mo ta san pham</a></li>
      <li><a data-toggle="tab" href="#feedBack">Danh gia, phan hoi</a></li>
    </ul>    
  </div>
  <div className="tab-content">
    <div id="des" className="tab-pane fade in active">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        </div>
      </div>
      <p>{this.props.info.Des}</p>
    </div>
    <div id="feedBack" className="tab-pane fade">
      <div className="list-cmt">
      {mapItem}
      </div>
      <div className="input-cmt">
        <h3 style={{paddingLeft: 30}} className="head-input">Viết bình luận:</h3>
        <div className="info-input-cmt">
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{width: '1%'}}>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{paddingRight: 0}}>
              <div className="img-input-cmt">
                <img src="/img/product/bc712c3e15a864c2a520e7ac05c6d8bf.jpg" className="img-responsive" alt />
              </div>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <div className="textArea-cmt">
                <textarea rows={4} cols={50} placeholder="Y kien cua ban..." defaultValue={""} />
                <button className="btn-send">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default TabBoxResCmt;