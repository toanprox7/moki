import React, { Component } from 'react';
import BannerListMain from './BannerListMain';
import ListMainMoki from './ListMainMoki';
import DesMain from './DesMain';
import {connect} from 'react-redux';
import { editDataPagination } from '../../actions';
class ListProductsRight extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataCategoryProduct:[]
        }
    }
    componentWillMount(){
        document.title="Trang danh muc";
        this.handleArrayCate();
        
    }
    handleArrayCate=() =>{
        var arrayDataFollowCategory = [];
        this.props.getDataProducts.map( item => {
            return item.idDm.map( (item2,index) => {
                if(item2.id == this.props.match.params.id){
                    return arrayDataFollowCategory.push(item);
                }
            })
        })
        const limit =9
        const start = (this.props.match.params.idpage - 1) * limit;
        const end = start + limit;
        const total_page = Math.ceil(arrayDataFollowCategory.length / limit);
        let cat = arrayDataFollowCategory.slice(start,end);
         this.setState({
            dataCategoryProduct:cat,
            total_page
        });
        //  this.props.editDataPagination(this.state.dataCategoryProduct);
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        var arrayDataFollowCategory = [];
        nextProps.getDataProducts.map( item => {
            return item.idDm.map( (item2,index) => {
                if(item2.id == nextProps.match.params.id){
                    return arrayDataFollowCategory.push(item);
                }
            })
        })
        const limit =9
        const start = (nextProps.match.params.idpage - 1) * limit;
        const end = start + limit;
        const total_page = Math.ceil(arrayDataFollowCategory.length / limit);
        let cat = arrayDataFollowCategory.slice(start,end);
         this.setState({
            dataCategoryProduct:cat,
            total_page
        });
    }
    
    render() {
        // console.log(this.state.dataCategoryProduct[0].idDm[0])
        return (
                <div className="List-main-product">
                <BannerListMain banner={this.state.dataCategoryProduct[0].idDm[0].banner_main} />
                <ListMainMoki totalPage={this.state.total_page} id={this.props.match.params.id} idpage={this.props.match.params.idpage} dataCate={this.state.dataCategoryProduct}/>
                <DesMain titleDes={this.state.dataCategoryProduct[0].idDm[0].title_des} 
                contentDes={this.state.dataCategoryProduct[0].idDm[0].content_des}/>
                </div>
        );
    }
}
const mapDispatchToProps =dispatch => ({
    editDataPagination: (getInfoPagination) => dispatch(editDataPagination(getInfoPagination))
})
const mapStateToProps = state => {
    return {
        getDataProducts:state.productsReducer.products,
        getDataPagination:state.productsReducer.dataPagination
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProductsRight);