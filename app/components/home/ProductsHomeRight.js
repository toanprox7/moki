import React, { Component } from 'react';
import ItemProductHomeRight from './ItemProductHomeRight';
import {connect} from 'react-redux';
class ProductsHomeRight extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    
    
    componentWillMount() {
        var arrayData = [];
        this.props.products.map(item =>{
            return item.idDm.map((item2,key) => {
                if(item2.id === this.props.data.id){
                    return arrayData.push(item);
                    
                }
            })
        })
        
       var cat = arrayData.slice(arrayData.length-9,arrayData.length);
       this.setState({
           data:cat
       });
    }
    
    render() {
       const mapItem = this.state.data.map((item,key) => {
        return <ItemProductHomeRight key={key} data={item}/>
       })
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="main-right">
              <div className="row">
                {mapItem}
              </div>
            </div>
          </div>
      
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.productsReducer.products
    }
}
export default connect(mapStateToProps, null)(ProductsHomeRight)