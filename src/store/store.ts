import { configureStore } from "@reduxjs/toolkit";
import posts from "../slices/postsSlice/postsSlice";

const store = configureStore({
  reducer: {
    posts,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
