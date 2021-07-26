export interface CounterState {
  counter: number;
}
const initialState: CounterState = {
  counter: 0,
};
export enum CounterActionTypes {
  increment = "increment",
  decrement = "decrement",
}
interface addCounterAction {
  type: CounterActionTypes.increment;
}
interface minusCounterAction {
  type: CounterActionTypes.decrement;
}
export type CounterAction = addCounterAction | minusCounterAction;

export const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.increment:
      return { counter: (state.counter = +1) };
    case CounterActionTypes.decrement:
      return { counter: (state.counter = +2) };
    default:
      return state;
  }
};
