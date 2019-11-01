import { AUTH } from "../config/constants";
const { SIGNIN, SIGNUP } = AUTH;

export const signIn = payload => ({
  type: SIGNIN.SAGA,
  payload
});

export const signUp = payload => ({
  type: SIGNUP.SAGA,
  payload
});
