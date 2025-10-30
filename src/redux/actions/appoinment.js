import { toast } from "react-toastify";
import {
  BOOKER,
  FAIL_APP,
  FILL_APPOINMENTS,
  GET_APPOINMENTS,
  LOADING,
  SUCCESS_APP,
} from "../actionType/appoinmentType";
import axios from "axios";
export const getMyAppoinments = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/appoinment/getApp", config);
    dispatch({ type: FILL_APPOINMENTS, payload: result.data.apps });
    // console.log(result);
  } catch (error) {
    dispatch({ type: FAIL_APP, payload: error.response.data.msg });
    // toast.error( error.response.data.msg)
    // console.log(error);
  }
};
export const takeAppoinment = (appoin) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.post("/api/appoinment/takeAppoinment", appoin);
    dispatch({ type: SUCCESS_APP, payload: result.data.msg });
    toast.success(result.data.msg )
    dispatch(getMyAppoinments());
    // console.log(result.data.msg)
  } catch (error) {
    dispatch({ type: FAIL_APP, payload: error.response.data.msg });
    toast.error( error.response.data.msg)
    // console.log(error.response.data.msg)
  }
};


export const editApp = (newAppInfo, id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.put(`/api/appoinment/${id}`, newAppInfo);
    dispatch({ type: SUCCESS_APP, payload: result.data.msg });
    toast.success(result.data.msg)
    dispatch(getMyAppoinments());
  } catch (error) {
    dispatch({ type: FAIL_APP, payload: error.response.msg });
    toast.error(error.response.msg)
  }
};

export const getAllApp = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.get("/api/appoinment/getAllApp");
    
    // console.log('app',app)
    // console.log('app',result.data.app)
    dispatch({ type: GET_APPOINMENTS, payload: result.data.app });
    // console.log(app)
  } catch (error) {
    dispatch({ type: FAIL_APP, payload: error.response.msg });
    toast.error(error.response.msg)
  }
};

export const deleteApppoi = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const result = await axios.delete(`/api/appoinment/${id}`);
    dispatch({ type: SUCCESS_APP, payload: result.data.msg });
    toast.success(result.data.msg )
    dispatch(getMyAppoinments());
    dispatch(getAllApp())
    // console.log(result)
  } catch (error) {
    // console.log(error)
    dispatch({ type: FAIL_APP, payload: error.response.msg });
    toast.error( error.response.msg)
  }
};

export const getBooker=(bookedBy)=>async(dispatch)=>{
  dispatch({type:LOADING})
  try {
    const result=await axios.get(`/api/appoinment/${bookedBy}`)
    // console.log("result",result.data.booker)
    dispatch({type:BOOKER,payload:result.data.booker})

  } catch (error) {
    // console.log(error)
    dispatch({type:FAIL_APP,payload:error.response.msg})
    toast.error(error.response.msg)
  }
}