import React, { Component } from 'react';
import ItemCategory from './ItemCategory';
import ItemChildCate from './ItemChildCate';
import {connect} from 'react-redux';
class ListCategory extends Component {
    render() {  
        return (
        
<div className="category">

{/* <button className="btn btn-outline" onClick={() => this.cay(0)}>Click vao day</button> */}
  <div className="panel-group" id="accordion">
    <div className="panel panel-default head-moki">    
      <div className="panel-heading">
        <h4 className="panel-title font-color-moki">
          <i className="fa fa-list" />
          Danh muc san pham
        </h4>
      </div>
    </div>
 
    <ItemCategory/>
  </div> 
</div>

        );
    }
}

export default connect()(ListCategory);