import { all } from "redux-saga/effects";

import { watchExample } from "./example";
import { watchAuth } from "./auth";

export default function* rootSaga() {
  yield all([watchExample(), watchAuth()]);
}
