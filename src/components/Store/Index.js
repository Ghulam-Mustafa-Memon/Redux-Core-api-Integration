import { applyMiddleware, createStore } from "react-redux";
import thunk from "redux-thunk";
import { rootreducer } from "./Reducers/CombineReducers";

const store = createStore(rootreducer, {}, applyMiddleware(thunk))

export { store }