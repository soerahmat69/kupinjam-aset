import { configureStore } from '@reduxjs/toolkit'
import {authLoginslice, authSlice} from './AuthSlice'
import { PunchData } from './PunchData';
import { ExportData } from './ExportData';

const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    punchh:PunchData.reducer,
    authLogin :authLoginslice.reducer,
    exportsData: ExportData.reducer
  },
});


  export default Store