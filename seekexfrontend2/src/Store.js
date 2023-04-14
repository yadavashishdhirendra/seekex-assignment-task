import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { UserManagementReducer } from "./Reducers/UserReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        createUser: UserManagementReducer
    }
})


// let initialState = {}
// const midleware = [thunk]
// const devTools =
//         process.env.NODE_ENV === "production"
//                 ? applyMiddleware(...midleware)
//                 : composeWithDevTools(applyMiddleware(...midleware));
// const store = createStore(reducer, initialState, devTools);

export default store