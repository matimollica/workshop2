import {FILTER_PRODUCT, DECREMENT_STOCK} from './../actions'

export default function (state = [], action){
    switch(action.type){
        case 'FETCH_PRODUCTS':
            state = state.concat(action.products)
            break;
        case FILTER_PRODUCT:
            return state = state.filter(product => product.id != action.product )
        break
        case DECREMENT_STOCK:
            return state = state.map((product) => {
                if(product.id == action.productId){
                    product.stock--
                }
                return product
            });
        break;
    }
    return state;
}