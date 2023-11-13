import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", password: "" };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { updateName, updatePassword } = userSlice.actions;

export default userSlice.reducer;
