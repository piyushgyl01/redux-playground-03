import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./loggerMiddleware.js";

import libraryReducer from "./bookReducer";

const store = createStore(libraryReducer, applyMiddleware(loggerMiddleware));

export default store;
