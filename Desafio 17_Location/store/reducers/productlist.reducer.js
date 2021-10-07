import {SELECT_ITEM,ADD_ITEM} from '../actions/productlist.action'
import {products} from '../../mockupdata/Products'


const INITIAL_STATE = {
    list:[],
    selected:null,
}

const ProductListReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                list: state.list.concat(action.payload)
            }
        default:
            return state
    }
}

export default ProductListReducer;