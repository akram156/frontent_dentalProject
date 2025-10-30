// import { LOADING, CHOOSE_ROLE } from "../actionType/authActionType";
import axios from "axios";
import {
  CURRENT_USER,
  FAIL,
  LOADING,
  LOGOUT_AUTH,
  SUCCESS,
} from "../actionType/authActionType";
import { LOGOUT_CLINIC } from "../actionType/clinicActionType";
import { toast } from "react-toastify";
// export const chooseRole = (role) => async (dispatch) => {
//   dispatch({ type: "LOADING" });
//   dispatch({ type: "CHOOSE_ROLE", payload: { role } });
// };
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.post("/api/auth/register", newUser);
    // console.log("result");
    // result.status === 200 &&
    dispatch({ type: SUCCESS, payload: result.data });
    toast.success(result.data.msg);
    // result.status === 400 &&
    //   dispatch({ type: "FAIL", payload: result.data});
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
    toast.error(error.response.data.errors[0]);
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.post("/api/auth/login", user);
    dispatch({ type: SUCCESS, payload: result.data });
    toast.success(result.data.msg);
    // console.log(result.data);
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
    toast.error(error.response.data.errors[0]);
    // console.log(error.response.data.errors[0]);
  }
};

export const currnet = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/auth/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data.errors });
    // toast.error(error.response.data.errors[0])
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({ type: LOGOUT_AUTH });
    dispatch({ type: LOGOUT_CLINIC });
    toast.success("louged out successfuly");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.message });
    toast.error(error.message);
  }
};

export const editProfilefun = (newProfile, id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.put(`/api/auth/${id}`, newProfile);
    // dispatch({type:SUCCESS,payload:result.data.msg})
    // console.log(result.data.msg)
    dispatch(currnet());
    toast.success(result.data.msg);
  } catch (error) {
    // dispatch({type:FAIL,payload:error.response.msg})
    // console.log(error)
    toast.error(error.response.data.msg);
  }
};
