import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	routesPoints: [
		[
			[59.8466, 30.2949],
			[59.8293, 30.4242],
			[59.8356, 30.3806],
		],
		[
			[59.8293, 30.4242],
			[59.8276, 30.4170],
			[59.8466, 30.2949],
		],
		[
			[59.8356, 30.3806],
			[59.8466, 30.2949],
			[59.8276, 30.4170],
		],
	],
	markers: [],
  // routeOne: [
  //   [59.8466, 30.2949],
  //   [59.8293, 30.4242],
  //   [59.8356, 30.3806],
  // ],
  // routeTwo: [
  //   [59.8293, 30.4242],
  //   [59.8276, 30.417],
  //   [59.8466, 30.2949],
  // ],
  // routeThree: [
  //   [59.8356, 30.3806],
  //   [59.8466, 30.2949],
  //   [59.8276, 30.417],
  // ],
  routesData: {
    code: "",
    routes: [],
    waypoints: [],
  },
  isFetching: false,
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setMarkers: (state, action) => {
      state.markers = action.payload;
    },
    getRoutesData: (state) => {
      state.isFetching = true;
    },
    fetchedRoutes: (state, action) => {
      state.isFetching = false;
      state.routesData = action.payload;
    },
  },
});

export const { setMarkers, getRoutesData, fetchedRoutes } = routesSlice.actions;
export default routesSlice.reducer;
