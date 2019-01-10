import {productsInitialState} from '../OldState/productsState'  
import {EDIT_DATA_PAGINATION} from '../actions';
const productsReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case EDIT_DATA_PAGINATION:
        return { 
            ...state, 
            dataPagination:[...action.getInfoPagination]
         }   
        default:
            return state
    }
}
export default productsReducer;