import React, { Component } from 'react';
import ItemChildCate from './ItemChildCate';
import { connect } from 'react-redux'
class ItemCategory extends Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  cay = (parentId) =>{
    const result=[];
        this.props.listCategory.filter( (item) => {
          return item.parentId === parentId;
      }).forEach( (item) => {
        result.push({
          id:item.id,
          name:item.name,
          parentId: this.cay(item.id)
        })

      })
     return result;
  }
  mapping = (data) => {
    var idTang=0;
    if(typeof data !== "undefined") {
        return (data.map((item) => {return(<li key={item.id} className={`btn-click-collap${idTang++}`}><ItemChildCate id={item.id} key={item.id} name={item.name} /><ul id={`collapse${idTang++}`}>{this.mapping(item.parentId)}</ul></li>)}))
      }
  }

    render() {
        return (
            <div>
   <div className="panel panel-default">
      <div className="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
          <h4 className="panel-title-moki">
            {/* {this.cay(0)} */}
          </h4>
        </a>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
            <div className="panel-body">
      {/* <ItemChildCate/> */}
      <ul>
{this.mapping(this.cay(0))}
      </ul>

            </div>
          </div>
    </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      listCategory: state.categoryReducer.listCategory
  }
}
export default connect(mapStateToProps,null)(ItemCategory);
