import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/login/loginSlice";
import authReducer from "./features/login/authSlice";

const store = configureStore({
  reducer: { user: userReducer, auth: authReducer },
});

export default store;
