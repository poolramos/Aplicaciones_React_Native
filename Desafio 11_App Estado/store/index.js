import {createStore,combineReducers} from 'redux'
import PrdListReducer from './reducers/productlist.reducer'
import CartListReducer from './reducers/cart.reducer'


const RootReducer = combineReducers({
    prdlist: PrdListReducer,
    cartlist:CartListReducer,
})

export default createStore(RootReducer)