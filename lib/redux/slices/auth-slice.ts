import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "auth-slice",
  initialState: { authenticated: false },
  reducers: {
    login: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.authenticated = false;
    }
  },
});
