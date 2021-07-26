import { FC } from "react";
import { useTypeSelector } from "../hook/useTypeSelector";

export const Counter: FC = () => {
  const counter = useTypeSelector((state) => state.counter);
  return (
    <div>
      <p>{counter}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
};
