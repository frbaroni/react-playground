import {
  AUTH_LOGGING_IN,
  AUTH_LOGGED_IN,
  AUTH_LOGIN_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  error: false,
  success: false,
  token: undefined
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_LOGGING_IN:
      return { ...INITIAL_STATE };
    case AUTH_LOGGED_IN:
      return {
        ...state,
        success: true,
        error: false,
        token: action.token
      };
    case AUTH_LOGIN_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
