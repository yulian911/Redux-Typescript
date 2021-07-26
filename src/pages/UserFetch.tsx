
import {  FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hook/useTypeSelector";
import { fetchUsers } from "../store/action/action";
import { UserAction, UserActionTypes } from "../store/reducer/userReducer";

export const UserFetch: FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
