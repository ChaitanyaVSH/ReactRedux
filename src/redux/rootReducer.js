import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducers";
import iceCreamReducer from "./icecream/IceCreamReducers";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export default rootReducer;
