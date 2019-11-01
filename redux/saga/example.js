import { takeEvery, call, put } from "redux-saga/effects";

import { EXAMPLE } from "../config/constants";
const { GET, POST, PATCH, DELETE } = EXAMPLE;

import {
  getAllAPI,
  getOneAPI,
  postAPI,
  patchAPI,
  deleteAPI
} from "../api/example";

export function* _getAll(action) {
  const [ok, data] = yield call(getAllAPI, action.payload);
  if (ok) yield put({ type: GET.ALL.REDUCER, payload: data });
}

export function* _getOne(action) {
  const [ok, data] = yield call(getOneAPI, action.payload);
  if (ok) yield put({ type: GET.ONE.REDUCER, payload: data });
}

export function* _post(action) {
  const [ok, data] = yield call(postAPI, action.payload);
  if (ok) yield put({ type: POST.REDUCER, payload: data });
}

export function* _patch(action) {
  const [ok, data] = yield call(patchAPI, action.payload);
  if (ok) yield put({ type: POST.REDUCER, payload: data });
}

export function* _delete(action) {
  const ok = yield call(deleteAPI, action.payload);
  if (ok) yield put({ type: POST.REDUCER, payload: action.payload });
}

export function* watchExample() {
  yield takeEvery(GET.ALL.SAGA, _getAll);
  yield takeEvery(GET.ONE.SAGA, _getOne);
  yield takeEvery(POST.SAGA, _post);
  yield takeEvery(PATCH.SAGA, _patch);
  yield takeEvery(DELETE.SAGA, _delete);
}
