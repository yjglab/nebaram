import { Draft, createSlice } from "@reduxjs/toolkit";

export interface ProjectsState {}

export const initialState: ProjectsState = {};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    A: (state: Draft<ProjectsState>) => {},
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { A } = projectsSlice.actions;
