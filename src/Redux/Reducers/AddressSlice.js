import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  allAddresses: [],
  deletedId : null
};
{/*
 The rejectWithValue function is a utility provided by Redux Toolkit that 
 allows you to attach a specific
  value to the action payload when the async operation is rejected.
**/}

export const getAddresses = createAsyncThunk("address/getAddresses", async (body) => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await axios.get("http://10.0.2.2:8080/api/v1/user/addresses", {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    data: body,
  });

  return response.data;
});

export const addAddress = createAsyncThunk(
  'address/addAddress',
  async (body, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post('http://10.0.2.2:8080/api/v1/user/addresses', body, {
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

export const deleteAddress = createAsyncThunk(
  'address/deleteAddress', async (addressId ,thunkApI) => {
    const { rejectWithValue } = thunkApI;
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.delete(`http://10.0.2.2:8080/api/v1/user/addresses/${addressId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return addressId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const addressSlice = createSlice({
  name: 'Address',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddresses.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allAddresses = payload
        AsyncStorage.setItem('All_address', JSON.stringify(payload));
      })
      .addCase(getAddresses.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message
      })
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allAddresses = payload;
        AsyncStorage.setItem('All_address', JSON.stringify(payload));
      })
      .addCase(addAddress.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message

      })
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.allAddresses = state.allAddresses.filter((element) =>element.id !== action.payload);
        // console.log(action.payload)
       
      })
      .addCase(deleteAddress.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
    
  },
});


export default addressSlice.reducer;

