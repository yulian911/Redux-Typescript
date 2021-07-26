import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hook/useTypeSelector";
import { CounterActionTypes } from "../store/reducer/counterReducer";

export const Counter: FC = () => {
  const counter = useTypeSelector((state) => state.counter);
  const dispatch=  useDispatch()
  if(counter.counter===25)
  {
    return <h1>Przestan KURWA TO ROBIC</h1>
  }
  return (
    <div>
      <p>{counter.counter}</p>
      <button onClick={()=>dispatch({type:CounterActionTypes.increment})}>+</button>
      <button onClick={()=>dispatch({type:CounterActionTypes.decrement})}>-</button>
    </div>
  );
};
