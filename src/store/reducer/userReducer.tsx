export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}
interface fetchUserAction {
  type: UserActionTypes.FETCH_USER;
}
interface fetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: any[];
}
interface fetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export type UserAction =
  | fetchUserAction
  | fetchUserErrorAction
  | fetchUserSuccessAction;

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USER_ERROR:
      return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};
