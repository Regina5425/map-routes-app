import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  center: [59.8356, 30.3806],
  zoom: 13,
};

export const mapViewSlice = createSlice({
  name: "mapView",
  initialState,
  reducers: {
    setCenter: (state, action) => {
      state.center = action.payload;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});

export const { setCenter, setZoom } = mapViewSlice.actions;
export default mapViewSlice.reducer;
