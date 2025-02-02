import { createSlice } from "@reduxjs/toolkit";

const timeRangeSlice = createSlice({
  name: "time-range-slice",
  initialState: { range: "This Week" },
  reducers: {
    setTimeRange: (state, action) => {
      state.range = action.payload;
    },
  },
});