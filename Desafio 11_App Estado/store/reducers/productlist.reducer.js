import {SELECT_ITEM} from '../actions/productlist.action'
import {products} from '../../mockupdata/Products'


const INITIAL_STATE = {
    list:products,
    selected:null,
}

const ProductListReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case SELECT_ITEM:
            return{
                ...state,
                list:state.list.find(item=>item.id == action.payload)
            }
        default:
            return state
    }
}

export default ProductListReducer;