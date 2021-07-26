import { TodoAction, TodoActionTypes, TodoState } from "../../types";

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "cos tam",
    },
  ],
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodoActionTypes.DELITE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };
    default:
      return state;
  }
};
