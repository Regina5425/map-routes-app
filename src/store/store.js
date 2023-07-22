import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mapViewSlice from "./reducers/mapViewSlice";
import routesSlice from "./reducers/routesSlice";
import errorSlice from "./reducers/errorSlice";
import { rootSaga } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    mapView: mapViewSlice,
    routes: routesSlice,
    error: errorSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);
