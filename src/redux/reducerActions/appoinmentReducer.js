import {
  BOOKER,
  FAIL_APP,
  FILL_APPOINMENTS,
  GET_APPOINMENTS,
  LOADING,
  SUCCESS_APP,
} from "../actionType/appoinmentType";

const initialState = {
  isLoadApp: false,
  appoinments: [],
  allAppoinments:[],
  booker:{},
  successApp: [],
  fail: [],
};

const appoinmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoadApp: true };
    case SUCCESS_APP:
      // console.log(state.success)
      return {
        ...state,
        successApp: [payload],
        fail: [],
        isLoadApp: false,
      };
    case FILL_APPOINMENTS:
      return { ...state, appoinments: payload ,isLoadApp:false};
    case FAIL_APP:
      // console.log(state.fail)
      return {
        ...state,
        fail: [ payload],
        successApp: [],
        isLoadApp: false,
      };
    case GET_APPOINMENTS:
      // console.log(payload)
      return {
        ...state,
        allAppoinments:payload,
        isLoadApp:false
      };
      case BOOKER:
        return {...state,booker:{...state.booker,[payload._id]:payload},isLoadApp:false}
    default:
      return state;
  }
};

export default appoinmentReducer;
