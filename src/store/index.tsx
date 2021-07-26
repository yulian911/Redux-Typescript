import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { rootReducer } from "./reducer/intex";

export const store = createStore(rootReducer, applyMiddleware(thunk));
