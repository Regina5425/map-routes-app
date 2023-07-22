import { all, call, put, takeEvery } from "redux-saga/effects";
import { getRoutesData, fetchedRoutes } from "../store/reducers/routesSlice";
import { getErrorRoutes } from "../store/reducers/errorSlice";
import { getRouteApi } from "../api";

function* getRoutesSaga(action) {
  try {
    yield put(fetchedRoutes(yield call(getRouteApi, action.payload)));
  } catch {
    yield put({
      type: getErrorRoutes.type,
      payload: "Ошибка при загрузке маршрута",
    });
  }
}

function* watcherSaga() {
  yield all([yield takeEvery(getRoutesData.type, getRoutesSaga)]);
}

export function* rootSaga() {
  yield watcherSaga();
}
