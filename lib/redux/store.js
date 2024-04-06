import { configureStore } from "@reduxjs/toolkit";
import { userReducer, filterReducer } from "./actions";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    appliedFilters: filterReducer,
  },
});
