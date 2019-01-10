import React, { Component } from 'react';
import ItemNewProduct from './ItemNewProduct';
import {connect} from 'react-redux';
class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  
  
  componentWillMount() {
    var cat = this.props.getDataProduct.slice(this.props.getDataProduct.length-5,this.props.getDataProduct.length);
    this.setState({
      data:cat
    });
  }
  
    render() {
      const mapNewProduct = this.state.data.map((item,key) => {
        return <ItemNewProduct key={key} data={item} />
      })
        return (
<div className="product-new">
  <div className="menu-title-product-new">
    <p>San pham moi nhat</p>
    <div className="border-bottom-menu"><hr /></div>
  </div>
{mapNewProduct}
</div>

        );
    }
}
const mapStateToProps = state => ({
    getDataProduct: state.productsReducer.products
})
export default connect(mapStateToProps, null)(NewProduct)