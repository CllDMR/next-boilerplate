import { takeEvery, call, put } from "redux-saga/effects";

import { AUTH } from "../config/constants";
const { SIGNIN, SIGNUP } = AUTH;

import { signInAPI, signUpAPI } from "../api/auth";

export function* signIn(action) {
  const [ok, data] = yield call(signInAPI, action.payload);
  if (ok) yield put({ type: SIGNIN.REDUCER, payload: data });
}

export function* signUp(action) {
  const [ok, data] = yield call(signUpAPI, action.payload);
  if (ok) yield put({ type: SIGNUP.REDUCER, payload: data });
}

export function* watchAuth() {
  yield takeEvery(SIGNIN.SAGA, signIn);
  yield takeEvery(SIGNUP.SAGA, signUp);
}
