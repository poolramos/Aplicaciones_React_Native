import {SELECT_ITEM} from '../actions/productlist.action'
import {products} from '../../mockupdata/Products'


const INITIAL_STATE = {
    list:products,
    selected:null,
}

const ProductListReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default ProductListReducer;