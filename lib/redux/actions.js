import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: undefined,
  filters: [],
};

//Content remains if page refreshes
if (typeof window !== "undefined") {
  if (localStorage.getItem("currentUser")) {
    initialState.currentUser = localStorage.getItem("currentUser");
  } else {
    initialState.currentUser = undefined;
  }
}

export const userSlice = createSlice({
  name: "current_user",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.currentUser = actions.payload;
    },
  },
});

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    applyFilters: (state, actions) => {
      state.filters = actions.payload;
    },
    removeFilters: (state, actions) => {
      const { key, index } = actions.payload;
      state.filters[index][key] = "";
    },
  },
});

export const { login } = userSlice.actions;
export const { applyFilters, removeFilters } = filterSlice.actions;

export const userReducer = userSlice.reducer;
export const filterReducer = filterSlice.reducer;
