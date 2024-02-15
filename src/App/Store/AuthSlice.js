import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userses: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isLoggedIn:false
};

const initialStateLogin = {
  userses: null,
  isError: false,
  isSuccessLogin: false,
  isLoading: false,
  messageLogin: "",
  isLoggedIn:false
};
export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: user.username,
        password: user.password,
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const UserSess = createAsyncThunk(
  "user/UserSess",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/profile");
      return response.data.data[0];
    } catch (error) {
      if (error.response) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState},
  },
  extraReducers: (builder) => {
  
    // user sess
    builder.addCase(UserSess.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UserSess.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userses = action.payload;
    });
    builder.addCase(UserSess.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = true;
      state.message = action.payload;
    });
  },
});
const authLoginslice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    resetLogin: (state) => {
      return initialStateLogin},
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccessLogin = true;
      state.userses = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageLogin = action.payload;
    });
 
  },
});
//   export const { setClickStatus } = sidebarSlice.actions;
export const { reset } = authSlice.actions;
export const { resetLogin } = authLoginslice.actions;
export { authSlice,authLoginslice };
