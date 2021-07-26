import axios from "axios";
import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "../reducer/userReducer";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
      try {
        dispatch({ type: UserActionTypes.FETCH_USER });
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setTimeout(
          () =>
            dispatch({
              type: UserActionTypes.FETCH_USER_SUCCESS,
              payload: res.data,
            }),
          500
        );
      } catch (e) {
        dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: "Error" });
      }
    };
  };