import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import { authReducer } from "./Auth/Reducer"
import { userProductReducer } from "./User/Product/Reducer"
import { profileReducer } from "./User/Profile/Reducer"
import { adminProductReducer } from "./Admin/Product/Reducer"
import { userAdminReducer } from "./Admin/User/Reducer"
import { adminOrderReducer } from "./Admin/Order/Reducer"
import { cartReducer } from "./User/Cart/Reducer"
import { reviewReducer } from "./User/Review/Reducer"
import { addressReducer } from "./User/Address/Reducer"
import { orderReducer } from "./User/Order/Reducer"

const rootReducers = combineReducers({
    auth:authReducer,
    uproduct:userProductReducer,
    aproduct:adminProductReducer,
    auser:userAdminReducer,
    aorder:adminOrderReducer,
    profile:profileReducer,
    cart:cartReducer,
    review:reviewReducer,
    address:addressReducer,
    uorder:orderReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))