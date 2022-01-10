import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import datesReducer from "./reducers/datesReducer";

const rootReducer = combineReducers({ dates: datesReducer });

const middlewares = [thunk];

let enhancer = applyMiddleware(...middlewares);

const configureStore = () => {
    return createStore(rootReducer, enhancer);
};

export default configureStore;
