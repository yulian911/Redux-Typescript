import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer/intex";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
