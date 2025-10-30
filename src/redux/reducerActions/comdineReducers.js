import { combineReducers } from "redux";
import authReducer from "./authreducer";
import clinicReducer from "./clinicReducer";
import appoinmentReducer from "./appoinmentReducer";
const mainReducer = combineReducers({
  authReducer,
  clinicReducer,
  appoinmentReducer,
});
export default mainReducer;
