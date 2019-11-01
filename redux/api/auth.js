import { _post } from "../../utils/fetch";

export const signInAPI = async ({ email, password }) =>
  await _post({ path: "/auth/signIn", email, password });

export const signUpAPI = async ({ email, password }) =>
  await _post({ path: "/auth/signUp", email, password });
