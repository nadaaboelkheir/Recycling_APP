import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  success: false,
  access_token: '',
};

export const GetresetPasswordCode = createAsyncThunk(
  'passwordReset/GetresetPasswordCode',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://10.0.2.2:8080/api/v1/password/reset/code?email=${email}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const PostresetPassword = createAsyncThunk(
  'passwordReset/PostresetPassword',
  async ({ body, code }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://10.0.2.2:8080/api/v1/password/reset/code?code=${code}`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const PostconfirmationPassword = createAsyncThunk(
  'passwordReset/PostconfirmationPassword',
  async (body, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('access_token');

      if (!token) {
        throw new Error('Access token is missing or invalid');
      }

      const response = await fetch('http://10.0.2.2:8080/api/v1/password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (response.status === 401) {
        throw new Error('Unauthorized request');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const passwordResetSlice = createSlice({
  name: 'passwordReset',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetresetPasswordCode.pending, (state) => {
        console.log("GetresetPasswordCode.pending")

        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GetresetPasswordCode.fulfilled, (state) => {
        console.log("GetresetPasswordCode.fulfilled")

        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(GetresetPasswordCode.rejected, (state, action) => {
        console.log("GetresetPasswordCode.rejected")

        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        console.log(action.error, "   ", action.payload)
      })
      .addCase(PostresetPassword.pending, (state) => {
        console.log("PostresetPassword.pending")
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(PostresetPassword.fulfilled, (state, { payload }) => {
        console.log("PostresetPassword.fulfilled")
        state.loading = false;
        state.success = true;
        state.access_token = payload.access_token;
        AsyncStorage.setItem('access_token', payload.access_token);
      })
      .addCase(PostresetPassword.rejected, (state, action) => {
        console.log("PostresetPassword.rejected")
        state.loading = false;
        state.success = false;
      })
      .addCase(PostconfirmationPassword.pending, (state) => {
        console.log("PostconfirmationPassword.pending")
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(PostconfirmationPassword.fulfilled, (state, { payload }) => {
        console.log("PostconfirmationPassword.fulfilled")

        state.loading = false;
        state.error = null;
        state.success = true;
        state.access_token = payload.access_token;
      })
      .addCase(PostconfirmationPassword.rejected, (state, action) => {
        console.log("PostconfirmationPassword.rejected")
        console.log(action , "     ", action.payload)
        state.loading = false;
        state.success = false;
      });


  },
});

export default passwordResetSlice.reducer;
