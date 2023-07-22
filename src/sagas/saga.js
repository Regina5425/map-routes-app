import { all, call, put, takeEvery } from "redux-saga/effects";
import { getRoutesData, fetchedRoutes } from "../store/reducers/routesSlice";
import { getRouteApi } from "../api";

function* getRoutesSaga(action) {
  // try {
  //   yield put(fetchedRoutes(yield call(getRoute, action.payload)));
  // } catch {
  //   yield put({
  //     type: getPostsError.type,
  //     payload: "Ошибка при загрузке постов",
  //   });
  // }
  yield put(fetchedRoutes(yield call(getRouteApi, action.payload)));
}

function* watcherSaga() {
  yield all([yield takeEvery(getRoutesData.type, getRoutesSaga)]);
}

export function* rootSaga() {
  yield watcherSaga();
}
