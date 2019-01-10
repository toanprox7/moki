import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
var redux = require('redux');

export default combineReducers({
    categoryReducer,
    cartReducer,
    productsReducer
})
// export default ListReducer