import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const initialState = {
  error: null,
  loading: false,
  ALL_products: [],
};
export const productsFetch = createAsyncThunk(
  'ALL_products/productsFetch',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.get("http://10.0.2.2:8080/api/v1/catalog/items", {
        headers: {
          // types_oil 
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



const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        console.log("productsFetch.pending")

        state.loading = true;
        state.error = null;
      })
      .addCase(productsFetch.fulfilled, (state, {payload}) => {
        console.log("productsFetch.fulfilled")

        state.loading = false;
        
        state.ALL_products = payload
      })
      .addCase(productsFetch.rejected, (state, {error}) => {
        console.log("productsFetch.rejected")

        state.loading = false;
        state.error = error.message
      })
     
  },
})

export default ProductSlice.reducer;
