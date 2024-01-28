import { ProjectSectionCategory } from "@/@types";
import { Draft, createSlice } from "@reduxjs/toolkit";

export interface ProjectsState {
  category: ProjectSectionCategory;
}

export const initialState: ProjectsState = {
  category: "development",
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    SET_CATEGORY: (state: Draft<ProjectsState>, { payload }) => {
      state.category = payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { SET_CATEGORY } = projectsSlice.actions;
