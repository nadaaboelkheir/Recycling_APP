import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



const initialState = {
  error: null,
  loading: false,
  charities: [],
  onecharity :{},
};


export const getcharities = createAsyncThunk(
  'charities/getcharities', async ( _,thunkApI) => {
    const { rejectWithValue } = thunkApI;
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.get('http://10.0.2.2:8080/api/v1/charities', {
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


export const getonecharity = createAsyncThunk(
  'onecharity/getonecharity', async ( id,thunkApI) => {
    const { rejectWithValue } = thunkApI;
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`http://10.0.2.2:8080/api/v1/charities/${id}`, {
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

const charitiesSlice = createSlice({
  name: "charities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getcharities.pending, (state) => {
        console.log("getcharities.pending")

        state.loading = true;
        state.error = null;
      })
      .addCase(getcharities.fulfilled, (state, { payload }) => {
        console.log("getcharities.fulfilled")
        state.loading = false;
        state.charities = payload

      })
      .addCase(getcharities.rejected, (state, { error ,payload }) => {
        console.log("getcharities.rejected")
        state.error = error.message;
        state.loading = false;
      })
      .addCase(getonecharity.pending, (state) => {
        console.log("getonecharity.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(getonecharity.fulfilled, (state, { payload }) => {
        console.log("getonecharity.fulfilled")
        state.loading = false;
        state.onecharity = {...payload}
        console.log(state , "  " , payload)
        
      })
      .addCase(getonecharity.rejected, (state, { error }) => {
        console.log("getonecharity.rejected")
        state.loading = false;
        state.error = error.message;
       
      });
  }

})



export default charitiesSlice.reducer;
