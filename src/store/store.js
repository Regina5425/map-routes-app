import { configureStore } from "@reduxjs/toolkit";
import mapViewSlice from "./reducers/mapViewSlice";

export const store = configureStore({
  reducer: {
    mapView: mapViewSlice,
  },
});
