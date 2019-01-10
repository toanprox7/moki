import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
class CategoryHomeLeft extends Component {
    render() {
        const mapCateLeve2 = this.props.listCategory.map(item => {
            if(item.parentId == this.props.data.id){
                return  <li key={item.id}><Link to={`/san-pham/${item.id}/1`}>{item.name}</Link></li>
            }
        })
        // console.log(this.props.data)
        return (
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="main-left">
        <div className="head-title-l">
          <p>{this.props.data.name}</p>
          <div className="border-bottom-menu"><hr /></div>
        </div>
        <div className="main-body-l">
          <ul>
           {mapCateLeve2}
          </ul>
        </div>
      </div>
      <div className="banner-l">
        <img src={this.props.data.banner_left} alt="banner-l" />
      </div>
    </div>
    
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        listCategory: state.categoryReducer.listCategory
    }
}
export default connect(mapStateToProps, null)(CategoryHomeLeft)