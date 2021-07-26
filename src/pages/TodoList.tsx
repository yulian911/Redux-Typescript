import { FC } from "react";
import { InputTodo } from "../components/InputTodo";
import { Todo } from "../components/Todo";

export const TododList: FC = () => {
  return (
    <div>
      <InputTodo />
      <Todo />
    </div>
  );
};
