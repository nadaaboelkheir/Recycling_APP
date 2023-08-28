import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  loading: false,
  login: false,
  signUp: false,
  accessToken: "",
  userData: {},
  error: ""
} 

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  try {
    const response = await axios.post("http://10.0.2.2:8080/api/v1/registration", body, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// amirt2827@gmail.com جامد 
export const LoginUser = createAsyncThunk("LoginUser", async (body) => {
  try {
    const response = await axios.post("http://10.0.2.2:8080/api/v1/auth", body, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.accessToken = null;
      state.userData = null;
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('userData');
    }
  },
  extraReducers: (builder) => {
    // LoginUser
    builder
      .addCase(LoginUser.pending, (state, action) => {
        console.log("LoginUser.pending");
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, { payload }) => {
        console.log("LoginUser.fulfilled");
        if (payload.error) {
          console.log(payload.error)
          console.log("BAD CREDENTIALS");
        } else {
          state.login = true;
          state.loading = false;
          state.userData = payload.userData;
          console.log(payload);
          AsyncStorage.setItem('accessToken', payload.accessToken);
        }
      })
      .addCase(LoginUser.rejected, (state, { error }) => {
        console.log("LoginUser.rejected");
        state.loading = false;
        state.userData = null;
        state.error = error.message;
      });
    // SignUp
    builder
      .addCase(signUpUser.pending, (state, action) => {
        console.log("signUpUser.pending");
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        console.log("signUpUser.fulfilled");
        state.loading = false;
        console.log(payload);
        if (payload.error) {
          console.log("BAD CREDENTIALS");
        } else {
          state.signUp = true;
          state.loading = false;
          state.userData = payload.userData;
          console.log(payload);
        }
      })
      .addCase(signUpUser.rejected, (state, { error }) => {
        console.log("signUpUser.rejected");
        state.loading = false;
        state.userData = null;
        state.error = error.message;
        state.accessToken = null;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
