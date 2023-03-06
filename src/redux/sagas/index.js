import { all } from "redux-saga/effects";
import UsersSaga from "./UsersSaga";
export default function* rootSaga(getState) {
  yield all([UsersSaga()]);
}
