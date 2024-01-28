import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { projectsSlice } from "./slices/projects.slice";

const reducer = combineReducers({
  projects: projectsSlice.reducer,
});
const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
