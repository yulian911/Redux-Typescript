import axios from "axios";
import { Dispatch, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hook/useTypeSelector";
import { UserAction, UserActionTypes } from "../store/reducer/userReducer";

export const UserFetch: FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const fetchUsers = () => {
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
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
