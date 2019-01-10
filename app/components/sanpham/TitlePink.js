import React, { Component } from 'react';
import {connect} from 'react-redux';
class TitlePink extends Component {
  handleMap=() =>{
    var arrayName=[];
    this.props.category.map(item =>{
      if(item.id == this.props.match.params.id){
        return arrayName.push(item.name);
      }
    })
    return arrayName
  }
    render() {
      const nameCate=this.handleMap().map((item,key) => {
        return <h2 key={key} className="new-title-pink">{item}</h2>
      })
        return (
<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="heading-new-pink text-center">
        {nameCate}
        <div className="box-bor" />
      </div>
    </div>
  </div>
</div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      category: state.categoryReducer.listCategory
  }
}
export default connect(mapStateToProps, null)(TitlePink)