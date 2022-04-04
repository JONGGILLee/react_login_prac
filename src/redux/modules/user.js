// 액션, 액션생성함수, 리듀서, 기본값(initial state)

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// Action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
// const logIn = (user) => {
//   return {
//     type: LOG_IN,
//     user,
//   };
// };
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// Reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
// immer 불변성 관리 -> produce(state, (draft)=>{})

// Action creator export
const actionCreators = {
  logIn,
  logOut,
  getUser,
};

export { actionCreators };
