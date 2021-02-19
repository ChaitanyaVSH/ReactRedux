import { createStore } from "redux";
import cakeReducer from "./cake/CakeReducers";

const store = createStore(cakeReducer)

export default store;
