import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorRoutes: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    getErrorRoutes: (state, action) => {
      state.errorRoutes = action.payload;
    },
  },
});

export const { getErrorRoutes } = errorSlice.actions;
export default errorSlice.reducer;
