// !this is the importation part

import {
  LOADING,
  CHOOSE_ROLE,
  SUCCESS,
  FAIL,
  CURRENT_USER,
  LOGOUT_AUTH,
} from "../actionType/authActionType";

// !this is the initial state part
const initialState = {
  isLoadAuth: false,
  user: {
    role: "",
    name: "",
    phone: "",
    birthdate: "",
  },
  isAuth: false,
  password: "",
  successAuth: [],
  error: [],
};

// !this is the reducer function part

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      // console.log("isLoadAuth",state.isLoadAuth)
      return { ...state, isLoadAuth: true };
    case CHOOSE_ROLE:
      return {
        ...state,
        isLoadAuth: false,
        user: {
          ...state.user,
          role: payload.role,
        },
      };
    case SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        successAuth: payload.msg,
        isLoadAuth: false,
        user: payload.newUser,
        isAuth: true,
        error: [],
      };

    case FAIL:
      return { ...state, error: payload, isLoadAuth: false, successAuth: [] };
    case CURRENT_USER:
      return { ...state, user: payload.user, isAuth: true, isLoadAuth: false };
    case LOGOUT_AUTH:
      localStorage.clear();
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
// !this is the exportation part
export default authReducer;
