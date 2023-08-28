import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initialState = {
  error: null,
  loading: false,
  DataUser: {},
};

export const PatchEditDataUser = createAsyncThunk(
  "EditDataUser/PatchEditDataUser",
  async (body) => {
    const token = await AsyncStorage.getItem("accessToken");

    const response = await axios.patch(
      "http://10.0.2.2:8080/api/v1/user",
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      }
    );

    return response.data;
  }
);

const EditDataUserSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PatchEditDataUser.pending, (state) => {
        console.log("PatchEditDataUser.pending")

        state.loading = true;
        state.error = null;
      })
      .addCase(PatchEditDataUser.fulfilled, (state, { payload }) => {
        console.log("PatchEditDataUser.fulfilled")
        if (payload.error) {
          state.loading = false;
          state.error = "Error in data from backend";
          if (payload.email) {
            AsyncStorage.setItem('email', payload.email);
          }
        } else {
          state.loading = false;
          state.DataUser = { ...payload };
          AsyncStorage.setItem("EditDataUser", JSON.stringify(state.EditDataUser));
        }
      })
      .addCase(PatchEditDataUser.rejected, (state, { error  , payload}) => {
        console.log("PatchEditDataUser.rejected")
        state.loading = false;
        state.DataUser = {};
        state.error = error.message;
      });
  },
});

export default EditDataUserSlice.reducer;
