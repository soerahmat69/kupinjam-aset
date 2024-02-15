import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data :[]
};
const ExportData = createSlice({
  name: "exportsData",

  initialState,

  reducers: {
    reset: (state, action) => initialState,
    setDataExport: (state, action) => {
      state.data = action.payload;
    },
     
  },
});

export const { setDataExport,reset } = ExportData.actions;
export { ExportData };
