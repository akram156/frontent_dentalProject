import axios from "axios";
import {
  // CLINIC_INFO,
  FAIL_CLINIC,
  GET_CLINIC_INFO,
  GET_CLINIC_OWNER,
  IS_DOCTOR,
  LOADING,
  SUCCESS_CLINIC,
} from "../actionType/clinicActionType";
import { toast } from "react-toastify";
export const getClinicInfo = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.get("/api/clinic/clincInfo");
    // console.log(result.data.clinics[0])
    dispatch({ type: GET_CLINIC_INFO, payload: result.data.clinics[0] });
  } catch (error) {
    dispatch({ type: FAIL_CLINIC, payload: error.response.data.errors });
    toast.error(error.response.data.errors[0])
  }
};

export const checkClinicOwner = (password) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.post("/api/clinic/checking", { password });
    dispatch({ type: SUCCESS_CLINIC, payload: result.data });
    dispatch({ type: IS_DOCTOR });
    // toast.success(result.data.msg)

    // console.log(result);
    return true;
  } catch (error) {
    // console.log(error);
    dispatch({ type: FAIL_CLINIC, payload: error.response.data.errors });
    toast.error(error.response.data.errors[0])
    // console.log(error.response.data.errors )
    return false;
  }
};

export const doctorValidation = () => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({ type: IS_DOCTOR });
  } catch (error) {
    dispatch({ type: FAIL_CLINIC, payload: error });
    // toast.error()
  }
};

export const addNurse = (newUser) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.post("/api/auth/register", newUser);
    dispatch({ type: SUCCESS_CLINIC, payload: result.data });
    toast.success("Nurse added successfuly")
    return true;
  } catch (error) {
    dispatch({ type: FAIL_CLINIC, payload: error.response.data.errors });
    toast.error(error.response.data.errors[0])
    return false;
  }
};

export const updateClinicInfos = (newInfo) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.put("/api/clinic/update", newInfo);
    dispatch({ type: SUCCESS_CLINIC, payload: result.data.msg });
    toast.success(result.data.msg )
  } catch (error) {
    // console.log(error)
    dispatch({ type: FAIL_CLINIC, payload: error.response.msg });
    toast.error(error.response.msg )
  }
};

export const getClinicOwner = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.get("/api/clinic/owner");
    dispatch({ type: GET_CLINIC_OWNER, payload: result.data.owner });
  } catch (error) {
    dispatch({ type: FAIL_CLINIC, payload: error.response.msg });
    toast.error(error.response.msg)
  }
};
