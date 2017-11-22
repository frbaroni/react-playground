import authService from "../services/authService";
import { AUTH_LOGGING_IN, AUTH_LOGGED_IN, AUTH_LOGIN_FAILED } from "./types";

export function login({ email, password, rememberMe }) {
  return dispatch => {
    dispatch({ type: AUTH_LOGGING_IN });
    return authService()
      .login(email, password, rememberMe)
      .then(status => {
        if (status) {
          dispatch({ type: AUTH_LOGGED_IN });
        } else {
          dispatch({ type: AUTH_LOGIN_FAILED });
        }
      });
  };
}
