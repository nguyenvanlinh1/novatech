import { api } from "../../../Config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_HISTORY_ORDER_FAILURE, GET_HISTORY_ORDER_REQUEST, GET_HISTORY_ORDER_SUCCESS } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) =>{
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const {data} = await api.post("/order", reqData)

        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CREATE_ORDER_FAILURE, payload: error.message})
    }
}

export const orderHistory = () => async (dispatch) =>{
    dispatch({type: GET_HISTORY_ORDER_REQUEST})
    try {
        const {data} = await api.get("/order");
        dispatch({type: GET_HISTORY_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_HISTORY_ORDER_FAILURE, payload: error.message})
    }
}