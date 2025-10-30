// !this is the importation part

import {
  CLINIC_INFO,
  FAIL_CLINIC,
  GET_CLINIC_INFO,
  GET_CLINIC_OWNER,
  IS_DOCTOR,
  LOADING,
  LOGOUT_CLINIC,
  SUCCESS_CLINIC,
} from "../actionType/clinicActionType";

// !this is the initial state part
const initialState = {
  clinicInfo: {},
  clinicOwner: {},
  successClinic: [],
  errorClinic: [],
  isDoctor: false,
  isLoadClinic: false,
};

// !this is the reducer function part

const clinicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CLINIC_INFO:
      // console.log('payload',payload)
      return { ...state, clinicInfo: payload, isLoadClinic: false };
    case LOADING:
      return { ...state, isLoadClinic: true };
    // case VALID_DOCTOR:
    //   return {...state,isDoctor:payload,isLoad:false  }
    case IS_DOCTOR:
      return { ...state, isDoctor: true, isLoadClinic: false };
    case SUCCESS_CLINIC:
      return {
        ...state,
        successClinic: payload.msg,
        isLoadClinic: false,
        errorClinic: [],
      };
    case FAIL_CLINIC:
      return {
        ...state,
        errorClinic: payload,
        isLoadClinic: false,
        successClinic: [],
      };
    case LOGOUT_CLINIC:
      return { ...state, isDoctor: false, isLoadClinic: false };
    // case CLINIC_INFO:
    //   return { ...state, clinicInfo: payload.updateClinic };
    case GET_CLINIC_OWNER:
      return { ...state, clinicOwner: payload, isLoadClinic: false };
    default:
      return state;
  }
};
// !this is the exportation part
export default clinicReducer;
