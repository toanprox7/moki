import React, { Component } from 'react';
import BannerMain from './BannerMain';
import ProductHot from './ProductHot';
import BannerMainOnePicture from './BannerMainOnePicture';
import MainProductChild from './MainProductChild';
import RightMain from '../common/RightMain';
import BlockCategory from './BlockCategory';
import {connect} from 'react-redux';
class HomeRightMain extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    componentWillMount() {
        document.title="Trang chu moki"
        var arrayCateleve1 =[];
       this.props.getDataCategory.map(item =>{
            if(item.parentId == 0){
                return arrayCateleve1.push(item);
            }
        })
        this.setState({
            dataCateleve1:arrayCateleve1
        });
    }
    
    
    render() {
        // console.log(this.state.dataCateleve1);
        const mapCateProduct = this.state.dataCateleve1.map((item,key) => {
            return <BlockCategory data={item} key={key}/>

        })
        return (
               <div>
                    <BannerMain/>
                    <ProductHot data={this.props.getDataProduct}/>
                    {mapCateProduct}
               </div>
        );
    }
}
const mapStateToProps = (state) => ({
        getDataCategory: state.categoryReducer.listCategory,
        getDataProduct:state.productsReducer.products
})
export default connect(mapStateToProps, null)(HomeRightMain)