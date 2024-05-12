import { api } from "../../../Config/apiConfig"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./ActionType"


export const getProducts = (reqData) => (dispatch) => {
    dispatch({type: GET_PRODUCTS_REQUEST})
    const {
        pageNumber,
        pageSize,
    } = reqData;
    try{
        const {data} = api.get(`/products?pageNumber=${pageNumber}&pageSize=${pageSize}`);
        dispatch({type:GET_PRODUCTS_SUCCESS, payload: data})
    }   
    catch(error){
        dispatch({type:GET_PRODUCTS_FAILURE, payload: error})
    }
}