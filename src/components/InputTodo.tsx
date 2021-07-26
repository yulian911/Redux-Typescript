import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../types";

export const InputTodo: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: {
        title: value,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setValue("");
  };
  return (
    <div>
      <label htmlFor="addFotm">ADD FORM</label>
      <input type="text" value={value} name="addForm" onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
