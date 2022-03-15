import { all } from "redux-saga/effects";
import userSaga from "./getUsers";
export default function* rootSaga() {
  yield all([userSaga()]);
}
