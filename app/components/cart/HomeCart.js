import React, { Component } from 'react';
import ListCart from './ListCart';
import InfoCart from './InfoCart';
import {connect} from 'react-redux';
import {getDataSl, editData} from '../../actions';
class HomeCart extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
 

componentWillMount() {
this.SetState();

}

SetState = async() => {
  var array=[];
this.props.getDataCart.map(item => {
  if(item.soLuong>0){
    array.push(item);
    return array;
  }
})
await this.setState({
  dataCart:array
});

this.getDataLocal();
}

getDataLocal = async() =>{
var arrayLocal = await JSON.parse(localStorage.getItem("cart"));
await this.setState({
  dataCart:arrayLocal
});
}

handleDataInfoId=(dataId) =>{
  var arraySl=[];
   this.props.getDataCart.map(item => {  
     if(item.id == dataId.id){
  
      let info= {
        id:item.id,
        title:item.title,
        rateting:item.rateting,
        price:item.price,
        idShop:item.idShop,
        status:item.status,
        idDm:item.idDm,
        Des:item.Des,
        idCmt:item.idCmt,
        anh_product:item.anh_product,
        ngay_dang:item.ngay_dang,
        ngay_update:item.ngay_update,
        soLuong:dataId.soLuong
    };
      return arraySl.push(info);
     }
   })

   this.state.dataCart.map(item => {
    if(item.id === dataId.id){
     return item.soLuong =dataId.soLuong;
    }
  })

  //  console.log(valueAsNumber);
   this.props.editDataCart(arraySl);

   this.totalMonney(dataId);
}

totalMonney = async(dataId) =>{
  var arrayTotal =[];
  this.state.dataCart.map(item => {
    var total = item.price * item.soLuong;
    arrayTotal.push(total)
    return arrayTotal;
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if(arrayTotal.length >0){
  await this.setState({
    total:arrayTotal.reduce(reducer)
  });
}

this.getChangeMountLocal(dataId)
}

getChangeMountLocal =async (dataId) =>{
  var arrayLocal = await JSON.parse(localStorage.getItem("cart"));
  arrayLocal.map(item => {
   if(item.id === dataId.id){
    return item.soLuong =dataId.soLuong;
   }
 })
 await localStorage.setItem("cart",JSON.stringify(arrayLocal));
 
}


componentDidMount() {
  var arrayTotal =[];
  this.state.dataCart.map(item => {
    var total = item.price * item.soLuong;
    arrayTotal.push(total)
    return arrayTotal;
  })
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if(arrayTotal.length >0){
  this.setState({
    total:arrayTotal.reduce(reducer)
  });
}
this.getTotalLocal();
}

getTotalLocal=async () =>{
  var TotalCart = await JSON.parse(localStorage.getItem("cart"));
  var arrayTotal =[];
  TotalCart.map(item => {
    var total = item.price * item.soLuong;
    arrayTotal.push(total)
    return arrayTotal;
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if(arrayTotal.length >0){
  await this.setState({
    total:arrayTotal.reduce(reducer)
  });
}

}


deleteId =(id) =>{
  var arraySl=[];
   this.props.getDataCart.map(item => {
     if(item.id === id){
      let info={
        id:item.id,
        title:item.title,
        rateting:item.rateting,
        price:item.price,
        idShop:item.idShop,
        status:item.status,
        idDm:item.idDm,
        Des:item.Des,
        idCmt:item.idCmt,
        anh_product:item.anh_product,
        ngay_dang:item.ngay_dang,
        ngay_update:item.ngay_update,
        soLuong:0
      };
      return arraySl.push(info);
     }
   })

   this.state.dataCart.map(item => {
    if(item.id === id){
     return item.soLuong =0;
    }
  })
  this.props.editDataCart(arraySl);
    var dataCartDelete = Object.assign({},this.state,{
    dataCart:[...this.state.dataCart.filter(item => item.id != id)],
  })

   this.setState({
    dataCart:dataCartDelete.dataCart
  });
  this.deleteLocalItem(id)
}

deleteLocalItem = async(id) =>{
  var arrayLocal = await JSON.parse(localStorage.getItem("cart"));
  var arrayLocalNew = await arrayLocal.filter(item => item.id !== id);
  await localStorage.setItem("cart",JSON.stringify(arrayLocalNew));
  this.totalMonneyDelete()
}

totalMonneyDelete = () =>{
  var arrayTotal =[];
  this.state.dataCart.map(item => {
    var total = item.price * item.soLuong;
    arrayTotal.push(total)
    return arrayTotal;
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if(arrayTotal.length >0){
   this.setState({
    total:arrayTotal.reduce(reducer)
  });
}else if(arrayTotal.length<=0){
  this.setState({
    total:0
  });
}
}


    render() {
        return (
<div className="main-shopping-carts">
  <div className="container">
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <ListCart deleteId={id => this.deleteId(id)} dataInfoId={dataId => this.handleDataInfoId(dataId)} data={this.state.dataCart}/>
      </div>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
       <InfoCart total={this.state.total}/>
      </div>
    </div>
  </div>
</div>

        );
    }
}
const mapDispatchToProps = dispatch => ({
  editDataCart: getInfo => dispatch(editData(getInfo))
})
const mapStateToProps = (state) => {
  return {
    getDataCart: state.cartReducer.dataCart
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeCart)