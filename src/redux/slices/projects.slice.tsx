import {
  ProjectData,
  ProjectDesign,
  ProjectDevelopment,
  ProjectOngoing,
  ProjectSectionCategory,
} from "@/@types";
import { Draft, createSlice } from "@reduxjs/toolkit";

export interface ProjectsState {
  category: ProjectSectionCategory;
  projectsData: {
    development: ProjectDevelopment[];
    design: ProjectDesign[];
    ongoing: ProjectOngoing[];
  };
  projects: ProjectData[];
}

export const initialState: ProjectsState = {
  category: "development",
  projects: [],
  projectsData: {
    development: [],
    design: [],
    ongoing: [],
  },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    SET_PROJECTS_DATA: (state: Draft<ProjectsState>, { payload }) => {
      const { development, design, ongoing } = payload;
      state.projectsData = {
        development,
        design,
        ongoing,
      };
    },
    SET_PROJECTS: (state: Draft<ProjectsState>, { payload }) => {
      const category = payload;
      if (category === "all") {
        state.projects = [
          ...state.projectsData.ongoing,
          ...state.projectsData.development,
          ...state.projectsData.design,
        ];
      } else if (category === "development") {
        state.projects = state.projectsData.development;
      } else if (category === "design") {
        state.projects = state.projectsData.design;
      } else if (category === "ongoing") {
        state.projects = state.projectsData.ongoing;
      }
    },
    SET_CATEGORY: (state: Draft<ProjectsState>, { payload }) => {
      state.category = payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { SET_PROJECTS_DATA, SET_PROJECTS, SET_CATEGORY } =
  projectsSlice.actions;
