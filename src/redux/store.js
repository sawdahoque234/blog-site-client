import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice.js";
import BlogReducer from "./features/blogSlice";


export default configureStore({
  reducer: {
    auth: AuthReducer,
    blog: BlogReducer,
  },
});