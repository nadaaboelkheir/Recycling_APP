import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



const initialState = {
  error: null,
  loading: false,
  donations: {},
  ALL_Donations: {},
};

export const postdonation = createAsyncThunk(
  'donation/postdonation',
  async (body, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post('http://10.0.2.2:8080/api/v1/donations', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getdonation = createAsyncThunk(
  'donation/getdonation', async (_, thunkApI) => {
    const { rejectWithValue } = thunkApI;
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.get('http://10.0.2.2:8080/api/v1/donations', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); 

const DonationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postdonation.pending, (state) => {
        console.log("postdonation.pending")

        state.loading = true;
        state.error = null;
      })
      .addCase(postdonation.fulfilled, (state, { payload }) => {
        console.log("postdonation.fulfilled, payload: \n", payload)
        state.loading = false;
        state.donations = {
          ...payload
        }
      })
      .addCase(postdonation.rejected, (state, { error, payload }) => {
        console.log("postdonation.rejected, payload: \n", payload)
        state.error = error.message;
        state.loading = false;
        console.log(state, "  ", payload)

      })
      .addCase(getdonation.pending, (state) => {
        console.log("getdonation.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(getdonation.fulfilled, (state, { payload }) => {
        console.log("getdonation.fulfilled")
        state.loading = false;
        state.ALL_Donations = { ...payload }
      })
      .addCase(getdonation.rejected, (state, { error, payload }) => {
        console.log("getdonation.rejected, payload: \n", payload)
        state.error = error.message;
        state.loading = false;

      })
  }

})



export default DonationSlice.reducer;
