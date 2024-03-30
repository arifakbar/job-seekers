import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: undefined,
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
      state.currentUser = actions.currentUser;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
