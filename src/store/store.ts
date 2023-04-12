import { configureStore } from "@reduxjs/toolkit";
import configures from "./reducers/configure";

const store = configureStore({
  reducer: { configures },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
