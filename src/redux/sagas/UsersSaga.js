import {
  all,
  takeEvery,
  put,
  fork,
  call,
  takeLatest,
} from "redux-saga/effects";
import { REQUEST_LIST } from "../constants/Users";
import { receiveList } from "../actions/Users";

export function* getApiData() {
  let statusCode = 0;
  try {
    const myData = yield call(async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        statusCode = response.status;
        const data = await response.json();
        return data;
      } catch (e) {}
    });
    yield put(receiveList(myData));
  } catch (error) {
    console.log(error);
    yield put(receiveList([]));
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_LIST, getApiData);
}
