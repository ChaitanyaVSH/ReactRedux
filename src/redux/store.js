import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "../redux/rootReducer";

const middleWare = applyMiddleware(logger)
const store = createStore(rootReducer, compose(
    middleWare,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;
// https://github.com/zalmoxisus/redux-devtools-extension/issues/126