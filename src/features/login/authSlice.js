import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "", status: "" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
    },
    addStatus(state, action) {
      state.status = action.payload;
    },
    logout(state, action) {
      state.token = "";
      state.status = "";
    },
  },
});

export const { addToken, addStatus, logout } = authSlice.actions;

export default authSlice.reducer;
