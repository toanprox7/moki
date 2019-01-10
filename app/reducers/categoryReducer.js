import {
    GET_DATA
  } from '../actions'

import {categoryInitialState} from '../OldState/categoryState'  
  
const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return (
            Object.assign({},state,{
                list: [...action.getDataAdd],
            })
            )

        default:
            return state
    }
}
export default categoryReducer;