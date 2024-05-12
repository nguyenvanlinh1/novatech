import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./ActionType"

const inti = {
    products: [],
    product: null,
    loading: false,
    error: null
}

export const userProductReducer = (state = inti, action) => {
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {...state, loading: true, error: null}
        case GET_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload, error: null}
        case GET_PRODUCTS_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}