// import { createStore } from "redux";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";

// const store = createStore(cakeReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
