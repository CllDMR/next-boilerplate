import { takeEvery, put } from "redux-saga/effects";

import { getExampleApi } from "../api/example";

import { EXAMPLE } from "../config/constants";

export function* getExample(action) {
  const data = yield getExampleApi(action.payload);

  yield put({ type: EXAMPLE.GET.ONE.REDUCER, payload: data });
}

export function* watchExampleAsync() {
  yield takeEvery(EXAMPLE.GET.ONE.SAGA, getExample);
}
