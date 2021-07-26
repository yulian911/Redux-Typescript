import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hook/useTypeSelector";
import { TodoActionTypes } from "../types";

export const Todo = () => {
  const { todos } = useTypeSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleClick = (id: { id: any }) => {
    dispatch({ type: TodoActionTypes.DELITE_TODO, payload: id });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div>
          {todo.id}-{todo.title}
          <button onClick={() => handleClick(todo.id)}>Usun</button>
        </div>
      ))}
    </div>
  );
};
