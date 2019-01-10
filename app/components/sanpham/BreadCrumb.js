import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link,NavLink} from 'react-router-dom';
class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  componentWillMount=() => {
    this.props.products.map(item => {
      if(item.id == this.props.match.params.idSp){
        this.setState({
          titleProduct:item.title
        });
      }
    })
  }
  cay=(parentId) => {
    var arrayCay=[];
  this.props.listCategory.filter(item => {
    return item.id == parentId
  }).forEach(item2 => {
    arrayCay.push({
      id:item2.id,
      name:item2.name,
      parentId:this.cay(item2.parentId)
    })
  });
  return arrayCay;
  }

  mapCay=(data) =>{
    if(typeof data !== "undefined") {
      return (data.map((item,key) => {return(<li key={key+1} ><NavLink to={`/san-pham/${item.id}/1`}>{item.name}</NavLink>{this.mapCay(item.parentId)}</li>)}))
    }
  }
    render() {
      // console.log(this.props.match.params.idSp);
        return (
<div className="breadCrumb">
  <div className="container">
      <ul>
        <li key={0} className="head-li-content"><NavLink to="/">MOKI</NavLink></li>
      {this.mapCay(this.cay(this.props.match.params.idCate))}
        <li>{this.state.titleProduct}</li>
      </ul>
   
  </div>
</div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    listCategory: state.categoryReducer.listCategory,
    products:state.productsReducer.products
  }
}
export default connect(mapStateToProps, null)(BreadCrumb)