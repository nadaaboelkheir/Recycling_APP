import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initialState = {
  error: null,
  loading: false,
  OrderLines: [],
};

export const getOrderLines = createAsyncThunk(
  'OrderLines/getOrderLines',
  async (body) => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      const response = await axios.get('http://10.0.2.2:8080/api/v1/cart/items', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: body,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);



export const postOrderLines = createAsyncThunk(
  'OrderLines/postOrderLines',
  async (itemId, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/items/${itemId}`, null, {
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

const CartOrdersLinesSlice = createSlice({
  name: "OrderLines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderLines.pending, (state) => {
        console.log("getOrderLines.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderLines.fulfilled, (state, { payload }) => {
        console.log("getOrderLines.fulfilled");
        state.loading = false;
        state.OrderLines = payload
      })
      .addCase(getOrderLines.rejected, (state, { error }) => {
        console.log("getOrderLines.rejected");
        state.loading = true;
        state.error = error.message;
      })
      .addCase(postOrderLines.pending, (state) => {
        console.log("postOrderLines.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(postOrderLines.fulfilled, (state) => {
        console.log("postOrderLines.fulfilled");
        state.loading = false;
      })
      .addCase(postOrderLines.rejected, (state, { error, payload }) => {
        console.log("postOrderLines.rejected");
        state.loading = true;
        state.error = error.message;
        return payload ? payload : error.message;
      });
  }
});

export default CartOrdersLinesSlice.reducer;
