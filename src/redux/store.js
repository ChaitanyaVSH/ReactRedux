import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../redux/rootReducer";

const middleWare = applyMiddleware(logger)
const store = createStore(rootReducer,middleWare);

export default store;
