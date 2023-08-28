import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  loading: false,
  Orderline: [],
  error: ""
}
export const PostSubmitCart = createAsyncThunk(
  "SubmitCart/PostSubmitCart", async (body) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post("http://10.0.2.2:8080/api/v1/cart/submit", body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  });

// id.


export const deleteOrderline = createAsyncThunk(
  'SubmitCart/deleteOrderline',
  async (id, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.delete(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id.id}`, {
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


const SubmitSlice = createSlice({
  name: "SubmitCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostSubmitCart.pending, (state, action) => {
        console.log("PostSubmitCart.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(PostSubmitCart.fulfilled, (state, action) => {
        console.log("PostSubmitCart.fulfilled");
        state.loading = false;
        state.Orderline = action.payload
      })
      .addCase(PostSubmitCart.rejected, (state, { error, payload }) => {
        console.log("PostSubmitCart.rejected");
        state.error = error.message;
        state.loading = false;
        console.log(error, "     ", payload)
      })
      .addCase(deleteOrderline.pending, (state, action) => {
        console.log("deleteOrderline.pending");
        state.loading = true;
        state.error = null;

      })
      .addCase(deleteOrderline.fulfilled, (state, action) => {
        console.log("deleteOrderline.fulfilled");
        state.Orderline = state.Orderline.filter((item) => item.id !== action.payload);
        state.loading = false;
        console.log(action.payload)
      })
     
      .addCase(deleteOrderline.rejected, (state, action) => {
        console.log("deleteOrderline.rejected");
        state.error = action.error.message;
        state.loading = false;
        console.log(action)
      });
  }
});

export default SubmitSlice.reducer;
