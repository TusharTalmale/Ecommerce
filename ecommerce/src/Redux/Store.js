import { applyMiddleware,combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";
import ReviewReducer from "./Customers/Review/Reducer";


const rootReducers=combineReducers({

    auth:authReducer,
    cart:cartReducer,
    customersProduct:customerProductReducer,
    order:orderReducer,
    review:ReviewReducer,


});
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))