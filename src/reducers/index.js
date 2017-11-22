import { combineReducers } from "redux";
import auth from "./authReducer";

const playgroundApp = combineReducers({
  auth
});

export default playgroundApp;
