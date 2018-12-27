
import {combineReducers} from 'redux'
import cart from './cartReducer'
import total from './totalReducer'
import profile from './profileReducer'
import products from './productsReducer'
import previewItem from './previewItem'

export default combineReducers({
    previewItem,
    cart,
    total,
    profile,
    products
})