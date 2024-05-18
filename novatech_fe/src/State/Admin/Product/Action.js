import axios from "axios"
import { API_BASE_URL } from "../../../Config/apiConfig"
import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, UPDATE_PRODUCTS_FAILURE, UPDATE_PRODUCTS_REQUEST, UPDATE_PRODUCTS_SUCCESS } from "./ActionType"

export const createProduct = (reqData) => async (dispatch) => {
    dispatch({type:CREATE_PRODUCTS_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/products`, reqData)
        dispatch({type: CREATE_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CREATE_PRODUCTS_FAILURE, payload: error.message})
    }
}

export const updateProduct = (reqData) => async (dispatch) => {
    dispatch({type:UPDATE_PRODUCTS_REQUEST})
    try {
        const {data} = await axios.put(`${API_BASE_URL}/products`, reqData)
        dispatch({type: UPDATE_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UPDATE_PRODUCTS_FAILURE, payload: error.message})
    }
}
export const deleteProduct = (reqData) => async (dispatch) => {
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        const {data} = await axios.delete(`${API_BASE_URL}/products/${reqData}`)
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: DELETE_PRODUCT_FAILURE, payload: error.message})
    }
}

