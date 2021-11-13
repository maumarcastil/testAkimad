import thunk from "redux-thunk";
import reducer from "./githubReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    github: reducer,
  },
  middleware: [thunk],
  devTools: true,
});
