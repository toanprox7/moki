import React, { Component } from 'react';
import PaginationList from './PaginationList';
import ItemProducts from './ItemProducts';
class ListMainMoki extends Component {
   
    render() {
        // console.log(this.props.dataCate);
        const mapProducts = this.props.dataCate.map(item => {
            return item.idDm.map((item2,index) => {
                if(item2.id == this.props.id){
                    return <ItemProducts key={index} dataProduct={item} id={item.id} />
                }
            })
        })
        return (
<div className="list-main-moki">
  <div className="row">
    {mapProducts}
  </div>
    <PaginationList totalPage={this.props.totalPage} idpage={this.props.idpage} id={this.props.id} />
    {/* {this.pagenation(this.props.data.length,1,9)} */}
    
</div>

        );
    }
}


export default ListMainMoki;