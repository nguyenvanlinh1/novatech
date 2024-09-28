import { api } from "../../../Config/apiConfig"
import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, UPDATE_PRODUCTS_FAILURE, UPDATE_PRODUCTS_REQUEST, UPDATE_PRODUCTS_SUCCESS } from "./ActionType"

export const createProduct = (reqData) => async (dispatch) => {
    dispatch({type:CREATE_PRODUCTS_REQUEST})
    try {
        const {data} = await api.post(`/products`, reqData)
        console.log("Data", data)
        dispatch({type: CREATE_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CREATE_PRODUCTS_FAILURE, payload: error.message})
    }
}

export const updateProduct = (productId, quantity) => async (dispatch) => {
    dispatch({type:UPDATE_PRODUCTS_REQUEST})
    try {
        const {data} = await api.put(`/products/${productId}`, quantity)
        dispatch({type: UPDATE_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UPDATE_PRODUCTS_FAILURE, payload: error.message})
    }
}
export const deleteProduct = (reqData) => async (dispatch) => {
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        const {data} = await api.delete(`$/products/${reqData}`)
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: DELETE_PRODUCT_FAILURE, payload: error.message})
    }
}

export const getAllProducts = () => async (dispatch) => {
    dispatch({type:GET_ALL_PRODUCTS_REQUEST})
    try {
        const data = await api.get(`/products/all`)
        console.log("Data", data)
        dispatch({type: GET_ALL_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_ALL_PRODUCTS_FAILURE, payload: error.message})
    }
}

