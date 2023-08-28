import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initialState = {
  error: null,
  loading: false,
  DataUser: {},
  email: "",
};

export const fetchUserData = createAsyncThunk("profile/fetchUserData", async (body) => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await axios.get("http://10.0.2.2:8080/api/v1/user", {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    data: body,
  });

  return response.data;
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        if (payload.error) {
          state.loading = false;
          state.error = "Error in data from backend";
          if (payload.email) {
            AsyncStorage.setItem('email', payload.email);
          }
        } else {
          state.loading = false;
          state.DataUser = { ...payload };
          AsyncStorage.setItem("DataUser", JSON.stringify(state.DataUser));
        }
      })
      .addCase(fetchUserData.rejected, (state, { error }) => {
        state.loading = true;
        state.DataUser = {};
        state.error = error.message;
      });
  },
});

export default profileSlice.reducer;
