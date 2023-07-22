import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  center: [59.8356, 30.3806],
  zoom: 13,
  markers: [
    { coords: [59.8466, 30.2949], id: 1 },
    { coords: [59.8293, 30.4242], id: 2 },
    { coords: [59.8356, 30.3806], id: 3 },
    { coords: [59.8276, 30.417], id: 4 },
  ],
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
		setMarkers: (state, action) => {
			state.markers = action.payload;
		}
  },
});

export const { setCenter, setZoom, setMarkers } = mapViewSlice.actions;
export default mapViewSlice.reducer;
