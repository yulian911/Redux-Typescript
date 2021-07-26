export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  DELITE_TODO = "DELITE_TODO",
}
export interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: string[];
}
export interface DeliteTodoAction {
  type: TodoActionTypes.DELITE_TODO;
  payload: number;
}

export type TodoAction = AddTodoAction | DeliteTodoAction;

export interface TodoState {
  todos: any[];
}
