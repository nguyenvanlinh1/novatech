import { api } from "../../../Config/apiConfig"
import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from "./ActionType"

export const deleteUser = (reqData) => async (dispatch) =>{
    dispatch({type: DELETE_USER_REQUEST})
    try {
        const {data} = await api.delete(`/users/${reqData}`)
        dispatch({type: DELETE_USER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: DELETE_USER_FAILURE, payload: error.message})
    }
}