import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetailProductsTop from './DetailProductsTop';
import TabBoxResCmt from './TabBoxResCmt';
import ProductFromShop from './ProductFromShop';
import ProductSameCategory from './ProductSameCategory';
class HomeDetails extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    componentWillMount() {
        document.title="Chi tiet san pham";
        let id = this.props.match.params.id;
        this.props.products.map((value,key) => {
            if(id == value.id){
                this.setState({
                  infoId:value
                });
            }
        })
      }
      
    render() {
        return (
            <div>
               <DetailProductsTop info={this.state.infoId} /> 
               <TabBoxResCmt info={this.state.infoId} />
               <ProductFromShop data={this.props.products} info={this.state.infoId}/>
               <ProductSameCategory data={this.props.products} info={this.state.infoId}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
        products:state.productsReducer.products
    }
  }
export default connect(mapStateToProps,null)(HomeDetails)