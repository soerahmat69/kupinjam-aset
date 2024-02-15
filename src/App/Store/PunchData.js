import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PunchStatus: false,
  PunchStatus1: false,
  PunchStatus2: false,
  PunchStatus3: false,
};
const PunchData = createSlice({
  name: "punchh",

  initialState,

  reducers: {
    reset: (state, action) => initialState,
    setPunchStatus: (state, action) => {
      state.PunchStatus = action.payload;
    },
    setPunchStatus1: (state, action) => {
      state.PunchStatus1 = action.payload;
    },
    setPunchStatus2: (state, action) => {
      state.PunchStatus2 = action.payload;
    },
    setPunchStatus3: (state, action) => {
      state.PunchStatus3 = action.payload;
    },
    setPunchStatus4: (state, action) => {
      state.PunchStatus = action.payload;
    },
  },
});

export const { setPunchStatus,setPunchStatus1,setPunchStatus2,setPunchStatus3,reset } = PunchData.actions;
export { PunchData };
