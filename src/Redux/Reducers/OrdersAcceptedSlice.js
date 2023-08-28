import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initialState = {
  error: null,
  loading: false,
  OrdersStatusAccepted: {},
};

export const getOrdersStatusAccepted = createAsyncThunk(
  'OrdersAcceptedStatus/getOrdersStatusAccepted',
  async (body) => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      const response = await axios.get('http://10.0.2.2:8080/api/v1/orders?status=accepted', {
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


const OrdersAcceptedSlice = createSlice({
  name: "OrdersAcceptedStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersStatusAccepted.pending, (state) => {
        console.log("getOrdersStatusAccepted.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrdersStatusAccepted.fulfilled, (state, { payload }) => {
        console.log("getOrdersStatusAccepted.fulfilled");
        state.loading = false;
        const orders = payload.map(order => ({
          ...order,
          orderLines: order.orderLines.map(orderLine => JSON.stringify(orderLine))
        }));
        const parsedPayload = orders.map((order) => ({
          ...order,
          orderLines: order.orderLines.map((orderLine) => JSON.parse(orderLine))
        }));
        state.OrdersStatusAccepted = parsedPayload;
        console.log(parsedPayload[0].orderLines)
        console.log("item: is ==> " ,parsedPayload[0].orderLines[0].item)
        
      })
      .addCase(getOrdersStatusAccepted.rejected, (state, { error }) => {
        console.log("getOrdersStatusAccepted.rejected");
        state.loading = true;
        state.error = error.message;
      })
    
  }
});

export default OrdersAcceptedSlice.reducer;


