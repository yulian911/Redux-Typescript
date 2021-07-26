import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  users: userReducer,
  counter: counterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
