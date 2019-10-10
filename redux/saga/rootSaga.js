import { all } from "redux-saga/effects";

import { watchExampleAsync } from "./exampleSaga";

export default function* rootSaga() {
  yield all([watchExampleAsync()]);
}
