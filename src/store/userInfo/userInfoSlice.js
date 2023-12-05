import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: "",
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = "";
      localStorage.clear();
    },
  },
});

export const { remove, set } = userInfoSlice.actions;

export default userInfoSlice.reducer;
