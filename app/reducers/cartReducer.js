import {cartInitialState} from '../OldState/dataState'  
import {
    ADD_DATA, DELETE_DATA, ADD_DATA_SL,EDIT_DATA
  } from '../actions'
 
const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_DATA:
        return Object.assign({}, state, {
            dataCarted: [...state.dataCarted.concat(action.getInfoId)],
        });
        case EDIT_DATA:
        return { 
            ...state, 
            dataCart: state.dataCart.map(
                (data, i) => data.id == action.getInfo[0].id ? {...action.getInfo[0]}
                                        : data
            )
         } 
        
        //  case EDIT_DATA:
        //  return Object.assign({},state,{
        //      dataCart:[...state.dataCart.map(item => {
        //          if(item.id === action.getInfo.id){
        //              console.log(item);
        //          } 
        //      })]
        //  })
        case DELETE_DATA:
            return Object.assign({},state,{
              dataSl:[...state.dataSl.filter(item => item.id != action.dataCart)],
            });

        case ADD_DATA_SL:
        return Object.assign({}, state, {
            dataSl: [...state.dataSl.map(item =>{
                action.getDataSoLuong.map(item2 => {
                    if(item.id == item2.id){
                        return console.log("sai")
                    }else{
                        return console.log(item2);
                    }
                })
            })],
        });
        default:
            return state
    }
}
export default cartReducer;